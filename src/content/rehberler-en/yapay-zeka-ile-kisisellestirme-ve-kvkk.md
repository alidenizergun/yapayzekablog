---
ref: "yapay-zeka-ile-kisisellestirme-ve-kvkk"
slug: "ai-customer-segmentation-and-personalization-in-turkey"
title: "AI Customer Segmentation and Personalization in Turkey: KVKK Limits"
description: "How do KVKK, explicit consent and İYS rules apply when you segment customers and personalize emails with AI? A practical roadmap for uploading customer data to AI tools."
summary:
  - "Under a February 18, 2026 decision (No. 2026/347) by the KVKK Board, explicit consent and the disclosure obligation are separate processes and cannot be run together."
  - "Emails cannot be sent to recipients without consent in İYS (Turkey's commercial electronic message registry); AI does not change this rule."
  - "Before uploading customer data to an AI tool, remove identifying details, check the possibility of cross-border transfer, and confirm how the provider uses the data."
faq:
  - q: "Does AI-based segmentation always require explicit consent?"
    a: "It depends on the type of data and the purpose of processing, so you should determine the legal basis with an expert from the outset. KVKK Board decision No. 2026/347 says that where explicit consent is required, it must be obtained separately from the disclosure and in a clear, understandable way."
  - q: "Can I send an AI-drafted email to a customer who has no consent in İYS?"
    a: "No, if it qualifies as a commercial electronic message. Messages cannot be sent to recipients without consent in İYS. The fact that AI wrote the text does not change this rule."
  - q: "Can I upload a customer list to a tool like ChatGPT?"
    a: "It is recommended not to share direct identifiers such as names and ID numbers, or sensitive information, with generative AI tools. If necessary, anonymize or mask the data, and if the provider is based abroad, assess KVKK Article 9."
---

AI that works on customer data makes it easier to group people by interest and show each one different recommendations, campaigns or emails. In Turkey, however, this work sits within a two-layer legal framework: KVKK (Turkey's Personal Data Protection Law), which governs how personal data is processed, and the İYS rules (Turkey's commercial electronic message registry), which govern how commercial electronic messages are sent. This guide outlines how to start segmentation and personalization, which limits to watch, and what to check before uploading customer data to AI tools. It is not legal advice; consult your data protection expert before putting any of this into practice.

## What segmentation and personalization do

Segmentation means grouping customers by criteria such as behavior, purchase history or areas of interest. Personalization means presenting recommendations or messages suited to those groups or to individuals. AI can go beyond classic demographic rules and find more granular groups. An academic study making this claim was published on [ResearchGate](https://www.researchgate.net/publication/415809124_AI-Based_Customer_Segmentation_and_Personalized_Marketing_Analytics); however, it is unclear whether it went through peer review, so read its findings with caution.

On the consumer side, the picture is mixed. According to [Deloitte Digital's 2026 research](https://www.deloittedigital.com/us/en/insights/research/personalizing-growth.html), 52% of consumers are more likely to buy from brands that personalize. In the same report, brands believe they personalize 62% of experiences, while consumers say the figure is 44%. In other words, there is a gap between how brands perceive their efforts and how customers experience them. According to a [summary of a Qualtrics report](https://www.contentgrip.com/ai-cx-loyalty-2026-trends/), 64% of consumers prefer personalized experiences, but only 39% think the benefit outweighs the privacy cost. These surveys draw on samples from the US and other countries; there is no measurement specific to Turkish consumers.

In short, personalization is in demand, but it does not work without trust. For general use cases, you can also see the guide on [AI use cases in marketing](/rehber/pazarlamada-yapay-zeka-kullanim-alanlari/).

## The starting point under KVKK: data and legal basis

Any data used as an input for segmentation is personal data if it identifies a person or makes them identifiable. That is why the first question should not be “which model will I use?” but “what data will I process, for what purpose, and on what legal basis?”

KVKK Board decision No. 2026/347, dated February 18, 2026, is an important [principle decision](https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/MTY5Y2UzNzI5ZDQzODc.pdf) on this point. The decision states that the legal nature of explicit consent and the disclosure obligation differ, and that the two cannot be applied in a nested way. It was published in the Official Gazette on March 24, 2026. The decision also covers data minimization and the requirement that consent be explicit and understandable for secondary use. In practice, this means that an “I accept” box buried inside a privacy notice does not substitute for explicit consent.

Secondary use is a common trap in segmentation projects. If you plan to use address or purchase history collected from a customer for delivery of an order to feed a model for a different purpose later, that purpose must be disclosed upfront and clearly. In every case, confirm with your legal advisor which basis you will rely on.

Do not forget the output side. According to a [source summarizing KVKK's guidance on generative AI](https://imer.av.tr/kvkk-araclari/uretken-yapay-zeka-kisisel-veri-rehberi), even if a model does not target personal data, personal data can appear in its output, and this does not remove the need for processing controls. This means inferences the model produces, such as “this customer is interested in this product,” may also count as data you need to manage. For a broader framework, see the guide on [personalization with AI and KVKK](/rehber/yapay-zeka-ile-kisisellestirme-ve-kvkk/).

## E-mail and SMS: İYS rules apply regardless of AI

When you prepare a personalized email campaign, a second filter applies beyond segmentation: the recipient's commercial electronic message consent. According to [İYS's regulation change page](https://iys.org.tr/iys/yonetmelik-degisiklik), real and legal persons wishing to send commercial electronic messages are now required to register with İYS, and messages cannot be sent to recipients without consent in İYS. Intermediary service providers must also check whether consent exists in İYS before sending a message on the service provider's instructions.

Timing matters if you collect consent outside İYS. A law firm's [bulletin](https://bener.com/tr/ticari-iletisim-ve-ticari-elektronik-iletiler-hakkinda-yonetmelikte-degisiklik-yapilmasina-dair-yonetmelike-iliskin-bulten/) states that consents obtained outside İYS must be recorded in İYS within three business days, and that consents not recorded are considered invalid. This is a secondary source; verify the deadline against the current legislation before acting on it.

The practical takeaway: if AI says “this customer is likely to respond to the campaign,” that does not give you the right to send them a message. Match your segment list against İYS consent status before exporting it. If you use a tool to generate text, the guide on [writing emails with AI](/rehber/yapay-zeka-ile-e-posta-yazma/) will help, but sending permission is a separate issue.

## When uploading customer data to AI tools

Pasting a customer table into a chat tool for segment analysis is one of the riskiest steps. According to a [source summarizing KVKK's guidance on generative AI](https://www.zumbul.av.tr/tr/duyurular/uretken-yapay-zeka-rehberi-kvkk-yayinlanmistir), direct identifiers such as names and ID numbers, and sensitive information, should not be shared with generative AI tools. If you use providers based abroad, the transfer must be assessed under KVKK Article 9.

A [Lexology summary](https://www.lexology.com/library/detail.aspx?g=2b9131e5-f1a2-4ffc-857b-38fae0f0fdf7) of KVKK's AI recommendations also highlights two principles: if a result can be reached without processing personal data, process anonymized data; and define the data controller and data processor roles at the start of the project. Data minimization is also part of the same framework.

Here is how you can translate these into daily work:

- Select the columns the tool needs for its task and remove the rest.
- Remove names, phone numbers, emails and ID numbers, or replace them with random codes.
- Clarify whether you are using the tool under an enterprise contract or a personal account, and check in the contract and settings whether the provider uses data to develop models.
- If the provider is based abroad, ask your legal advisor about the transfer under Article 9.
- Set a written rule for which data may enter which tool.

For the last point, the guide on [company AI policy](/rehber/sirket-ici-yapay-zeka-politikasi/) is a good starting point, and the guide on [protecting personal data when using AI](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) covers individual precautions.

## How to start: a small, controlled pilot

Rather than starting with your entire customer base, a narrow pilot reduces both risk and cost.

1. **Write the purpose.** Set a one-sentence goal such as “product recommendations to increase repeat purchase rates.” The purpose also determines which data is needed.
2. **Inventory your data.** What fields exist, why were they collected, and what is their consent or approval status? If you plan to use data collected for an old purpose for a new one, answer the secondary use question.
3. **Anonymize or pseudonymize.** If analysis does not require identity information, remove it.
4. **Choose the tool.** Review the enterprise terms, data retention and training policies, and server location.
5. **Test with a small segment.** Review the results manually; do not automatically turn model output into a campaign.
6. **Check İYS before sending.** Match consent status before transferring the segment to a communication channel.
7. **Keep records.** Document which data, which tool and which purpose you used.

## Risks and limits

It is worth acknowledging a few points upfront. First, the effect of personalization is not the same everywhere: the survey figures above apply to other markets, not Turkey. Do not assume you will get the same results in Turkey; measure with your own A/B tests.

Second, there is a perception problem. According to Deloitte's data, brands and customers do not agree on how much personalization is actually taking place. According to the [Qualtrics summary](https://www.contentgrip.com/ai-cx-loyalty-2026-trends/), 53% of consumers cite misuse of personal data as their biggest concern about AI. An overly accurate recommendation, combined with poorly prepared privacy communication, can damage trust.

Third, the legal framework is evolving. KVKK continues to publish advice and guidance on AI and to make decisions, and in areas such as cross-border transfer and commercial messages, new regulations need to be tracked. Verify administrative fine amounts and deadlines cited in secondary sources against official texts before acting on them.

Finally, this guide is not legal advice. For consent texts, disclosures, cross-border transfers and İYS processes, consult a lawyer or data protection expert about your specific situation.
