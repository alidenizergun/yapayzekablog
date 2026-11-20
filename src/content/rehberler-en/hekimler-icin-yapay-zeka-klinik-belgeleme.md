---
ref: "hekimler-icin-yapay-zeka-klinik-belgeleme"
slug: "ai-scribes-for-doctors"
title: "AI scribes for doctors: a practical guide to ambient clinical note-taking tools"
description: "Do ambient scribe tools that turn doctor-patient conversations into note drafts really save time? A balanced guide to study findings, patient consent, error risk and physician responsibility."
summary:
  - "Ambient scribe tools can reduce documentation time, but the gains vary by institution and by how they are measured."
  - "The note the tool produces is only a draft; reviewing its content and signing it is the physician's responsibility."
  - "Before starting, clarify patient notification, data privacy and institutional policy."
faq:
  - q: "Does an ambient scribe tool write the note entirely on its own?"
    a: "No. The tool prepares a draft from the doctor-patient conversation. Reading, correcting and approving the draft remains the physician's responsibility."
  - q: "Do these tools reduce documentation time for every doctor?"
    a: "Studies report reduced documentation time, but some studies found no statistically significant productivity gain. Results vary by institution and by user."
  - q: "Does the patient need to know the conversation is being recorded?"
    a: "In practice, informing the patient is a basic step. Consult your institution's legal team and KVKK (Turkey's Personal Data Protection Authority) on how this should be done and what written documentation is required."
---

Physicians have long wanted to focus on talking with patients rather than looking at a screen and typing during visits. "Ambient scribe" tools, which listen to the visit conversation and generate a draft clinical note, aim to meet that need. This guide summarizes what these tools do, what studies show, and what to consider before adopting one. This text is not medical, legal or regulatory advice; consult the relevant units in your institution on consent, privacy and responsibility.

## How ambient scribes work

These tools listen to the conversation between doctor and patient and use [generative AI](/sektor/saglik/) to prepare a draft clinical note. The physician reviews the draft, corrects it and transfers it to the record. The tool is meant to ease the documentation burden; it does not replace clinical judgment or ownership of the note. The quality of the draft depends on how clear the conversation is, background noise, and how well the tool fits your institution's note templates.

## What studies say about time savings

The findings are generally positive, but their magnitudes differ:

- According to a study at five academic centers published in JAMA, [AHA's summary](https://www.aha.org/aha-center-health-innovation-market-scan/2026-04-14-6-health-systems-enhancing-care-delivery-ambient-ai-scribes) reports that time in the electronic health record (EHR) fell by 13.4 minutes and documentation time by 16.0 minutes. Ambient scribe use was also associated with 0.49 additional visits per clinician per week.
- The same AHA summary reports that Cleveland Clinic saved 14 minutes a day with its Ambience tool, and Cooper University Healthcare saved 4.15 minutes per patient with Dragon Copilot. At Intermountain, note time fell 27% among users who conducted 10 or more conversations (April 2024 to December 2025).
- In a real-world study at Singapore General Hospital using an in-house tool, experienced users saw [a modest reduction in documentation time and improved patient engagement](https://medinform.jmir.org/2026/1/e85580). Patient acceptance was high.
- Sweden's Tandem Health analyzed more than 375,000 notes produced by about 1,300 clinicians. The tool is used in 11 European markets, and note time fell from 6.69 minutes to 4.71 minutes. This data is reported by [Medimagazin](https://medimagazin.com.tr/hekim/calisma-yapay-zeka-not-alma-araci-doktorlarin-evrak-isine-harcanan-sureyi-buyuk-olcude-azaltiyor-118462). Because the analysis was conducted by the company that develops the product, it should not be read as an independent study.

## Why the results differ

Not every study paints the same picture. In [an emergency department study](https://pubmed.ncbi.nlm.nih.gov/42283666/), both ambient AI and human scribes reduced physicians' documentation time, and clinical efficiency did not differ between the two groups. In other words, in the emergency department the tool worked as well as a human scribe, but it was not shown to be more efficient than one.

In Intermountain Health's matched cohort study, no statistically significant productivity gain was reported. The authors emphasize that [results vary across institutions](https://www.nature.com/articles/s41746-026-02554-0) and that no standard measurement protocol exists. For this reason, do not assume a single figure such as "it saves X minutes" applies to your own clinic or ward. The studies use different measurement methods, specialties and tools.

## Burnout and patient experience

Reducing documentation burden is an attractive goal in the fight against burnout. Still, a drop in documentation time and a drop in burnout are not the same thing: one is a time measurement, the other is a condition physicians report themselves. It is therefore healthier to track both separately rather than equating time savings with better well-being.

On the patient side, the Singapore study is encouraging: patient engagement increased and acceptance was high. The finding of 0.49 additional visits per week suggests that time saved can translate into seeing more patients. It is useful to discuss early how the time saved will be used in your institution, meaning whether it will lead to more patients or to less overtime.

## Patient consent and privacy

Because the tool listens to the entire conversation, questions about recording, storage and processing come to the fore. Before starting, make sure you have clear answers to these questions:

- Is an audio recording kept, and if so, for how long and where is it stored?
- In which country is the data processed, and can the service provider use this data to train models for other purposes?
- Does the patient learn in advance that the conversation is being recorded, and is there an option to decline?
- Do your institution's disclosure text and contracts cover this use?

The legal answers to these questions vary by institution and regulation, so consult your institution's legal team and KVKK (Turkey's Personal Data Protection Authority) officer before making your own decision. For more detail, see the [health data and AI privacy guide](/rehber/saglik-verisi-ve-yapay-zeka-gizlilik/) and the [KVKK and AI tools guide](/rehber/kvkk-ve-yapay-zeka-araclari/). Briefly explaining the tool to patients before the visit, answering their questions, and letting any patient who wishes to opt out do so, helps preserve trust in practice.

## Error risk and physician responsibility

Large language models can generate fabricated information, a phenomenon known as [hallucination](/sektor/saglik/). Possible scenarios include a finding that was never discussed appearing in the draft, a drug dose being recorded incorrectly, a complaint being omitted, or an ambiguous statement being turned into a firm diagnosis. Such errors may not be noticed at first glance, because drafts usually read smoothly and convincingly.

In practice, make these habits routine:

- Read every section before signing the note, paying particular attention to medications, dosing, allergies, history and plan.
- Delete anything that was not said in the conversation, and add anything that is missing.
- Make sure hedged language and entries such as "possible" are accurately reflected in the draft.
- When you spot an error, use your institution's feedback channel.

You are the one who signs the note, so do not take a position on how liability for draft errors is divided until you have read the contract and institutional policy. For a legal opinion on this, contact your institution's legal department.

## How to get started

Starting with a small, measurable pilot is safer than rolling out to everyone at once. Begin with a few volunteer physicians, measure documentation time before the pilot, and repeat the same measurement at its end. Because studies show there is no standard measurement method, creating your own baseline is important.

When choosing a tool, look at data retention, record deletion, access permissions and integration with your institution's records system. Collect physician feedback regularly: seeing which sections of the drafts most often need correction improves both safety and efficiency. For the general framework of AI in healthcare in Turkey, see the [guide to AI in healthcare in Türkiye](/rehber/turkiyede-saglikta-yapay-zeka/). The [meeting notes and transcripts guide](/rehber/yapay-zeka-ile-toplanti-notu-ve-transkript/) can also be a useful starting point for the general logic of meeting and conversation recording.

## Limits and expectations

Ambient scribe tools help with documentation; they do not make clinical decisions or take over responsibility for the note. The time savings depend on specialty, institution and frequency of use, and some studies found no meaningful productivity difference. Set your expectations based on measurements from your own workflow. Informing the patient and securing the data come first; time savings follow.
