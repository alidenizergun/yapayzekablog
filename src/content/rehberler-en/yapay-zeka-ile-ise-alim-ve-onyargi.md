---
ref: "yapay-zeka-ile-ise-alim-ve-onyargi"
slug: "how-to-use-ai-in-hiring-without-bias"
title: "How to Use AI in Hiring Without Bias: Risks and Legal Limits"
description: "How can AI hiring tools produce bias? This guide covers Amazon's case, New York City's LL 144 law, the EU AI Act, Turkey's KVKK and the equal treatment principle in the Labor Code, and candidate transparency."
summary:
  - "AI screening tools can learn and amplify bias in historical data; Amazon's scrapped experimental tool is a well-known example."
  - "New York City's LL 144 requires bias audits and candidate notice, and the EU AI Act classifies hiring systems as high-risk."
  - "In Turkey, KVKK (Turkey's Personal Data Protection Authority) and the equal treatment principle in the Labor Code should be considered together; informing candidates and keeping human oversight are key safeguards."
faq:
  - q: "Can AI make hiring decisions on its own?"
    a: "It is a legally and ethically risky approach. Using the tool to support preliminary screening and ranking, while humans make the final decision, makes it easier both to catch bias and to respond to objections."
  - q: "Which regulations should I check when using a hiring screening tool in Turkey?"
    a: "KVKK governs the processing of candidate data, and Article 5 of the Labor Code is the main regulation on discrimination and equal treatment. For your specific implementation, you should consult a lawyer."
  - q: "Is it enough if the vendor says the tool is 'bias-free'?"
    a: "No. You need to back up the vendor's claim with independent audits, test results and monitoring of outputs within your own candidate pool. Responsibility often remains with the employer using the tool."
---

Software that reads resumes, scores candidates and ranks who gets called for interviews saves recruiting teams time. The same tools can carry traces of past decisions and quietly automate discrimination. This guide outlines how bias emerges, what regulations in the US and EU require, and what to watch for in Turkey. It is not legal advice; seek expert support for any specific implementation.

## How screening tools work and where the risk begins

Most of these tools rely on a machine learning model. The model learns patterns from a company's past hiring decisions or resume examples, then scores new candidates based on how closely they resemble those patterns. The risk starts right here: if the training data (past decisions) is skewed against certain groups, the model can mistake that imbalance for a 'success measure' and repeat it. What is more, this can happen even when a field like gender is never entered, because other information can act as a proxy.

For this reason, the first question to ask when choosing a tool should not be 'how fast is it?' but 'what data was it trained on, and how was that measured?' For an overview of the topic, you can also read our [AI in human resources](/rehber/insan-kaynaklarinda-yapay-zeka/) guide.

## The Amazon case: a hiring tool that was scrapped

One of the best-known cases is Amazon's experimental hiring tool. According to [MIT Technology Review](https://www.technologyreview.com/2018/10/10/139858/amazon-ditched-ai-recruitment-software-because-it-was-biased-against-women/), the company dropped this AI recruiting software because it produced outputs biased against women. The [Incident Database](https://incidentdatabase.ai/cite/37/), which compiles AI incidents, also notes that the tool was alleged to have shown gender bias in its candidate rankings.

The lesson from this example goes beyond one company's misstep: a tool that appears neutral on the surface does not mean its results are neutral. Do not trust a tool without regularly measuring its results.

## The vendor can also face liability: the Workday lawsuit

The legal liability of tool vendors is also under debate. According to a [Holland & Knight](https://www.hklaw.com/en/insights/publications/2025/05/federal-court-allows-collective-action-lawsuit-over-alleged) article, a US federal court allowed a lawsuit over alleged AI-driven hiring bias to proceed as a collective action. The case has not yet been resolved, but it suggests that employers may not escape liability by saying the tool was built by a vendor.

## New York City: what LL 144 requires

New York City's Local Law 144 (LL 144) regulates automated employment decision tools used in hiring and promotion decisions. The law rests on two main pillars, bias audits and notice: the tools must be audited for bias, and candidates must be informed. For implementation details, see the city's agency's [DCWP FAQ](https://www.nyc.gov/assets/dca/downloads/pdf/about/DCWP-AEDT-FAQ.pdf) document.

How enforcement is monitored is also in the spotlight. The New York State Comptroller's office published an [audit of the law's enforcement](https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools). The law firm DLA Piper wrote that this kind of audit could mean rising risk for employers. If you are hiring in New York, check the current text of the law and its guidance directly.

## EU AI Act: hiring is classified as high-risk

The EU AI Act treats systems used in areas such as hiring and workforce management as high-risk. This means additional obligations, including risk management, human oversight and documentation. On timing, developments are moving quickly: an [ActuIA](https://www.actuia.com/en/news/hr-tools-and-artificial-intelligence-europe-delays-high-risk-obligations-to-december-2027/) report says the high-risk obligations for HR tools have been postponed to December 2027. Because details of the postponement may vary across sources, confirm exact effective dates in the official text.

For Turkey-based companies that serve candidates in the EU market or work with EU companies, details are available in our [EU AI Act and Turkey](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) guide.

## Turkey: KVKK and the equal treatment principle

In Turkey, using AI in hiring sits at the intersection of two legal areas. The first is the protection of personal data. A [Cott Group article](https://www.cottgroup.com/tr/blog/kvkk-gdpr/item/ise-alim-sureclerinde-yapay-zeka-ve-kisisel-verilerin-korunmasi) addresses the responsibilities that AI use in hiring processes creates under KVKK. Profiling and automated decision-making are discussed within the framework of [Article 11 of KVKK](https://bumerangdata.com/blog/yapay-zeka-ile-profilleme-ve-otomatik-karar-alma-kvkk-madde-11). Before uploading candidate data to an AI tool, apply the core safeguards in our [protecting personal data](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/) guide.

The second is the ban on discrimination. Article 5 of the Labor Code sets out the employer's duty of equal treatment. The [Kolay İK](https://kolayik.com/blog/isverenin-esit-davranma-ilkesi-nedir-ihlali-durumunda-ne-yapilmalidir) article explaining this principle also covers what should be done in case of a violation. For detailed questions, such as how far this principle applies at the candidate stage, consult an employment law attorney.

## Transparency for candidates and a practical checklist

New York's notice requirement shows that transparency is now becoming a legal expectation. Regardless of which legal framework applies to you, the following steps are a defensible starting point:

- **Document the tool:** Put in writing at which stage, with what data and for what purpose it is used; keep it aligned with your internal rules through our [company AI policy](/rehber/sirket-ici-yapay-zeka-politikasi/) guide.
- **Inform candidates:** Clearly state that an automated tool is used in the process and which data is processed.
- **Keep human oversight:** Sample rejected candidates and review them manually; do not treat the tool's output as the decision on its own.
- **Measure outcomes:** Regularly monitor outcome differences between groups and ask the vendor for testing and audit information.
- **Open an appeal path:** Candidates should be able to ask how a decision was reached and request a correction.

It also helps candidates to know these tools are being used; when preparing your resume, our [AI resume writing](/rehber/yapay-zeka-ile-cv-hazirlama/) guide may be useful.

## Limits

This article provides only a general framework. It is difficult to prove that a tool is free of bias, and audit methods and regulations are changing rapidly. Before making decisions, verify current regulations from official sources and work with your legal adviser.
