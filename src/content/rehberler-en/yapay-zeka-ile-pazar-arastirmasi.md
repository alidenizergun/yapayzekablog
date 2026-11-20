---
ref: "yapay-zeka-ile-pazar-arastirmasi"
slug: "ai-market-research"
title: "AI Market Research: Can Synthetic Users Replace Real Consumers?"
description: "How well do synthetic users and AI personas mimic real shoppers? A look at Pew and NIM findings, where AI helps with surveys and text analysis, and where it misleads."
summary:
  - "In Pew's test, the AI twins' answers differed from real respondents by an average of 12 points; in NIM's study, brand choices matched real respondents' choices 79% of the time on average."
  - "Synthetic responses exaggerate positive attitudes and lack diversity, so pricing and purchase decisions still need real data."
  - "Text analysis tasks, such as coding open-ended comments, are a more mature use case, but human oversight is essential."
faq:
  - q: "Can synthetic users replace real survey respondents?"
    a: "Current evidence does not point that way. Pew concludes that AI-generated surveys do not replace rigorous human surveys; synthetic responses are considered acceptable only as support for low-risk tasks such as pretesting and idea generation."
  - q: "Is it reliable to analyze open-ended survey responses with AI?"
    a: "Some studies report high accuracy in classification, but accuracy drops on long, ambiguous responses and in rare categories. A human should check the output against a sample."
  - q: "Can I use synthetic persona tools for research in Turkish?"
    a: "You can try, but the Pew and NIM studies rely on samples from the US and Germany. Since there is no independent comparison on a Turkish sample or on Turkish-language responses, you need to test the results against real data."
---

There is a new promise in market research: instead of recruiting real participants, have an AI answer "like a consumer." This approach, which looks fast and cheap, is being packaged into commercial products under names like synthetic users or synthetic respondents. So what do independent comparisons say? This guide explains how synthetic responses line up with real consumer data, where AI holds up better in survey and review analysis, and how to start cautiously. For the broader framework, you can also see the [AI for market research](/rehber/yapay-zeka-ile-pazar-arastirmasi/) guide.

## What is a synthetic user?

A synthetic user is an artificial respondent created by giving a large language model a specific person profile (persona) and then asking it survey or interview questions. Some tools generate fictional profiles, while others start from a real panel and build "digital twins" of those people. This difference matters: the richer the real data the twin is based on, the more testable the results. Still, in both cases, the answer is produced by a model, not by the experience or intent of a real consumer.

## The Pew test: how different are the twins from humans?

One of the most rigorous comparisons to date comes from Pew Research Center. Pew created an AI twin for each real person in its own panel and had these twins go through the same survey programming real participants encountered, answering some survey waves again ([Pew Research Center report](https://www.pewresearch.org/wp-content/uploads/sites/20/2026/09/pl_2026.09.30_silicon-samples_report.pdf)). A secondary source reports that across about 300 questions, the twins' answers differed from humans' by an average of 12 points ([AI Weekly](https://aiweekly.co/alerts/pew-finds-ai-survey-stand-ins-miss-humans-by-12-points)). We could not find this figure directly in the main report, so treat it as directional information.

Pew's certainty analysis reveals an interesting detail: synthetic respondents answered the large majority of factual questions correctly, with accuracy around 80%. However, while humans chose the "I don't know" option 16% of the time, synthetic respondents did so only 4% of the time ([Pew Research Center](https://www.pewresearch.org/data-labs/2026/09/30/how-synthetic-respondents-express-certainty-and-factual-knowledge/)). In other words, the model tends to answer confidently even where it doesn't know. Pew's overall conclusion is that, at this stage, AI-generated surveys do not replace rigorous human surveys.

## NIM findings: brand choice matches, but diversity is lacking

A 2026 study by the Nuremberg Institute for Market Decisions (NIM) asks a question closer to marketing. On brand choice, synthetic participants matched real participants' choices 79% of the time on average. The same study highlights two problems: synthetic data systematically exaggerates positive attitudes, especially toward well-known brands, and its responses show less diversity than those of real participants. On a seven-point scale, the average deviation was 1.2 points ([NIM](https://www.nim.org/en/publications/detail/leaving-insight-to-digital-twins)).

The practical implication: a tool that roughly captures an average trend may not accurately measure differences between segments or brand health. Data that inflates positive attitudes can create an illusion before a campaign that "everyone loves this idea." Meanwhile, the very high correlation figures circulating in vendor guides have not been verified by independent studies, so do not accept these claims without testing them on your own data.

## Warnings from the industry

According to a Turkish-language news report, a conference of the UK-based Market Research Society (MRS) emphasized that asking synthetic consumers questions reduces the need to keep returning to focus groups and qualitative research. The same report says Unilever stated that AI falls short in understanding cultural nuances, can misread surface signals, and can produce made-up information. Sky's head of campaign insights also recommends not settling for the first answer, but asking the questions again with changed criteria and context ([MediaCat](https://mediacat.com/markalar-sentetik-tuketici-verileri-ve-yapay-zeka-ikizlerini-nasil-kullaniyor/)). This is a simple but effective check against [hallucination](/rehber/yapay-zeka-ile-pazar-arastirmasi/) risk: ask the same question in different forms and see whether the answers stay consistent.

## Open-ended responses, reviews and social listening

If synthetic respondents are controversial, analyzing existing real data offers a firmer foundation. Here, AI is not generating data; it is classifying the responses you already have.

In one researcher's presentation, eight large language models showed 82-97% accuracy against human consensus across 3,208 responses. However, the models' consistency with each other (Krippendorff's alpha) stayed at 0.58-0.59, compared with 0.77 for humans. Accuracy dropped on long and ambiguous responses and in rare categories ([Chris Soria](https://christophersoria.com/talks/2026-05-13-talk-14)). This is a conference page, so keep in mind it is not peer-reviewed. Another study on global health surveys found that large language models could categorize free-text responses with high accuracy using only 20-100 examples ([PubMed Central](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12406778/)). The shared message of both is that a small, hand-coded sample is a good starting point and a checkpoint.

Some tools can categorize social media comments in seconds and run sentiment analysis on them, but this claim rests on vendors' promotional material, with no independent verification. We also could not find an independent study on the accuracy of Turkish sentiment analysis. For that reason, manually check the tool's output on hundreds of randomly selected Turkish comments. Our guide on [fake reviews and AI](/rehber/sahte-yorum-ve-yapay-zeka/) is useful for filtering out fake or manipulated reviews. The same principle applies to competitor analysis: use AI to summarize and group competitor data you have already collected, and do not expect it to "generate knowledge" about competitors.

## How to get started

Low-risk uses for synthetic responses include survey pretesting (catching question wording, missing options and routing errors) and drafting interview guides. For pricing and willingness-to-pay measurements, real panels are recommended. These recommendations appear on a survey platform's blog, so they reflect a vendor perspective ([Pulselake](https://www.pulselake.co/blog/can-ai-personas-replace-survey-panels-what-research-means-for-buyers)), but they are consistent with the Pew and NIM findings.

You can follow a practical sequence:

- **Start with your own data.** Code your existing open-ended responses and customer reviews with AI, then hand-code 50-100 responses and compare the results. For spreadsheet work, our [Excel and data analysis](/rehber/yapay-zeka-ile-excel-ve-veri-analizi/) guide can help.
- **Use synthetic responses to generate hypotheses.** Record the ideas they produce as questions to be tested with real participants, not as "findings."
- **Ask the same question several times and in different frameworks.** If the answer changes, your confidence should drop too.
- **If the decision is high-risk, go back to real data.** For decisions on pricing, product launches or budget allocation, a synthetic response should not be the sole basis.

## Limits and risks

To sum up the findings, the limits are these: positive attitudes are exaggerated, diversity drops, confident answers replace "I don't know," and cultural nuance can be missed. Moreover, the Pew and NIM studies rely on samples from the US and Germany; we found no independent comparison on a Turkish sample or on Turkish-language responses. We also could not verify any company in Turkey using synthetic panels or any regulation specific to this practice. For guidance on what data can be sent to a tool, see our guide on [AI personalization and KVKK (Turkey's Personal Data Protection Law)](/rehber/yapay-zeka-ile-kisisellestirme-ve-kvkk/).

There is one more signal for a cautious stance: according to a blog post that attributes the view to Qualtrics, synthetic data supports human research rather than replacing it. We could not verify this statement from a primary source, but it aligns with the direction of the findings. Treat synthetic respondents as a tool for speed and inspiration; what measures and supports decisions is still data collected from real people. For the broader picture of AI use in marketing teams, see the [AI in marketing](/sektor/pazarlama/) page.
