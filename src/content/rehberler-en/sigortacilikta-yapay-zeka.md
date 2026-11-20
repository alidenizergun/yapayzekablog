---
ref: "sigortacilikta-yapay-zeka"
slug: "ai-in-insurance"
title: "AI in insurance: a guide to claims, pricing and customer service"
description: "How AI is used in insurance for claim photos, fraud detection, pricing and customer service, with discrimination risks and regulatory approaches, backed by sources."
summary:
  - "Photo-based claim assessment is speeding up, but AI-altered photos have become a serious fraud risk for insurers."
  - "Pricing carries discrimination risk through proxy variables; in the US, an NAIC bulletin holds insurers responsible for the AI models they use."
  - "Chatbots are useful in customer service, but most of the figures come from vendors; a small pilot using your own data is the safer way to start."
faq:
  - q: "Can AI decide an insurance claim on its own?"
    a: "Technically yes, but in practice it is safer to limit it to simple, clear-cut claims. Complex claims involving injuries or legal proceedings should keep a human adjuster involved. The US NAIC bulletin covers claims processes even when AI only supports a decision."
  - q: "Can AI discriminate in insurance pricing?"
    a: "Yes. Even if a model does not directly use a sensitive variable, discrimination can arise indirectly through proxy variables. That is why some US states and regulators are calling for discrimination testing and a governance framework."
  - q: "Will cropping or brightening a claim photo cause problems?"
    a: "Fraud detection systems can flag even simple edits like these as suspicious. The safest approach is to send the photo unedited, in its original form, and contact your insurer if needed."
---

Insurance is one of the most data-driven and most debated areas for AI: claim photos, policy records and customer correspondence create both opportunities and risks. This guide covers the four main uses of AI in insurance (claims, fraud, pricing and customer service) with sources. It explains what works, where to start and where to be careful. Most of the figures come from industry research and vendor publications, so verify them against primary sources and with an expert before making decisions. This text is not legal or investment advice. For general finance context, you can also see the [AI in finance](/sektor/finans/) page.

## Photo-based claim assessment

The general logic is as follows: the customer uploads a photo or video of the damage, a computer vision model identifies the damaged areas and produces a preliminary estimate of repair costs. An adjuster (expert) then approves or corrects that estimate. The goal is to shorten waiting times for simple claims.

An example from Türkiye: in an August 2024 report by Anadolu Agency, Çiğdem Kılıç, Deputy General Manager for Information Technologies at Türkiye Sigorta, said AI can quickly analyze the accuracy of damage claims, which translates into savings of billions of dollars a year ([Anadolu Agency](https://www.aa.com.tr/tr/bilim-teknoloji/yapay-zeka-sigorta-sektorunde-sahte-hasar-taleplerini-tespit-ediyor/3302350)). Because the report is from 2024, its figures should not be read as current.

A practical rule: fully automated decisions should be tried only for low-complexity claims, such as simple damage with clear liability. For files involving injuries, disputes or legal proceedings, keeping human review in the loop is safer.

## The altered photo problem

The same technology also makes fraud easier. According to Verisk's March 2026 research, 36% of consumers say they might alter a damage photo, and 98% of insurers say AI editing tools are increasing digital fraud. Only 32% of insurers say they can detect deepfakes with high confidence ([Appraisal Engine](https://appraisalengine.com/company/insurance-claim-photo-evidence/)). To understand visual manipulation more closely, see the [how to spot a deepfake](/rehber/deepfake-nasil-anlasilir/) guide.

There is a side effect: detection systems can also flag honest customers who crop or brighten a photo (same source). So the risk of false positives is real. As a customer, sending the photo unedited makes sense; as an insurer, keeping a path open for appeals and second reviews makes sense.

In Türkiye, a Haber7 report says that analyses by the company FraudFlow found 39 suspicious claim files containing AI-manipulated images, with a combined value of about 6.5 million lira, and that fake glass damage photos stood out ([Haber7](https://ekonomi.haber7.com/ekonomi/haber/3666835-sigortada-yapay-zeka-vurgunu-15-saniyede-milyonluk-hasar-uretiyorlar)). The page does not show the report's date, so read it as an example rather than a current picture.

## Fraud detection

Fraud detection is a two-sided race: fraudsters use AI too. According to a compilation citing Verisk data, 66% of insurers believe digital media fraud goes unnoticed often or very often. In the same compilation, 65% of insurers say they use third-party AI detection tools, 50% use tools developed in-house, and 44% still rely on manual review ([Ventavid](https://www.ventavid.com/blog/ai-insurance-fraud-statistics-2026)). These figures come from a secondary compilation.

A concrete step from Türkiye: Bereket Sigorta announced in August 2026 that its in-house, AI-supported media monitoring system scans news of accidents, matches them with policy and claim records, and flags possible abuse before a claim file is opened ([Katılım Analiz](https://katilimanaliz.com/2026/08/17/bereket-sigortadan-hasar-yonetiminde-yapay-zeka-destekli-yeni-donem/)).

Unless you have seen independent verification, treat vendors' claims of high accuracy and low false-positive rates as marketing claims only. Make sure a flagged file is not automatically rejected and that it goes to human review. For the banking and retail side of financial fraud, the [AI and financial fraud](/rehber/yapay-zeka-ile-finansal-dolandiricilik/) guide may also help.

## Risk pricing and discrimination risk

In pricing, AI estimates risk by weighing many variables together. The problem is that sensitive characteristics the model does not directly use can leak into its results through proxy variables. Daniel Schwarcz, a law professor, argues based on research published in the Iowa Law Review that discrimination through proxy variables is hard for regulators to audit, and that limiting the use of machine learning in pricing could be one option ([Insurance Business](https://www.insurancebusinessmag.com/us/news/technology/ai-in-the-boardroom-governance-that-protects-without-paralysing-584168.aspx)). You can also see how bias forms in a similar framework in the [AI in credit scoring](/rehber/kredi-skorlamada-yapay-zeka/) guide.

The regulatory picture is mixed. According to the same source, Colorado required discrimination testing in 2021, but as of mid-2026 no test requirement is in effect for any insurance line. Other sources give different implementation dates, so check the current status of Colorado's rules against the official text.

In Türkiye, nothing definitive can be said about a specific regulation on AI in insurance pricing. For the general framework on processing personal data, see the [KVKK and AI tools](/rehber/kvkk-ve-yapay-zeka-araclari/) guide. For your own situation, contact your insurer's compliance unit or a lawyer.

## Regulatory approach: the NAIC bulletin

In the US, the NAIC, the umbrella organization for insurance regulators, adopted the model bulletin "Use of Artificial Intelligence Systems by Insurers" on December 4, 2023. The bulletin calls for a written AI systems program, governance, risk controls, third-party audits and documentation. The insurer remains responsible even if it bought the AI tool ([Water Street Company](https://www.waterstreetcompany.com/what-the-naic-model-bulletin-means-for-insurance-ai/)).

Many states have announced they are adopting the bulletin, but sources differ on how many jurisdictions have done so. Verify the current list on the NAIC's own map. For the EU approach, see the [EU AI Act and Türkiye](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) guide. Sources are unclear on the timeline for high-risk obligations, so check the official text.

## Customer service and policy transactions

Chatbots are used for policy inquiries, first claim notifications and frequently asked questions. According to examples cited in a vendor blog, Lemonade's AI assistant, AI Jim, handles about 40% of claims instantly through conversation; USAA offers members self-service through its Eva assistant; and State Farm provides representatives with an AI-supported information assistant rather than giving customers a bot directly ([Perspective](https://getperspective.ai/blog/ai-insurance-customer-service-2026-state-of-conversational-carriers)). Because the source is a software vendor, do not rely on these figures without comparing them to the companies' own announcements.

Two models stand out: opening a bot directly to customers, or using AI only as a tool for employees. The second reduces the risk of a wrong answer reaching the customer. We do not have a verified example of AI use in customer service in Türkiye to share here.

## How to get started

- **Choose a narrow process.** For example, start with low-value simple claims or frequently asked policy questions.
- **Design human oversight.** Every rejected or flagged file should have a path for appeal and human review.
- **Keep records.** Document which model, which data and which decision it supported; this documentation expectation is part of the NAIC approach.
- **Test for discrimination.** In pricing models, compare outcomes across groups and follow the principles of [explainable AI](/rehber/finans-sektorunde-yapay-zeka-duzenlemeleri/).
- **Question vendor claims.** Measure accuracy and savings rates with your own data in a small pilot.

## Limits and cautions

AI can bring speed and consistency to insurance, but three limits stand out: the production of fake content is advancing just as fast, indirect discrimination in pricing is hard to audit, and automation for customers does not remove responsibility for a wrong answer. If you want to challenge a decision based on an AI report in a dispute over your own policy or claim, ask the insurer for its reasoning and, if necessary, consult a lawyer.
