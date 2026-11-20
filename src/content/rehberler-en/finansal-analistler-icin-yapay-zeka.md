---
ref: "finansal-analistler-icin-yapay-zeka"
slug: "how-financial-analysts-can-use-ai"
title: "How financial analysts can use AI: report analysis, Excel and accuracy checks"
description: "How can analysts use AI for earnings report analysis, earnings call summaries, Excel modeling and financial data platforms? A practical method for guarding against hallucinations and calculation errors."
summary:
  - "AI speeds up reading and summarizing reports, but it cannot replace primary sources such as KAP (Turkey's Public Disclosure Platform)."
  - "Studies show a serious risk of hallucinations in numerical calculations and in fine-tuned models."
  - "The safest approach is to verify every figure the model produces against the source document and your own Excel formulas."
faq:
  - q: "Will AI replace analysts in financial statement analysis?"
    a: "No. In practice it works as a supporting tool. Responsibility for the sources, the accuracy of the calculations and the interpretation stays with the analyst."
  - q: "Can I rely on earnings call summaries?"
    a: "You can use a summary as a quick first read, but do not include quotes or figures in your report without checking them against the transcript or the filing."
  - q: "Does the model get calculations right on its own?"
    a: "Not reliably. Research shows that accuracy drops sharply on multi-variable calculations and that models do not catch their own errors well."
---

A financial analyst spends most of the day reading: balance sheets, annual reports, footnotes and earnings call transcripts. AI tools promise to reduce that reading load. But in finance, even a small numerical error can affect decisions and compliance, so the key question is less what the tool can do than how you will verify its output. This guide offers a practical framework for balance sheet analysis, earnings call summaries, Excel and data platforms. It does not constitute investment advice.

## Where to use AI

It helps to think of large language models (LLMs) as serving two distinct tasks: reading and calculating. Condensing a long text, comparing sections and generating starting points for questions fall under reading. Calculating ratios, finding changes between periods and pulling the right row from a table fall under calculating. As you will see below, the risks concentrate in the second group. So treat AI as a first-draft assistant, and treat your own model and results as the verification stage.

## Balance sheet and annual report analysis

In Turkey, some commercial websites generate automatic summaries and scores from KAP filings. They tag cash, debt and profitability and compare two periods. They are useful for quick screening, but they are not primary sources. For verification, the KAP filing itself should be the reference.

The risk is concrete. On [the PAPIL page](https://borsacoo.com/firma/PAPIL) of one such site, gross profit/loss appears as 1,315,536 TL for the 2026/3 period and -21,123,347 TL for the 2026/6 period, yet the change column shows 0%. An inconsistency like this shows that table reading in automated summaries can go wrong.

For long reports, try this workflow:

- Feed the report in sections and ask for the relevant page number for each section.
- Ask the model to write each figure together with its table or footnote reference.
- Open the reference yourself and check it; do not use any figure you cannot locate.

For practical prompt examples when working with long documents, see [our guide to summarizing PDFs and long documents with AI](/rehber/yapay-zeka-ile-pdf-ve-uzun-belge-ozetleme/).

## Earnings call summaries

Summarizing earnings calls is one of the most common uses of these tools. For example, according to [AlphaSense's product page](https://www.alpha-sense.com/resources/product-articles/ai-tools-earnings-analysis/), every earnings transcript includes an AI-generated Smart Summary. That is the vendor's own description and is not presented there as an independent test result.

Caution is also needed with models fine-tuned specifically for summarization. [One academic study](https://www.sciencedirect.com/science/article/abs/pii/S0925231226024094) reports that in models fine-tuned for financial summarization, the overt hallucination rate rose from 5.4% in the base model to 82.5% in the fine-tuned model FT-A. The paper's abstract and findings sections give figures for the other fine-tuned model that do not match each other, so we do not use them here. The lesson is clear: specialized finance training does not guarantee accuracy.

When using a summary, do the following:

- Take management's numerical guidance (growth, margins, capex) from the transcript, not the summary.
- Search the transcript for every statement given in quotation marks and verify it.
- Compare the summary's tone descriptions (cautious, optimistic) with your own reading.

## Excel and modeling

On the modeling side, AI is most useful for writing formulas, cleaning data, explaining the logic of a calculation and auditing models. The golden rule here is to keep the calculation visible in Excel: ask AI for formulas and structural suggestions, but build the results in traceable cells. Pasting a number produced in a chat window directly into your model destroys the audit trail.

Recommendations for the workflow:

- Ask the model only for formulas and explanations; run them on your own data.
- Keep assumptions (growth, discount rate, tax) on a separate sheet and make sure the AI does not silently change them.
- Test totals, balance sheet balancing and sign errors with simple check formulas.
- Tool and plan prices, and the scope of in-Excel features, change often; check the vendor's official page before using them.

For detailed examples of using AI in Excel, see [our Excel and data analysis guide](/rehber/yapay-zeka-ile-excel-ve-veri-analizi/).

## AI features on financial data platforms

Data providers are bringing AI into their platforms. On March 30, 2026, FactSet announced the alpha launch of FactSet AI for Banking. According to the press release, the solution is available through FactSet Workstation, with Microsoft Office integration, and as a virtual private cloud or single-tenant deployment. The feature has been opened to selected clients in alpha, with broader rollout planned throughout 2026. The same announcement states that FactSet has invested in Finster AI; the amount was not disclosed.

On data access, FactSet says it [announced](https://investor.factset.com/news-releases/news-release-details/factset-meets-demand-ai-ready-data-first-announce-mcp-sans) a production-grade Model Context Protocol (MCP) server in 2025. The server lets AI systems access data directly. The company's claim to leadership in this area is its own statement. Meanwhile, [its product blog](https://www.factset.com/product-blog/launches/factsets-ai-ready-mcp-accelerates-ai-transformation-with-gemini-enterprise-for-financial-services) says the data is natively integrated into Google Cloud's Gemini Enterprise for Financial Services environment.

When choosing a platform, ask practical questions: Can I trace back to the source data with one click? Does the output show the source of each figure? Where is my data processed? You should obtain written answers from the vendor on usage terms in Turkey, Turkish-language support and pricing.

## Accuracy checks and calculation errors

Research shows the size of the risk. The FAITH study emphasizes the importance of accurate extraction and calculation from financial statement data, and notes that even small numerical errors can undermine decisions and compliance. The same [paper](https://arxiv.org/pdf/2508.05201) states that hallucination rates of 10-20% in complex financial reasoning could have a large impact when scaled.

Another [arXiv paper](https://arxiv.org/pdf/2605.29586), summarizing earlier findings and citing FAITH, reports that the best models achieve 95.6% accuracy on simple lookups but that accuracy on multi-variable calculations falls to nearly 0%. This is a finding the paper relays, not its own experiment. According to the same paper, models also cannot reliably detect their own reasoning errors, so asking a model to check its own answer is not a sufficient safeguard.

As a reference point for model selection, according to the [FinTrust benchmark](https://arxiv.org/pdf/2510.15232), GPT-4.1 mini is the model most confident in its answers, but its hallucination rate is also higher. GPT-4.1, GPT-4.1 mini and o4-mini stand out for numerical accuracy. Because a confident tone does not mean accuracy, judge models by their sources, not their tone.

## Checklist: how to get started

Start with a small, low-risk task, such as extracting a summary table from one company's past period reports. Then standardize these steps:

1. **Fix the source.** Give the model only documents such as KAP filings, annual reports or transcripts, and require that its answers stay within those documents.
2. **Require a reference for every figure.** Do not use any figure that lacks a page, table and row reference.
3. **Separate the calculation.** Redo ratio and change calculations with Excel formulas; use the model's calculation only for comparison.
4. **Run consistency tests.** Quickly check totals, signs, units (thousand TL, million TL) and period labels.
5. **Keep a log.** Note which prompt, which tool and which document produced each output.

If you use AI inside an organization, review [the items in our corporate AI policy guide](/rehber/sirket-ici-yapay-zeka-politikasi/) and check which tool you upload customer or company data to. For the sector's regulatory framework, see [our guide to AI regulation in the financial sector](/rehber/finans-sektorunde-yapay-zeka-duzenlemeleri/).

## Limits and responsibility

AI output does not replace analysis, and it is not investment advice. You are the one who signs a report; a model's error does not remove your responsibility. For more on the role of these tools in investment decisions, read [our article on using AI when investing](/rehber/yatirim-yaparken-yapay-zeka-kullanmak/), and consult a qualified expert on investment and licensing matters. The practical takeaway: AI speeds up reading, but verification stays with you.
