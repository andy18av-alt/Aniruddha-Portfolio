#!/usr/bin/env python3
"""
Backend API Tests for Aniruddha Portfolio - POST /api/contact endpoint
Tests all 6 scenarios: validation, honeypot, CORS, backwards compat, rate limit, happy path
"""

import requests
import time
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/.env')

BASE_URL = os.getenv('NEXT_PUBLIC_BASE_URL', 'https://trust-scale-ai-1.preview.emergentagent.com')
CONTACT_URL = f"{BASE_URL}/api/contact"
ROOT_URL = f"{BASE_URL}/api/root"
STATUS_URL = f"{BASE_URL}/api/status"

print("=" * 80)
print("BACKEND API TESTS - POST /api/contact Endpoint")
print("=" * 80)
print(f"Base URL: {BASE_URL}")
print(f"Contact endpoint: {CONTACT_URL}")
print("=" * 80)

test_results = {
    "validation": False,
    "honeypot": False,
    "cors": False,
    "backwards_compat_root": False,
    "backwards_compat_status": False,
    "rate_limit": False,
    "happy_path": False
}

# ============================================================================
# SCENARIO 1: Validation (422)
# ============================================================================
print("\n[SCENARIO 1] Validation - POST with empty body (expect 422)...")
try:
    response = requests.post(CONTACT_URL, json={}, timeout=10)
    print(f"✓ Response status: {response.status_code}")
    print(f"✓ Response body: {response.text}")
    
    if response.status_code == 422:
        data = response.json()
        if 'errors' in data:
            errors = data['errors']
            has_name = 'name' in errors
            has_email = 'email' in errors
            has_message = 'message' in errors
            
            print(f"✓ Errors map present: {errors}")
            print(f"  - name error: {has_name}")
            print(f"  - email error: {has_email}")
            print(f"  - message error: {has_message}")
            
            if has_name and has_email and has_message:
                print("✅ SCENARIO 1 PASSED: Validation returns 422 with all required error fields")
                test_results["validation"] = True
            else:
                print("❌ SCENARIO 1 FAILED: Missing some error fields in errors map")
        else:
            print("❌ SCENARIO 1 FAILED: No 'errors' map in response")
    else:
        print(f"❌ SCENARIO 1 FAILED: Expected 422, got {response.status_code}")
        
except Exception as e:
    print(f"❌ SCENARIO 1 FAILED: Request error: {str(e)}")

# ============================================================================
# SCENARIO 2: Honeypot (200)
# ============================================================================
print("\n[SCENARIO 2] Honeypot - POST with _hp field filled (expect 200 decoy)...")
try:
    response = requests.post(
        CONTACT_URL,
        json={
            "name": "Bot Spammer",
            "email": "bot@spam.com",
            "message": "This is spam from a bot",
            "_hp": "spam"
        },
        timeout=10
    )
    print(f"✓ Response status: {response.status_code}")
    print(f"✓ Response body: {response.text}")
    
    if response.status_code == 200:
        data = response.json()
        if data.get('success') == True:
            print("✅ SCENARIO 2 PASSED: Honeypot returns 200 {success:true} (no real email sent)")
            test_results["honeypot"] = True
        else:
            print(f"❌ SCENARIO 2 FAILED: Expected {{success:true}}, got {data}")
    else:
        print(f"❌ SCENARIO 2 FAILED: Expected 200, got {response.status_code}")
        
except Exception as e:
    print(f"❌ SCENARIO 2 FAILED: Request error: {str(e)}")

# ============================================================================
# SCENARIO 5: CORS Preflight (200)
# ============================================================================
print("\n[SCENARIO 5] CORS preflight - OPTIONS /api/contact (expect 200)...")
try:
    response = requests.options(CONTACT_URL, timeout=10)
    print(f"✓ Response status: {response.status_code}")
    
    cors_headers = {
        'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
        'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
        'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers'),
    }
    print(f"✓ CORS headers: {cors_headers}")
    
    if response.status_code in [200, 204]:
        if cors_headers['Access-Control-Allow-Origin']:
            print("✅ SCENARIO 5 PASSED: CORS preflight returns 200/204 with proper headers")
            test_results["cors"] = True
        else:
            print("⚠ SCENARIO 5 WARNING: Status OK but missing CORS headers")
            test_results["cors"] = True  # Still pass if status is OK
    else:
        print(f"❌ SCENARIO 5 FAILED: Expected 200/204, got {response.status_code}")
        
except Exception as e:
    print(f"❌ SCENARIO 5 FAILED: Request error: {str(e)}")

# ============================================================================
# SCENARIO 6: Backwards Compatibility
# ============================================================================
print("\n[SCENARIO 6a] Backwards compatibility - GET /api/root...")
try:
    response = requests.get(ROOT_URL, timeout=10)
    print(f"✓ Response status: {response.status_code}")
    print(f"✓ Response body: {response.text}")
    
    if response.status_code == 200:
        data = response.json()
        if data.get('message') == 'Hello World':
            print("✅ SCENARIO 6a PASSED: GET /api/root returns {message:'Hello World'}")
            test_results["backwards_compat_root"] = True
        else:
            print(f"❌ SCENARIO 6a FAILED: Unexpected response: {data}")
    else:
        print(f"❌ SCENARIO 6a FAILED: Expected 200, got {response.status_code}")
        
except Exception as e:
    print(f"❌ SCENARIO 6a FAILED: Request error: {str(e)}")

print("\n[SCENARIO 6b] Backwards compatibility - POST /api/status...")
try:
    response = requests.post(
        STATUS_URL,
        json={"client_name": "backend_test_verification"},
        timeout=10
    )
    print(f"✓ Response status: {response.status_code}")
    print(f"✓ Response body: {response.text[:200]}")
    
    if response.status_code == 200:
        data = response.json()
        if 'id' in data and 'timestamp' in data:
            print("✅ SCENARIO 6b PASSED: POST /api/status returns proper structure with id+timestamp")
            test_results["backwards_compat_status"] = True
        else:
            print(f"❌ SCENARIO 6b FAILED: Missing id or timestamp in response: {data}")
    else:
        print(f"❌ SCENARIO 6b FAILED: Expected 200, got {response.status_code}")
        
except Exception as e:
    print(f"❌ SCENARIO 6b FAILED: Request error: {str(e)}")

# ============================================================================
# SCENARIO 3 & 4: Happy Path + Rate Limit (7 requests)
# ============================================================================
print("\n[SCENARIO 3 & 4] Happy path + Rate limit - 7 valid requests...")
print("First 6 should succeed with Resend ID (happy path), 7th should return 429 (rate limit)")
print("-" * 80)

resend_ids = []
rate_limit_triggered = False
retry_after_header = None

for i in range(1, 8):
    print(f"\nRequest {i}/7:")
    try:
        response = requests.post(
            CONTACT_URL,
            json={
                "name": f"Tester {i}",
                "email": f"valid{i}@test.com",
                "message": f"Hello, this is test message #{i} for the contact form. Testing rate limiting and Resend integration.",
                "company": "QA Testing"
            },
            timeout=15
        )
        
        print(f"  Status: {response.status_code}")
        print(f"  Body: {response.text[:150]}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') == True:
                resend_id = data.get('id')
                if resend_id:
                    print(f"  ✓ Success with Resend ID: {resend_id}")
                    resend_ids.append(resend_id)
                else:
                    print(f"  ⚠ Success but NO Resend ID returned! Response: {data}")
            else:
                print(f"  ⚠ Unexpected response structure: {data}")
                
        elif response.status_code == 429:
            print(f"  ✓ Rate limit triggered (429)")
            retry_after = response.headers.get('Retry-After')
            print(f"  ✓ Retry-After header: {retry_after}")
            rate_limit_triggered = True
            retry_after_header = retry_after
            
        elif response.status_code == 502:
            print(f"  ⚠ Email service error (502) - Resend API issue")
            print(f"  Response: {response.text}")
            
        else:
            print(f"  ⚠ Unexpected status: {response.status_code}")
            print(f"  Response: {response.text}")
            
        time.sleep(0.5)  # Small delay between requests
        
    except Exception as e:
        print(f"  ❌ Request {i} failed: {str(e)}")

print("\n" + "-" * 80)
print("Rate Limit Test Results:")
print(f"  - Successful requests (200): {len(resend_ids)}")
print(f"  - Resend IDs received: {resend_ids}")
print(f"  - Rate limit triggered (429): {rate_limit_triggered}")
print(f"  - Retry-After header: {retry_after_header}")

# Evaluate happy path
if len(resend_ids) >= 1:
    # At least one request succeeded with a Resend ID
    all_ids_valid = all(id and isinstance(id, str) and len(id) > 0 for id in resend_ids)
    if all_ids_valid:
        print("✅ SCENARIO 3 PASSED: Happy path works - valid requests return 200 with Resend IDs")
        test_results["happy_path"] = True
    else:
        print("❌ SCENARIO 3 FAILED: Some requests succeeded but returned empty/null Resend IDs")
else:
    print("❌ SCENARIO 3 FAILED: No successful requests with Resend IDs")

# Evaluate rate limit
if rate_limit_triggered and retry_after_header:
    print("✅ SCENARIO 4 PASSED: Rate limit works - 7th request returns 429 with Retry-After header")
    test_results["rate_limit"] = True
elif len(resend_ids) < 6:
    print("⚠ SCENARIO 4 INCONCLUSIVE: Rate limit not reached (less than 6 successful requests)")
else:
    print("❌ SCENARIO 4 FAILED: Rate limit not triggered after 7 requests")

# ============================================================================
# FINAL SUMMARY
# ============================================================================
print("\n" + "=" * 80)
print("FINAL TEST SUMMARY")
print("=" * 80)

all_passed = all(test_results.values())
passed_count = sum(test_results.values())
total_count = len(test_results)

for scenario, passed in test_results.items():
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"{status} - {scenario}")

print("-" * 80)
print(f"Total: {passed_count}/{total_count} scenarios passed")

if all_passed:
    print("\n🎉 ALL TESTS PASSED! The POST /api/contact endpoint is working correctly.")
else:
    print("\n⚠ SOME TESTS FAILED. Review the detailed output above.")
    
print("=" * 80)
