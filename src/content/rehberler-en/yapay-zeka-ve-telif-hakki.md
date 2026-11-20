---
ref: "yapay-zeka-ve-telif-hakki"
slug: "ai-and-copyright"
title: "AI and Copyright: Who Owns AI-Generated Content and What Training-Data Lawsuits Say"
description: "How copyright applies to AI-generated content, the US and Turkish debate, the Anthropic settlement, the New York Times and Getty cases, and practical tips for creators and companies."
summary:
  - "Works generated entirely by AI cannot receive copyright protection in the US; protection depends on the human creative contribution."
  - "Training-data lawsuits are producing different outcomes across countries: Anthropic agreed to a $1.5 billion settlement, while Getty lost its key claim in the UK."
  - "Turkey's Intellectual and Artistic Works Law (FSEK) has no explicit provision on AI, so documenting human input and auditing data sources is the safest approach."
faq:
  - q: "Do I own the copyright to an image I created with AI?"
    a: "In the US, works generated entirely by AI are not protected. In Turkey, FSEK has no explicit provision, and the debate centers on the level of human input. For a definitive assessment, consult an intellectual property lawyer."
  - q: "Does the phrase \"the output is yours\" in a platform's terms of use grant copyright?"
    a: "No. According to one law firm's analysis, this phrase is not the same as copyright ownership under FSEK. The terms may mean the platform won't claim rights to the output, but they do not determine whether the work is protected."
  - q: "Does the Anthropic settlement mean AI training is legal?"
    a: "No. The settlement closes a single case and does not create a binding precedent across the industry. The case also focused on whether training data was obtained from pirated sources."
---

When you create an image, text or music with AI, two separate legal questions arise: Who may own the copyright in the output, and who is responsible if the models were trained on copyrighted works? The second question is being contested in many lawsuits, while the first is largely shaped by the principle of human authorship. This guide is for general information only and is not legal advice. For a specific situation, consult a lawyer who works in intellectual property.

## Copyright in generated content: What does the US Copyright Office say?

According to the second part of the report on copyrightability prepared by the US Copyright Office (USCO), works generated entirely by AI cannot receive copyright protection. For works that include AI contributions, protection depends on the level of human creative input. The report says existing human authorship standards will also apply in this area ([Copyright Alliance](https://copyrightalliance.org/ai-report-part-2-copyrightability/)).

According to one source, the US Supreme Court declined on March 2, 2026 to hear a case on human authorship, leaving the lower court's ruling in place. This information appears in a limited number of legal publications, so treat it as context rather than a firm basis for decisions.

## Why writing a prompt isn't enough

According to the Office's approach, prompts alone do not count as human authorship. The reasoning is that a human does not have sufficient control over how the AI expresses the idea. Repeatedly running the same prompt and selecting the best output is also considered insufficient ([Copyright Alliance](https://copyrightalliance.org/ai-report-part-2-copyrightability/)).

By contrast, human contribution is recognized. Original elements you add to the output afterward, or creatively selecting and arranging the output, may support protection. Uses where AI plays only a supporting role are also considered, for example removing an unwanted element or generating ideas ([Neal & Leroy](https://www.nealandleroy.com/news/taking-a-closer-look-what-the-copyright-office-s-2025-ai-reports-mean-for-2026)). In practice, the line is drawn by how much the human shapes the expression, not by what the AI produced.

## The debate in Turkey under FSEK

Under the Intellectual and Artistic Works Law (FSEK), the author of a work is the natural person who creates it, so AI alone is not considered an author ([Yavuz Hukuk Bürosu](https://www.eyavuz.av.tr/yapay-zeka-ile-uretilen-eserlerde-telif-haklari/)). Whether a user's direction and editing can create protection is disputed in legal scholarship; the decisive factor is seen as the degree of the user's creative contribution. FSEK contains no explicit provision on AI, and some writers argue that this gap should be filled through legislation.

These points come from law firm publications, not primary sources. Verify the FSEK articles and the current position against official legislation. For the Turkish legal framework, see the guide [AI in Turkish law](/rehber/turkiyede-hukukta-yapay-zeka/).

On training, one law firm notes that FSEK lacks a text and data mining exception similar to the one in the EU. If that reading is correct, using copyrighted works for training without permission could be open to a claim of infringing the reproduction right ([Elçi Hukuk](https://www.elci.av.tr/makale/yapay-zeka-ve-telif-hakki-2026-1-5-milyar-dolarlik-uzlasma-neyi-degistiriyor-165)). For now, the debate is mainly taking place in legal scholarship and law firm commentary.

## The Anthropic lawsuit and the $1.5 billion settlement

In a class action brought by authors against Anthropic, Judge Alsup ruled that Anthropic's use of the works to train Claude was fair use. However, he found that storing millions of pirated books in a central library was infringement ([Reuters via Yahoo](https://www.yahoo.com/news/articles/anthropic-tells-us-judge-pay-200101141.html)). The distinction, in other words, was drawn based on where the training data came from rather than on training itself.

Anthropic agreed to a $1.5 billion settlement with authors and publishers. The court gave final approval on July 20, 2026; because Judge Alsup had retired, the approval was granted by Judge Araceli Martinez-Olguin ([TechCrunch](https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/)).

The outcome has limits: some authors and publishers opted out of the settlement and filed separate lawsuits against Anthropic. The settlement closes a single case and does not create binding precedent across the industry ([TechCrunch](https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/)).

## The New York Times and Getty cases

The New York Times sued OpenAI and Microsoft in December 2023, alleging that its newspaper content was used to train ChatGPT and Copilot. The case is still ongoing. According to one case tracker, as of October 29, 2026, there was no ruling on fair use ([AI Lawsuit Tracker](https://ailawsuittracker.com/cases/new-york-times-v-openai/)). Some outlets claim a ruling was issued in this case in 2026, but reliable sources do not support this, so do not rely on that claim.

In the UK, in Getty Images' lawsuit against Stability AI, the High Court ruled on November 4, 2025 and rejected Getty's claim of secondary copyright infringement ([Ropes & Gray](https://www.ropesgray.com/en/insights/viewpoints/102lvxe/getty-image-loses-copyright-infringement-claim-against-stability-ai-in-uks-first)). The court found that Stable Diffusion's model weights do not store the copyrighted images, so they were not an "infringing copy." Because the training took place outside the UK, the court could not rule on the legality of mass scraping and training in the UK. That question remains open.

## Don't treat one ruling as universal

These three developments address three different questions. In the US, fair use and the source of training data are central; in the UK, whether model weights count as copies; and in Turkey, the absence of an exception is under debate. As a result, applying an outcome from one country to another would be misleading. For the EU framework, see the guide [The EU AI Act and Turkey](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/) as a good starting point, and check the official text for the details of the Act's copyright obligations.

## Practical tips for content creators

- **Document human contribution.** A prompt alone does not provide protection. Record which stages involved AI, which choices and edits you made yourself, and what original elements you added. Keep drafts, versions and notes ([Neal & Leroy](https://www.nealandleroy.com/news/taking-a-closer-look-what-the-copyright-office-s-2025-ai-reports-mean-for-2026)).
- **Read the "output is yours" language correctly.** This phrase in platform terms is not the same as copyright ownership under FSEK ([Melisa Ezgi Şimşek Hukuk](https://www.melisaezgisimsek.av.tr/yapay-zeka-ile-uretilen-eserlerin-telif-hakki-kimindir/)). Read the terms, but don't treat them as a guarantee of protection.
- **Don't leave originality to AI.** For your brand's distinctive work (logo, key visuals, core copy), use AI as a drafting tool and add the final form yourself. For visual and content creation, see the guides on [creating visuals with AI](/rehber/yapay-zeka-ile-gorsel-olusturma/) and [AI content creation and brand voice](/rehber/yapay-zeka-ile-icerik-uretimi-ve-marka-sesi/).

## Practical tips for companies

In the Anthropic case, the core risk was where the training data came from; pirated sources led to the settlement. So if you are training or fine-tuning your own model, document the legality of your data sources and do not use data collected without permission ([Elçi Hukuk](https://www.elci.av.tr/makale/yapay-zeka-ve-telif-hakki-2026-1-5-milyar-dolarlik-uzlasma-neyi-degistiriyor-165)). If you use a ready-made model, review the indemnification and output rights clauses in the contract with your legal team.

A set of internal rules defining which tools employees may use for AI, and for what content, is also useful. For details, see the guide to [company AI policy](/rehber/sirket-ici-yapay-zeka-politikasi/). Lawsuits and regulations in this area are changing quickly, so verify your decisions against current legislation and expert advice.
