---
ref: "saglikta-yapay-zeka-bugun-neler-yapiliyor"
slug: "ai-in-healthcare"
title: "AI in Healthcare: What Is Actually Being Done Today?"
description: "How AI is used in healthcare today, covering diagnostic support, medical imaging, clinical note-taking, hospital operations and drug discovery, with FDA list figures and the limits of use."
summary:
  - "The FDA's list of AI-enabled medical devices contains 1,614 entries as of June 29, 2026, but totals differ across sources."
  - "The most established use of AI in healthcare is in imaging and diagnostic support."
  - "Tools exist for clinical note-taking, hospital operations and drug discovery, but the evidence varies from study to study and human oversight is essential."
faq:
  - q: "How many AI medical devices has the FDA approved?"
    a: "The US Food and Drug Administration's (FDA) list of AI-enabled devices contains 1,614 entries with decisions dated up to June 29, 2026. That total is consistent across a few secondary sources, but other sources report a different figure, so check the FDA page for the current number."
  - q: "Can AI replace doctors?"
    a: "Current use does not replace doctors; it supports them, for example by flagging areas of interest in an image or drafting a note. Final decisions and responsibility remain with the clinician."
  - q: "Can I ask a chatbot my health questions?"
    a: "You can use it to learn general information, but its output does not replace a diagnosis or treatment recommendation and may contain fabricated information. If you have symptoms, see a physician."
---

AI in healthcare is less a promise of the future than a set of tools already in use in specific areas. But the maturity of these areas varies widely: imaging and diagnostic support has a track record that can be measured through regulatory filings, while in drug discovery the results are still awaiting clinical trials. This guide summarizes what is being done today in five main areas, how solid the figures are, and where the limits begin. It is not medical advice; consult a physician for personal health decisions.

## What does the FDA list say?

In the United States, the official register of AI-enabled medical devices is kept by the Food and Drug Administration (FDA) on its [AI-enabled medical devices page](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices?aff_id=1314). According to secondary sources, the list contains 1,614 entries with decisions dated up to June 29, 2026; you can find the figure in [IntuitionLabs' compilation](https://intuitionlabs.ai/articles/fda-approved-ai-medical-devices-list). Because we could not directly verify the total on the FDA page, it is more accurate to read it as an approximate scale.

For a breakdown by year, [Sequenex's analysis](https://sequenex.com/fda-ai-medical-device-authorizations-analysis/) shows 335 entries in 2025 and 181 in the first half of 2026. The figures do not fully match across sources: [another blog](https://pinggy.io/blog/ai_medical_imaging_diagnostics_2026/) uses 295 for 2025 and 1,451 for the total. So if you quote a single number in an article or presentation, always state its date and source.

Two points to keep in mind. First, a listing means the device has received FDA authorization; it does not prove that the device improves clinical outcomes. Second, a large share of the entries are imaging-related; [Arca's review](https://www.arca.inc/blog/fda-ai-enabled-medical-devices-list) says the list is predominantly from radiology.

## Diagnostic support and medical imaging

Software built on computer vision methods can flag suspicious areas in X-ray, CT and MRI images, take measurements, and help radiologists prioritize their review queue. This is also the area most represented in FDA entries. For more detail, see our guide to [AI in medical imaging](/rehber/tibbi-goruntulemede-yapay-zeka/).

In practice, these tools usually act as a "second pair of eyes." The software flags a finding; the decision belongs to the radiologist. A single device's performance also will not be the same in every hospital: different devices, patient populations and image quality can change the results. Before you start using a tool, check which image types and patient groups it was authorized for.

## Clinical note-taking (ambient scribe)

An ambient scribe is a type of tool built on a large language model that listens to the conversation between a physician and patient and drafts a clinical note from it. The goal is to reduce the physician's documentation burden after an appointment. The draft is presented to the physician, who corrects and approves it.

Results on time savings vary from study to study. [Mass General Brigham's announcement](https://www.massgeneralbrigham.org/en/about/newsroom/press-releases/ai-scribes-linked-to-modest-reductions-in-ehr-documentation-time) describes a modest reduction in documentation time; [STAT's report](https://www.statnews.com/2026/04/01/ai-ambient-scribes-modest-time-savings-clinical-documentation/) says that in a large study, time savings were modest and usage was inconsistent. So the tool can work, but not equally for every physician.

The risks are clear: large language models can produce fabricated information (hallucinations) and can write something into a note that was never said. For this reason, every note needs to be read by the physician. Recording the conversation also raises patient consent and personal data security issues; on this topic, see our [guide to protecting personal data when using AI](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/).

## Hospital operations

In hospital management, AI is less visible but part of daily work: appointment and bed planning, intensive care monitoring, documentation and clinical decision support. As an example from Türkiye, [Yeni Journal's report](https://www.yenijournal.com/saglik-bakanliginda-yeni-donem-yogun-bakimlar-yapay-zeka-ile-takip-edilecek) announces a new period in which intensive care units at the Ministry of Health (Türkiye) will be monitored with AI. For a broader view of Türkiye, see our guide to [AI in healthcare in Türkiye](/rehber/turkiyede-saglikta-yapay-zeka/).

For an institution that wants to start in this area, a practical sequence is: first choose one measurable problem (for example, waiting times), check the quality of existing data, run a small pilot, and compare the results with the starting baseline. Because operational tools do not make diagnoses, the regulatory burden may be lighter, but privacy obligations apply in full as long as patient data is involved.

## Drug discovery

AI is used in drug discovery to identify target molecules, design candidate compounds and plan trials. For a detailed look, see our guide to [AI in drug discovery](/rehber/ilac-kesfinde-yapay-zeka/). Balancing expectations matters here: the [Bio-Pharma AI 2026 report](https://bioai-agents.com/en/blog/state-of-biopharma-ai-2026-report/) notes that many AI-supported assets are in human trials, while its headline states that no drug discovered with AI has yet received approval. Some figures in industry reports are compilations or marketing material, so do not mix claims of faster development with clinical approval data.

## Limits and cautions

- **Regulatory clearance is not proof of effectiveness.** A device being on the list does not show it will perform the same way in your hospital.
- **Human oversight is essential.** Imaging markers and note drafts must both pass through the clinician's review.
- **Data and bias.** Models perform well on the patient groups they were trained on; performance can drop in a different population.
- **Privacy.** Do not paste patient data into a general-purpose chatbot; use tools your institution has approved.
- **Be cautious with numbers.** Even the total on the FDA list varies by source; do not rely on a single blog figure.

If you are an individual user, you can use general chatbots to learn background information; for how to approach health questions, read our guide to [using AI for health questions](/rehber/saglik-sorularinda-yapay-zeka-kullanimi/). For symptoms, however, an AI response does not replace a physician's examination.
