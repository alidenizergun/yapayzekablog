---
ref: "ik-ekipleri-icin-yapay-zeka-asistanlari"
slug: "how-hr-teams-can-use-ai-assistants"
title: "How HR teams can use AI assistants: employee questions, internal comms and privacy"
description: "How HR teams can use AI assistants to answer leave, benefits and policy questions and draft announcements, with Workday and SAP SuccessFactors examples and KVKK and EU AI Act considerations."
summary:
  - "Assistants can answer recurring leave, benefits and policy questions based on company documents, but should hand off complex and sensitive matters to a human."
  - "Workday and SAP SuccessFactors offer assistants tied to their own data and permission structures; details such as Turkish language support and pricing should be confirmed with the vendor."
  - "When employee data is involved, the first questions are KVKK (Turkey's Personal Data Protection Law) compliance, data sharing and the transparency obligations under the EU AI Act."
faq:
  - q: "Can an HR assistant answer employees' leave and benefits questions on its own?"
    a: "It can help with frequently asked questions when it is linked to current, accurate company documents. Complex, sensitive or exceptional cases should be routed to an HR specialist, and answers should be checked regularly."
  - q: "Is it a problem to enter employee data into a general chatbot?"
    a: "Prompts containing personal data fall under KVKK and carry risk. A safer starting point is not to enter employee information without anonymizing it and to set a corporate AI policy first."
  - q: "If we use Workday or SAP SuccessFactors, is an assistant ready to use?"
    a: "Both vendors have announced AI agents, but availability, language support and pricing vary by release and contract. For your own setup, ask your vendor for written confirmation."
---

HR teams' agendas are dominated by recurring questions: how many days of leave remain, what benefits are covered, and how a policy applies in practice. AI assistants promise to answer these questions around the clock and free HR's time for more valuable work. This guide explains what assistants do, how they can be used in internal announcements, what has been announced for Workday and SAP SuccessFactors, and what to watch for on privacy.

## Which questions can an assistant answer?

An employee-question assistant is essentially a chatbot linked to your company's documents. It generates answers by drawing on documents such as the leave regulation, benefits list, travel allowance policy and onboarding guide. This approach reduces the risk of made-up information (hallucination) because answers are grounded in documents, but it does not eliminate that risk.

It helps to separate two types of questions:

- **Information questions:** Topics clearly stated in a document, such as 'How many days of annual leave do I get?' Automation usually works well here.
- **Situation-specific questions:** Personal and sensitive matters such as illness, childbirth, performance, discipline or pay. These should be handed off to an HR specialist.

The other half of the job is action. In Workday's Sana interface, employees [can ask questions in plain language and complete tasks from the same interface, and these tasks stay within the user's permission limits](https://blog.workday.com/en-us/rising-product-announcements.html). In other words, the assistant does not only provide information; it can also carry out specific steps.

## Internal communications and announcements

The second use case for an assistant is HR's own writing: policy update announcements, new benefits explanations, and summaries of regulatory changes. Google's Turkish HR page states that [Gemini can be used to prepare more effective messages about internal policies](https://workspace.google.com/intl/tr/solutions/ai/hr). You can also get a similar draft from a general chat tool.

The most useful method is this: have AI write the draft, but verify the content yourself. State the target audience, tone, required information and length clearly in your prompt, and provide the actual policy text as a source. Check dates, day counts, amounts and approval processes line by line in the output. For more on drafting emails, see our [guide to writing email with AI](/rehber/yapay-zeka-ile-e-posta-yazma/).

For sensitive announcements (restructuring, pay, discipline), use the text only as a writing aid. Do not include personal data such as employee names, salaries or personnel information in prompts.

## AI features in HR software

Rather than building an assistant from scratch, starting with the features offered by your HR software is more practical for most teams. The following details come from official vendor announcements.

**Workday.** On October 13, 2026, at its Rising 2026 event, the company introduced [autopilot agents](https://investor.workday.com/news-and-events/press-releases/news-details/2026/Workday-Launches-Autopilot-Agents-That-Get-Real-Work-Done-Across-HR-Finance-and-IT/default.aspx) that run processes across recruiting, payroll, accounting and compliance. Customers can decide which tasks run automatically and how far the agents can go. Workday also introduced its Talent Acquisition Agent in early access, describing it as the [first 'agentic autopilot'](https://blog.workday.com/en-us/rising-product-announcements.html). In other words, some features are not yet fully available.

**SAP SuccessFactors.** SAP announced that the Performance and Goals Agent, its first HR-focused Joule agent, would become generally available in November 2025. The same announcement says [Joule is available in 11 languages](https://news.sap.com/2025/10/sap-connect-new-sap-successfactors-innovations/); however, that source does not mention Turkish support. If you plan Turkish-language Q&A, ask the vendor separately. For the availability and pricing of other agents that handle employee questions, you also need current information from the official SAP source.

What both vendors have in common is that the assistant connects to data and permission structures inside the HR system. Compared with a general-purpose chatbot, this can offer an advantage in both accuracy and data control. Still, verify the vendor's claims in your own setup through testing.

## How to get started

Starting with a small, measurable step is safer than launching a large transformation plan.

1. **Classify the questions.** Sort the questions received through HR inboxes and calls over the past few months into topics. Pick the most frequent ones and those with clear documentation.
2. **Clean up the documents.** Conflicting or outdated policy texts will also show up in the assistant's answers. Designate one current, authoritative source.
3. **Set boundaries.** Write down the topics the assistant will not answer (such as discipline, pay negotiation and health information) and the rule for handing off to a human.
4. **Test with a small group.** Pilot with one department or one office, and check the accuracy of answers with HR specialists through sampling.
5. **Inform employees.** Clearly state that the assistant is an AI, what it can do, and how to reach a human when needed.

For the corporate framework, see our [in-house AI policy guide](/rehber/sirket-ici-yapay-zeka-politikasi/).

## Privacy and KVKK

Employee questions often contain personal data: leave records, salaries, medical reports. For this reason, privacy must be addressed at the very start of any assistant project.

According to a legal columnist, the document from Turkey's Personal Data Protection Authority (Kişisel Verileri Koruma Kurumu) on the use of generative AI tools in workplaces [highlights the risk created when employees share personal data in these tools and recommends guiding their use rather than banning it](https://istanbulticaretgazetesi.com/yazarlar/av-muhammet-aksan/kvkk-bakimindan-isyerlerinde-yapay-zeka-denklemi). In practice, this means that rather than telling employees 'do not use AI,' it is more realistic to set clear rules describing which data may go into which tool.

To start, check the following:

- Which employee data does the assistant access, and is that access necessary (data minimization)?
- Are your contract and data transfer terms with the software provider clear?
- Have employees been told that their data is processed for this purpose?
- Is there an anonymization rule to keep identity or personnel details out of general-purpose tools?

We could not find a reliable source on Turkish legislation that specifically regulates HR AI assistants; the current framework runs through KVKK and labor law. For details, see our [KVKK and AI tools guide](/rehber/kvkk-ve-yapay-zeka-araclari/), and consult your legal adviser for a definitive assessment.

## EU AI Act considerations

If you operate in the EU or have employees there, you should also account for the AI Act. The law places [AI systems used for recruitment, performance evaluation and workforce management in the high-risk category](https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2026/The-Digital-AI-Omnibus-Proposed-deferral-of-high-risk-AI-obligations-under-the-AI-Act). According to a law firm's assessment, [employers must inform their employees and their representatives before deploying a high-risk system](https://www.crowell.com/en/insights/client-alerts/artificial-intelligence-and-human-resources-in-the-eu-a-2026-legal-overview), and this obligation is considered to apply regardless of the deferral debates.

The timeline for high-risk obligations, however, differs across sources, and the debate over deferral is ongoing. Confirm the current dates against the official text and with your legal adviser. For the general framework, see our [EU AI Act and Turkey guide](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/). Bias risk in hiring is a separate issue, which we covered in our [guide to AI in recruitment and bias](/rehber/yapay-zeka-ile-ise-alim-ve-onyargi/).

## Limits and expectations

AI assistants are not replacing HR, and employees do not yet fully trust them. In its study dated July 22, 2026, Culture Amp found that [77% of HR professionals say they believe in AI, but only 24% are comfortable with AI acting independently](https://www.cultureamp.com/company/announcements/2026-ai-in-hr-study-reveals-ai-transformation-gap). In the same study, 16% of individual contributors said they were comfortable with agent-type AI, compared with 37% of senior HR leaders. The survey was conducted in May 2026.

These gaps point to the following in practice:

- Expectations and trust may differ between management and employees; gather employee feedback during the pilot.
- Expand automation gradually. Workday's decision to let customers determine how far agents can go is based on the same logic.
- Do not leave critical outcomes (pay, hiring, dismissal) to automation; require human approval.
- Test vendor claims with your own data. Some figures and claims in vendor announcements should not be treated as valid without independent verification.

In short: automate repetitive, low-risk questions first, write privacy rules at the outset, audit answers regularly, and always keep a clear route to a human.
