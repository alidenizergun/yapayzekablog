---
ref: "bankacilikta-yapay-zeka"
slug: "how-banks-use-ai-in-customer-service-fraud-detection"
title: "How banks use AI in customer service, fraud detection and credit decisions"
description: "How are banks using AI in assistants, fraud detection and credit scoring? Examples from JPMorgan and Morgan Stanley, risks, EU rules and tips for getting started."
summary:
  - "Large banks are first testing AI as assistants that help employees, then moving to agents that automate transactions."
  - "The benefits of AI in fraud detection stand out in surveys, but most of these figures rely on the industry's own reporting."
  - "The EU AI Act classifies credit scoring as high risk, but sources report its compliance timeline differently."
faq:
  - q: "Do banks use AI to make credit decisions fully automatically?"
    a: "The sources in this guide do not confirm any case of fully automated credit decisions. The EU AI Act classifies systems used to assess the creditworthiness of natural persons as high risk and imposes additional obligations on them."
  - q: "Should I enter my personal information into my bank's chat assistant?"
    a: "Check what the assistant does and how it handles data in your bank's official statements. If you are unsure, avoid entering sensitive information and use customer service channels instead."
  - q: "Can AI completely prevent fraud?"
    a: "No. Surveys highlight the benefits of AI, but fraud methods are also evolving with AI. That is why these systems need human oversight and should be used in layers."
---

Artificial intelligence in banking is no longer just a chat window. Major banks are building assistants that help employees find information, relying on models for fraud detection, and testing AI agents that can carry out transactions. In areas that directly shape decisions, such as credit scoring, regulators are imposing stricter rules. This guide covers examples verified against sources, what they do, where to start and the risks, in a balanced way. This guide is not investment or legal advice.

## How banks are using AI

You can broadly divide banking applications into three groups:

- **Employee support tools:** Assistants that help advisers quickly access information and draft meeting notes and emails.
- **Risk and security:** Fraud detection, document verification and customer identification processes.
- **Decision support systems:** Models such as credit scoring that affect a customer's financial future.

The third group is the most closely scrutinized due to the risk of errors and bias. The first group is usually where institutions start, as it carries the lowest risk.

## Morgan Stanley: an assistant for advisers

According to CNBC, in 2023 Morgan Stanley rolled out an assistant that gives its financial advisers access to about 100,000 research reports and documents. According to the bank, the assistant is based on OpenAI's GPT-4 model ([CNBC](https://www.cnbc.com/2023/09/18/morgan-stanley-chatgpt-financial-advisors.html)). OpenAI's case study says more than 98% of advisory teams actively use the assistant; this figure is based on the bank's own statement ([OpenAI](https://openai.com/index/morgan-stanley/)).

The next step, a tool called Debrief, takes notes during client meetings after consent is obtained and prepares summaries and draft emails. It is reportedly rolled out to about 16,000 advisers ([CNBC](https://www.cnbc.com/2024/06/26/morgan-stanley-openai-powered-assistant-for-wealth-advisors.html)). The lesson here is that the bank positions the tool to make advisers' work easier, not to replace them, and makes its use subject to approval.

## JPMorgan: agents and private banking

JPMorgan's approach is more ambitious. According to CNBC, the bank plans to deploy AI agents that can operate independently for more than an hour this year. Derek Waldron, the bank's chief analytics officer, describes this as an era of "long-duration autonomous agents" ([CNBC](https://www.cnbc.com/2026/06/09/jpmorgan-chase-ai-agents.html)). To understand how agents work and their risks, you can read our [guide to using AI agents safely](/rehber/yapay-zeka-ajanlarini-guvenle-kullanma/).

JPMorgan and Hyundai Card have completed a proof-of-concept test in which AI agents carried out simulated foreign exchange transactions without human intervention. The bank says the real obstacles are governance and transaction limits, not technology ([CNBC](https://www.cnbc.com/2026/11/18/jpmorgan-hyundai-card-ai-agents-payments.html)). Since the test was a simulation, it should not be read as meaning that live customer transactions are being processed automatically.

According to Bloomberg, the private banking unit uses AI for initial client onboarding, investment research and improving adviser efficiency. Pablo Garnica, the unit's head for Europe, the Middle East and Africa, announced this ([Bloomberg](https://www.bloomberg.com/news/articles/2026-10-25/jpmorgan-s-private-bank-using-ai-to-make-advisers-more-efficient)). Client onboarding is also the starting point for KYC (know your customer) processes.

## Fraud detection: benefits and limits

According to Mastercard's 2026 insights page, 85% of respondents say they have seen returns from AI in prioritizing fraud cases, recognizing transaction patterns and real-time detection. Eighty-three percent say it has significantly reduced false positives ([Mastercard](https://www.mastercard.com/global/en/news-and-trends/Insights/2026/ai-is-helping-banks-save-millions-by-transforming-payment-fraud-prevention.html)). The page does not provide detailed information on the study's sample or methodology, so read these figures as an industry claim.

A false positive is a legitimate transaction wrongly flagged as suspicious and blocked. It matters for the customer experience: a model that is too strict catches fraud but also disrupts genuine customers. That is why it is important to regularly review threshold values and maintain a human channel that resolves disputes quickly.

As a user, you also need to protect yourself, since criminals use AI to produce fake content. We cover this topic further in our [guide to protecting yourself from AI-driven fraud](/rehber/yapay-zeka-ile-finansal-dolandiricilik/).

## Credit scoring and EU regulation

Credit decisions are the most sensitive use case for AI. Annex III, point 5(b) of the EU AI Act classifies systems used to assess the creditworthiness or credit score of natural persons as high risk. Fraud detection is excluded from this scope ([Regulation-AI](https://www.regulation-ai.eu/en/sectors/banking/)).

A warning: some experts argue that if a model combines fraud signals with scoring features in a single output, this exemption may not apply. Before using the same model for both tasks, consult your legal and compliance teams.

The compliance timeline for high-risk systems is not reported consistently across sources. Some give August 2, 2026, while others cite a later date, December 2, 2027, tied to the Digital Omnibus regulation. Always verify the current timeline in the official text. For more context, see [the EU AI Act and Turkey](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) and our guides to AI regulation in the financial sector.

## How to get started

If you work at a bank, fintech or finance team, the following sequence is a sensible approach:

1. **Choose a low-risk internal use case.** As in the Morgan Stanley example, start with an area that supports employees, such as document search, summarization and note-taking.
2. **Set success metrics from the start.** Choose measurable indicators such as usage rate, number of errors and time spent.
3. **Keep human approval in place.** Especially for content sent to customers and steps involving money movement, have a person make the final decision.
4. **Design limits and governance.** As JPMorgan emphasized in its Hyundai Card test, the real challenge is often transaction limits and the allocation of responsibility.
5. **Keep records.** Being able to trace which input produced which output from a model is essential for audits and complaint processes.

## Risks and limits

- **Made-up information:** Large language models can produce wrong but convincing answers. Verify outputs that reach customers or feed into decisions against their sources.
- **Bias and explainability:** If a model rejects a credit application, you need to be able to explain why.
- **Data privacy:** Before pasting customer data into external tools, check company policy and our [guide to protecting personal data when using AI](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/).
- **Responsibility for agents:** In autonomous systems that carry out transactions, it must be clear who is responsible when an error occurs.
- **Exaggerated expectations:** Banks' own usage rate and savings announcements may contain marketing language; look for independent verification.

## What customers in Turkey should do

Before using an AI-powered assistant or credit tool offered by your bank, read the official announcements to understand what it does and does not do. Find out whether the assistant is limited to providing information or can also carry out transactions. For important decisions, verify with a human representative. You can follow developments in Turkey on our [AI in Turkey](/turkiye-yapay-zeka/) page.
