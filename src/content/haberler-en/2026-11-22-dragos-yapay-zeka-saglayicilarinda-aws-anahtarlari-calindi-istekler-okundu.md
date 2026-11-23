---
ref: "2026-11-22-dragos-yapay-zeka-saglayicilarinda-aws-anahtarlari-calindi-istekler-okundu"
slug: "dragos-aws-keys-stolen-and-requests-read-at"
title: "Dragos: AWS keys stolen and requests read at AI providers"
spot: "Dragos researchers tested AI providers with roughly 2 million requests carrying fake credentials. At least three providers were found to have attackers actively stealing user data."
whyItMatters: "When requests pass through multiple intermediaries, every hop can read the full content. According to Dragos, if users don't decide where their prompts go, the lowest price decides."
keyPoints:
  - "Dragos sent roughly 2 million requests with fake credentials."
  - "At least three providers had user data stolen by attackers, and hundreds of AWS keys were collected."
  - "OpenRouter removed three providers and revoked ZDR approval for 125 endpoints."
byNumbers:
  - value: "About 2 million"
    label: "Requests with fake credentials sent"
  - value: "125"
    label: "Endpoints with ZDR approval revoked"
---

The researchers at security firm Dragos sent roughly 2 million AI requests containing fake credentials between July and November 2026. Testing found that at least three providers had been compromised and that attackers were actively stealing user data. None of the three providers was aware of the situation until Dragos informed them.

In the largest incident, attackers collected hundreds of AWS keys, including from requests the provider rejected without processing them. In some cases, stolen keys were tried within hours, S3 storage buckets were scanned, and attempts were made to establish persistent access. Intermediaries selling through the marketplace could also list models at the lowest price and log requests, allowing them to read the content. Privacy settings such as "Zero Data Retention" (ZDR) were frequently ignored. A Chinese AI lab accessed more than half of the requests sent to hidden test endpoints. Major US providers also violated their own policies.

OpenRouter removed three providers from its platform, partly due to the findings and partly as a precaution, and revoked ZDR approval for 125 endpoints. The company told affected users that requests sent to MiniMax models may have been read by third parties. Dragos recommends that requests containing credentials not be sent through intermediaries, that request routing be audited, that privacy settings be checked, and that canary tokens (decoy credentials) be planted.
