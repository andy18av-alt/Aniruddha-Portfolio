import { KNOWLEDGE_BASE } from './knowledgeBase';

export function retrieveRelevantContext(userQuery) {
  const query = userQuery.toLowerCase();
  let matchedSnippets = [];

  if (query.includes('trust') || query.includes('safety') || query.includes('fraud') || query.includes('risk') || query.includes('flipkart')) {
    matchedSnippets.push("TRUST & SAFETY & FLIPKART EXPERIENCE:\n" + JSON.stringify(KNOWLEDGE_BASE.core_expertise.trust_and_safety, null, 2));
    matchedSnippets.push("STAR STORY - T&S TRANSFORMATION:\n" + JSON.stringify(KNOWLEDGE_BASE.star_frameworks.trust_and_safety_transformation, null, 2));
  }

  if (query.includes('ai') || query.includes('automation') || query.includes('trustos') || query.includes('eva') || query.includes('agent') || query.includes('voice')) {
    matchedSnippets.push("ENTERPRISE AI & TRUSTOS:\n" + JSON.stringify(KNOWLEDGE_BASE.core_expertise.enterprise_ai, null, 2));
    matchedSnippets.push("TRUSTOS ARCHITECTURE:\n" + JSON.stringify(KNOWLEDGE_BASE.core_expertise.trustos, null, 2));
    matchedSnippets.push("EVA COMMAND CENTER:\n" + JSON.stringify(KNOWLEDGE_BASE.core_expertise.eva_command_center, null, 2));
    matchedSnippets.push("STAR STORY - TRUSTOS:\n" + JSON.stringify(KNOWLEDGE_BASE.star_frameworks.trustos_ai_native_tns, null, 2));
  }

  if (query.includes('impact') || query.includes('metric') || query.includes('g2n') || query.includes('result') || query.includes('return') || query.includes('crore') || query.includes('bps')) {
    matchedSnippets.push("VERIFIED METRICS:\n" + JSON.stringify(KNOWLEDGE_BASE.verified_metrics, null, 2));
    matchedSnippets.push("G2N OPTIMIZATION STAR STORY:\n" + JSON.stringify(KNOWLEDGE_BASE.star_frameworks.g2n_optimization, null, 2));
    matchedSnippets.push("RETURNS & CX STAR STORY:\n" + JSON.stringify(KNOWLEDGE_BASE.star_frameworks.returns_and_cx_transformation, null, 2));
  }

  if (query.includes('leader') || query.includes('philosophy') || query.includes('experience') || query.includes('manage') || query.includes('team')) {
    matchedSnippets.push("PROFILE SUMMARY:\n" + JSON.stringify(KNOWLEDGE_BASE.profile_summary, null, 2));
    matchedSnippets.push("LEADERSHIP PHILOSOPHY:\n" + JSON.stringify(KNOWLEDGE_BASE.leadership_philosophy, null, 2));
  }

  if (matchedSnippets.length === 0) {
    matchedSnippets.push("PROFILE SUMMARY:\n" + JSON.stringify(KNOWLEDGE_BASE.profile_summary, null, 2));
    matchedSnippets.push("VERIFIED METRICS:\n" + JSON.stringify(KNOWLEDGE_BASE.verified_metrics, null, 2));
  }
// Check for contact details or specific section links
if (query.includes('contact') || query.includes('email') || query.includes('linkedin') || query.includes('reach') || query.includes('hire') || query.includes('profile')) {
    matchedSnippets.push("CONTACT & PROFESSIONAL LINKS:\n" + JSON.stringify(KNOWLEDGE_BASE.contact_and_links, null, 2));
  }
// Check for contact details, links, email, or project pages
if (query.includes('link') || query.includes('contact') || query.includes('email') || query.includes('linkedin') || query.includes('reach') || query.includes('hire') || query.includes('trustos') || query.includes('eva')) {
    matchedSnippets.push("CONTACT & PROFESSIONAL LINKS:\n" + JSON.stringify(KNOWLEDGE_BASE.contact_and_links, null, 2));
  }
  // Check for TrustOS or EVA link lookups specifically
  if (query.includes('trustos page') || query.includes('eva page') || query.includes('link to')) {
    matchedSnippets.push("CONTACT & PROFESSIONAL LINKS:\n" + JSON.stringify(KNOWLEDGE_BASE.contact_and_links, null, 2));
  }
  return matchedSnippets.join('\n\n');
}