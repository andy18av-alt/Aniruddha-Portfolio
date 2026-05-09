#!/usr/bin/env python3
"""
Backend API Tests for Aniruddha Portfolio
Tests the POST /api/contact endpoint and backwards compatibility
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
print("BACKEND API TESTS - Aniruddha Portfolio")
print("=" * 80)
print(f"Base URL: {BASE_URL}")
print(f"Contact endpoint: {CONTACT_URL}")
print("=" * 80)

# Test 1: Check if POST /api/contact endpoint exists
print("\n[TEST 1] Checking if POST /api/contact endpoint exists...")
try:
    response = requests.post(
        CONTACT_URL,
        json={
            "name": "John Smith",
            "email": "john.smith@example.com",
            "message": "This is a test message to verify the endpoint exists."
        },
        timeout=10
    )
    print(f"✓ Response status: {response.status_code}")
    print(f"✓ Response body: {response.text[:200]}")
    
    if response.status_code == 404:
        print("❌ CRITICAL: POST /api/contact endpoint returns 404 - NOT IMPLEMENTED!")
    elif response.status_code == 200:
        print("✓ Endpoint exists and returned 200")
    else:
        print(f"⚠ Endpoint exists but returned unexpected status: {response.status_code}")
        
except Exception as e:
    print(f"❌ Request failed: {str(e)}")

# Test 2: CORS preflight check
print("\n[TEST 2] CORS preflight - OPTIONS /api/contact...")
try:
    response = requests.options(CONTACT_URL, timeout=10)
    print(f"✓ Response status: {response.status_code}")
    
    cors_headers = {
        'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
        'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
        'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers'),
    }
    print(f"✓ CORS headers: {cors_headers}")
    
    if response.status_code == 200:
        print("✓ CORS preflight passed")
    else:
        print(f"❌ CORS preflight failed with status {response.status_code}")
        
except Exception as e:
    print(f"❌ CORS test failed: {str(e)}")

# Test 3: Backwards compatibility - GET /api/root
print("\n[TEST 3] Backwards compatibility - GET /api/root...")
try:
    response = requests.get(ROOT_URL, timeout=10)
    print(f"✓ Response status: {response.status_code}")
    print(f"✓ Response body: {response.text}")
    
    if response.status_code == 200:
        data = response.json()
        if data.get('message') == 'Hello World':
            print("✓ GET /api/root working correctly")
        else:
            print(f"⚠ Unexpected response: {data}")
    else:
        print(f"❌ GET /api/root failed with status {response.status_code}")
        
except Exception as e:
    print(f"❌ GET /api/root test failed: {str(e)}")

# Test 4: Backwards compatibility - POST /api/status
print("\n[TEST 4] Backwards compatibility - POST /api/status...")
try:
    response = requests.post(
        STATUS_URL,
        json={"client_name": "test_client_backend_verification"},
        timeout=10
    )
    print(f"✓ Response status: {response.status_code}")
    print(f"✓ Response body: {response.text[:200]}")
    
    if response.status_code == 200:
        data = response.json()
        if 'id' in data and 'client_name' in data:
            print("✓ POST /api/status working correctly")
        else:
            print(f"⚠ Unexpected response structure: {data}")
    else:
        print(f"❌ POST /api/status failed with status {response.status_code}")
        
except Exception as e:
    print(f"❌ POST /api/status test failed: {str(e)}")

print("\n" + "=" * 80)
print("TEST SUMMARY")
print("=" * 80)
print("The POST /api/contact endpoint appears to be NOT IMPLEMENTED in the code.")
print("Helper functions exist (Resend, rate limiting, email templates) but the")
print("actual route handler for '/contact' is missing from the handleRoute function.")
print("=" * 80)
