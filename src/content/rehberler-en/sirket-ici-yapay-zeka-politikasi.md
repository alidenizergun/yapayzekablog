---
ref: "sirket-ici-yapay-zeka-politikasi"
slug: "how-to-write-a-company-ai-policy"
title: "How to write a company AI policy: tools, data and accountability"
description: "A practical guide to writing a company AI policy: which tools to approve, which data must never be shared, approval and accountability, the Samsung case and sample policy clauses."
summary:
  - "A policy rests on an approved tool list, banned data categories and a clear division of responsibility."
  - "The Samsung case shows that opening tools without rules can lead to confidential information leaks."
  - "Enterprise plans can turn off training use by default, but that does not mean the data is fully safe."
faq:
  - q: "How long should an AI policy be?"
    a: "Length matters less than enforceability. A short, clear document covering approved tools, banned data, the approval process and incident reporting is more useful than a long one."
  - q: "If we use an enterprise plan, can employees paste anything they want?"
    a: "No. Turning off training use does not mean data is not stored on the provider's servers. Banned data categories still apply under an enterprise plan."
  - q: "Who should write the policy?"
    a: "HR, information security and legal should work together. HR should weigh in on hiring and employee data, and legal or the KVKK (Turkey's Personal Data Protection Law) compliance officer should review personal data issues. This guide does not replace legal advice."
---

Employees often start using AI tools before a company has made any decision about them. Without a policy, each employee draws their own line, which can mean confidential information reaches outside services without anyone noticing. This guide walks HR and management teams through building a simple company AI policy step by step. It is not legal advice; work with your legal counsel on personal data and contract issues.

## Why a policy is needed

The gap lies not only in the rules but in awareness of them. According to a roundup citing IBM's 2025 Cost of a Data Breach Report, the average cost of breaches involving shadow AI (tools used outside management's knowledge) was $4.63 million, compared with an overall average of $4.44 million. The difference is about $670,000 ([Matters.ai](https://www.matters.ai/article/shadow-ai-data-breach-cost)). The same source says customer personal data was affected in 65% of these breaches. These figures come from a secondary source rather than the primary report, so read them as an indicator of a trend rather than precise measurements.

The goal of a policy is not to ban AI but to define which work, with which tools and which data, can be done. For general usage skills, see the guide [How to use ChatGPT](/rehber/chatgpt-nasil-kullanilir/).

## Which tools are permitted

The most practical starting point is an approved tool list. In one policy template, this clause reads: for business purposes, only AI tools on the list may be used ([Zamana template](https://zamana.com.tr/wiki/temeller/sirket-ici-politika/)). When preparing the list, consider the following:

- Which plan the tool will be used under (personal account or enterprise plan)
- Whether data is used for training and how long it is retained
- Which country's servers the data is sent to
- Administrator controls and access management

Do not create this list once and leave it. Also define a way to submit requests for new tools. Otherwise, employees will skip the list and use their own accounts. For help with model selection, see [Which AI model should I choose](/rehber/hangi-yapay-zeka-modelini-secmeliyim/).

## Which data cannot be shared

The most concrete part of a policy is the list of banned data categories. In template examples, special category personal data, source code secrets, identity credentials and customer contracts are listed as data that cannot be uploaded without approval. Special category data under Article 6 of KVKK (Turkey's Personal Data Protection Law), such as health data, biometric data and union membership, should not be entered into AI tools ([Bilişim ve Hukuk](https://www.bilisimvehukuk.net/icerik/yapay-zeka-kullanirken-kvkk-uyumu-nasil-saglanir)).

For HR, a practical rule can also be recommended: only limited and anonymized inputs are used for employee data, and raw employee data is not entered. This is a template suggestion, to be treated as good practice rather than a legal requirement ([Zamana template](https://zamana.com.tr/wiki/temeller/sirket-ici-politika/)).

On the personal data side, the following points stand out ([Sheltron](https://sheltron.com.tr/blog/yapay-zeka-kvkk-uyumu-kontrol-listesi/)):

- If the same result can be achieved without processing personal data, work with anonymous data.
- If a prompt or output contains personal data, KVKK applies.
- If there is a regular data flow to a provider abroad, appropriate safeguards are required under Article 9 of KVKK.

For a detailed starting point, see the guide [Protecting personal data when using AI](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/).

## Approval and accountability

The policy should clearly state who decides what. The following division is a good starting point:

- **Management:** Approves the policy and allocates resources.
- **Information security:** Evaluates tools and manages the approved list.
- **Legal or KVKK compliance officer:** Reviews personal data and contract aspects.
- **HR:** Runs training, employee communication and disciplinary processes.
- **Managers:** Monitor whether their teams' use complies with the policy.

Also establish a human oversight principle: the employee who uses an AI tool is responsible for its output. Especially in decisions such as hiring or performance reviews, a tool's output should not replace a decision on its own. For the risks in this area, see [AI in hiring and bias](/rehber/yapay-zeka-ile-ise-alim-ve-onyargi/).

## Lessons from the Samsung case

In Samsung's semiconductor unit, about 20 days after ChatGPT use was permitted, employees pasted confidential information into the tool in three separate incidents. These included source code, a transcript of a meeting converted to text, and a test sequence. The company opened disciplinary investigations in all three cases ([CSHub](https://www.cshub.com/data/news/iotw-samsung-employees-allegedly-leak-proprietary-information-via-chatgpt)). Sources differ on details such as whether the trigger was a single engineer or several people, but the count of three incidents is widely accepted.

The company's subsequent steps are also instructive. Samsung capped prompts at 1,024 bytes and began developing its own internal AI ([TechRadar](https://www.techradar.com/news/samsung-workers-leaked-company-secrets-by-using-chatgpt)). The lesson is that opening a tool without rules and training creates risk, and once data leaves the company, it can slip beyond your control. What prevents leaks is not restrictions added later but rules set from the start.

## Data safeguards in enterprise plans

Enterprise plans reduce risk but do not eliminate it. According to OpenAI's enterprise privacy page, data from ChatGPT Business, Enterprise, Edu and the API is not used for model training by default unless the organization explicitly opts in. The organization can also set its own data retention period ([OpenAI](https://openai.com/enterprise-privacy/)). The same page notes one more detail: business data may pass through automated classification and security tools, and human review varies by service.

For this reason, when choosing a provider, ask the following:

- Is training use turned off by default, and who can turn it on?
- What is the retention period and deletion process?
- Who can access the data for security or abuse reviews?
- Settings can differ on personal accounts; should processing work data in personal accounts also be explicitly prohibited?

Every provider's plan and settings are different. Before writing a policy, read the relevant provider's privacy page and contract terms.

## Training and incident management

If a policy is announced only by email, employees may not read it. Include real examples in a short training session: what should not be pasted, how to write a good prompt, and how to verify output. For more on employee training, see the guide [AI training for employees](/rehber/calisanlara-yapay-zeka-egitimi/).

Also decide in advance what happens when a mistake is made. When data is accidentally uploaded to an AI tool, first determine what the data was, which account and tool were used, when and with whom it was shared, and the provider's retention policy. If the incident constitutes a personal data breach, the obligations to notify under KVKK and the Personal Data Protection Board are assessed according to risk level ([Pega Hukuk](https://pegahukuk.com/is-yerinde-uretken-yapay-zeka-kvkk-ticari-sir/)). Enabling employees to report a mistake without fear of punishment prevents a leak from growing.

## Sample policy clauses

The clauses below are draft examples adapted from template sources; adapt them with your own legal advisor:

1. **Approved tools:** For business purposes, only AI tools approved by the company may be used.
2. **Banned data:** Special category personal data, source code secrets, identity credentials and customer contracts may not be uploaded without approval.
3. **Employee data:** Only limited and anonymized inputs are used in HR processes.
4. **Responsibility:** The employee using the tool is responsible for the accuracy and use of its output; important decisions are made under human oversight.
5. **Incident reporting:** Data shared by mistake is reported to the information security team without delay.
6. **Review:** The policy is updated at regular intervals and whenever new tools or regulatory changes arise.

In the EU, additional obligations are emerging in areas such as hiring and employee management. For companies with EU employees or that evaluate EU candidates, see the guide [The EU AI Act and Turkey](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/). Do not write the rules once and leave them: start with a small team, gather feedback, and then roll them out to the whole company.
