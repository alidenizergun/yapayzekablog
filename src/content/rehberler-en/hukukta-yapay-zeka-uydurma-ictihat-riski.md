---
ref: "hukukta-yapay-zeka-uydurma-ictihat-riski"
slug: "ai-fabricated-case-law-in-legal-research"
title: "AI-Fabricated Case Law in Legal Research: How to Verify Citations"
description: "Why AI-invented court decisions are increasingly appearing in court filings, how courts are responding, and which steps to take to verify citations before they go into a brief."
summary:
  - "AI chatbots can present court decisions that never existed as if they were real, and these can end up in court filings."
  - "Charlotin's database tracks such cases. Its page shows 2,312 cases, and the count keeps rising."
  - "The core safeguard is to verify every citation yourself against a primary source, such as a court record or an official database."
faq:
  - q: "Why does AI invent case law that doesn't exist?"
    a: "Large language models generate text that seems plausible rather than checking real records. As a result, a case name, docket number or quote can appear that looks genuine but has no basis in fact."
  - q: "How do I verify a case number an AI tool gave me?"
    a: "Search for the decision in an official or reliable case law database and read the full text. The court, date, number and the language you quote must match the source exactly."
  - q: "Should I avoid using AI in legal research altogether?"
    a: "It can be used to generate ideas, draft text or find search terms. However, every citation it produces should be treated as suspect until it is verified against a primary source."
---

Large language models write fluently and confidently, but that does not show what they write is accurate. In law, the best-known result is citations to court decisions that never existed. This guide covers the scale of the fabricated case law risk, how courts have responded, and the steps to verify citations before they go into a filing. It is for general information only and does not replace legal advice on a specific case. For that, you should consult a lawyer.

## What is fabricated case law and why does it happen?

Fabricated case law is when an AI tool presents a decision that does not actually exist, complete with a case name, date, docket number and even quotes. In AI literature, this is called hallucination, meaning the generation of made-up information.

Large language models write by calculating which words are likely to follow in a given text. As a result, the citation they produce looks highly credible: the court name is in the right place, the number is in the right format, and the summary fits the topic. However, the model does not check on its own whether that decision actually exists. The problem often stems not from poor writing but from writing that is too convincing.

## How common is the problem?

A public resource tracking cases of made-up content in legal contexts is Damien Charlotin's [AI hallucination cases database](https://www.damiencharlotin.com/hallucinations/). The database page shows 2,312 recorded cases. Keep in mind that the number changes quickly over time: [Inside Legal AI](https://www.insidelegalai.com/articles/2026-09-09-legal-ai-hallucination-database-2028-cases) reported that the database had reached 2,028 entries on September 9, 2026. In other words, the count has been rising by hundreds in a short period, so check the live page before using this figure.

Keep two points in mind when interpreting these numbers:

- The database only lists decisions in which a court found AI-generated fabricated content or clearly implied it. Cases that went unnoticed or were not reflected in a ruling are not counted, so the real number may be higher.
- These figures do not measure how unreliable AI is, because we do not know how many filings were prepared. They only show the scale of cases documented before courts.

## Why do lawyers keep doing it despite knowing the risk?

The picture described by [Scientific American](https://www.scientificamerican.com/article/why-lawyers-keep-citing-fake-cases-invented-by-ai/) is striking: lawyers know AI can produce fabricated information, judges have warned about it, and courts have imposed sanctions, yet citations to fake decisions continue.

There is no single cause, but common patterns are easy to predict. In filings prepared under time pressure, a convincing citation can make it into the text without being checked. Trusting a tool's output is easy, while verifying it takes extra effort. The solution is to treat this not as a matter of willpower but as a checkpoint built into the process.

## How are courts responding?

As the sources above show, courts are responding with sanctions. The person submitting the filing is responsible for the citations in it, and the fact that the text was prepared with an AI tool does not remove that responsibility. The type and severity of sanctions vary by court and country. To assess the outcome of a specific case, review that case's own record; entries in the database can be a starting point.

For the situation in Turkey, we have a separate guide: [AI in law in Turkey](/rehber/turkiyede-hukukta-yapay-zeka/). For professional responsibility and bar association rules, you need to check the current rules of the relevant professional body, such as the Turkish Bar Association.

## Verification steps before a filing

Apply the following steps to every legal citation that comes from an AI tool:

1. **Search for the citation in a primary source.** The case name or docket number must appear in an official or reliable case law database. If you cannot find it, do not use the citation.
2. **Read the full text of the decision.** An AI-generated summary is not enough. The language you quote must appear in the decision itself.
3. **Compare the case details.** The court, chamber, date, case number and decision number must match the source exactly. Even a small mismatch is a warning sign.
4. **Check the outcome of the decision.** Even if the decision is real, does it support the position you are arguing, or the opposite? AI can sometimes misstate a real decision.
5. **Check statutory citations against the current text.** The article number and content must match the law as currently in force.
6. **Document your verification.** Note which citation you checked, in which source and when. This makes internal review easier and ensures you have a record if a question arises later.

Asking an AI tool whether a citation is correct does not count as verification. The same model can confirm wrong information with the same confidence.

## Ways to use the tool more safely

Verification is mandatory, but how you use the tool can also reduce risk:

- **Provide the source yourself instead of having the model generate citations.** Upload the decision or statute text you have and ask for a summary or comparison based only on that text. For working with long documents, see the [PDF and long document summarization](/rehber/yapay-zeka-ile-pdf-ve-uzun-belge-ozetleme/) guide.
- **Make your prompts specific.** Ask the model to say when it does not know something and not to speculate when no source is available. The [how to write a good prompt](/rehber/iyi-istem-nasil-yazilir/) guide can help with prompt writing. Even so, this does not eliminate the risk of fabrication.
- **Prefer tools that work from a source.** Tools that retrieve answers from a specific document archive, known as retrieval-augmented generation (RAG), can reduce the risk of fabrication. However, these tools can also misinterpret a quote, so verification steps still apply.
- **Use AI at the idea stage.** Suggesting search terms, organizing arguments or simplifying a draft carries less risk than producing citations that require verification.

For in-office use and general application examples, you can also see the [AI for lawyers](/rehber/avukatlar-icin-yapay-zeka/) guide.

## Firm and team-level rules

Leaving the check to individual lawyers may not be enough. As a team, it is worth agreeing on the following:

- Which tasks AI may be used for, and which it may not.
- That citations in every document submitted to court are checked by a second person.
- That confidential client information is not entered into AI tools before the tool's data policy has been reviewed.
- That trainees and assistants receive clear guidance on how much they can trust citations produced by AI.

You can find our other articles on the legal field through the [AI in law](/sektor/hukuk/) section.

## Limits and cautions

The figures and case counts in this article are based on the records kept by the database and change constantly. The rules, reporting obligations or sanctions practices of a specific court on AI use may differ. Check the current rules of the court where your case is heard and the guidelines of the relevant bar association. If you are unsure whether an AI output can legally be used, have a lawyer assess it.
