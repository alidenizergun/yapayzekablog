---
ref: "tibbi-goruntulemede-yapay-zeka"
slug: "ai-in-medical-imaging"
title: "AI in Medical Imaging: What's Changing in Radiology and Pathology?"
description: "How is AI improving mammography, chest X-rays, stroke detection and digital pathology? The MASAI trial figures, the role of radiologists, approval processes and limits."
summary:
  - "In Sweden's MASAI trial, AI-supported mammography screening reduced interval cancers by 12%."
  - "The absolute difference is small and the confidence interval includes 0, so the results should be read with that limit in mind."
  - "AI does not replace radiologists or pathologists; it is used as a support and prioritization tool in the reading process."
faq:
  - q: "Is AI replacing radiologists in mammography?"
    a: "No. In the MASAI trial, AI was tested as a tool supporting the screening process, not as a physician replacing standard double reading. The final decision is still made by a physician."
  - q: "What does the \"12% reduction\" in the MASAI trial mean?"
    a: "In the AI-supported group, interval cancers were seen 12% less often than with standard double reading. However, the absolute difference was 0.21 per 1,000, and the confidence interval includes 0, so the result should be interpreted carefully."
  - q: "How should a hospital evaluate AI imaging software?"
    a: "Check the software's regulatory approval status and which image types and patient groups it has been validated for, then run a silent pilot on your own patient data. The decision process should be carried out together with physicians."
---

Radiology and pathology are two of the fields where AI is tested most in healthcare. The reason is simple: both depend heavily on reading images, and deep learning models that analyze images are well suited to this work. Even so, headlines such as "AI finds cancer" can obscure the actual results and limits of studies. This guide takes a balanced look at what is known about mammography, chest X-rays, stroke detection and digital pathology, as well as the role of physicians and approval processes. For a general overview, you can also read [Healthcare AI: What's Being Done Today?](/rehber/saglikta-yapay-zeka-bugun-neler-yapiliyor/).

## What does AI do in imaging?

These systems typically perform three functions: marking suspicious areas on an image, prioritizing cases by urgency, and serving as a second pair of eyes for the physician. They are positioned as a layer that supports the physician's reading, not as a system that makes the diagnosis. This distinction is decisive both in clinical use and in approval processes.

## Mammography: What did the MASAI study show?

The most debated example is the MASAI study conducted in Sweden. Published in The Lancet, the study found that AI-supported screening reduced interval cancers by 12% compared with standard double reading. An interval cancer is a cancer that appears between two screenings and is not caught during screening. The same study reported a 16% reduction in invasive interval cancers and a 21% reduction in interval cancers T2 and above. These findings are covered in [the review in Cancer journal](https://acsjournals.onlinelibrary.wiley.com/doi/10.1002/cncr.70440) and [AJMC's report](https://www.ajmc.com/view/ai-supported-mammography-caught-more-cancers-during-screening).

The primary outcome was designed as a non-inferiority endpoint, meaning it aimed to show that AI-supported screening was not worse than the standard. In other words, the study was designed to show that "the AI-supported process is at least as safe as the standard," not that "AI is better."

## How should the numbers be read?

The 12% reduction highlighted in headlines should be read alongside the absolute figures. [According to ASCO Post](https://ascopost.com/news/february-2026/interval-cancer-rate-with-ai-supported-mammography-screening/), the absolute difference in the interval cancer rate is 0.21 per 1,000. The 95% confidence interval runs from -0.28 to 0.70, meaning it includes 0. This does not mean the effect has been conclusively established statistically.

These figures do not diminish the value of the study, but they do calibrate expectations. The result suggests that AI-supported screening may be a reasonable and safe option; it does not guarantee the same outcome in every country or every patient group. The setting in which the study was conducted, the software used and the structure of the screening program can all affect results. Check these conditions before applying any figure to your own institution.

## Chest X-rays and stroke: reporting and prioritization

In chest X-rays, AI tools help flag possible findings in images and support reporting. News coverage in the US reported regulatory approvals for products in this area; for example, [additional FDA clearances for Qure.ai's chest X-ray reporting tool](https://www.dicardiology.com/content/qureais-chest-x-ray-reporting-tool-receives-additional-fda-clearances) were reported. Approval does not mean the tool will deliver the same performance at every institution; local validation is still necessary.

In stroke detection, AI aims to flag emergencies such as large vessel occlusion on brain CT scans and quickly alert the care team. Multicenter validation and reader studies are underway; for example, a multinational study has examined [AI detection of large vessel occlusion on non-contrast CT](https://pubmed.ncbi.nlm.nih.gov/42173676/). Because time is critical with these tools, their main value lies in prioritization and rapid notification of the team rather than in definitive diagnosis. The risks of false alarms and missed cases apply to these systems as well.

## Digital pathology

In digital pathology, glass slides are scanned and converted into high-resolution images, and AI works on these images. Software can be used to highlight suspicious areas or perform measurements. In breast cancer, it has been reported that [the FDA cleared an AI-supported digital pathology tool](https://www.itnonline.com/content/fda-clears-ai-digital-pathology-tool-breast-cancer). The principle is the same in pathology: the tool supports the pathologist's review, while the pathologist takes responsibility for the report.

## The role of radiologists and pathologists

The common message from these studies is that the physician is not sidelined. In MASAI, AI was used as support integrated into the reading process. The physician's job is to question the system's output, combine it with clinical context and make the final decision. Overreliance on AI output (automation bias) and the tool performing worse than expected in patient groups it has not seen are risks that must be monitored. This is why [explainable AI](/sektor/saglik/) approaches, which help people understand how a model reaches a conclusion, are important.

## Approval processes

Imaging software is often classified as a medical device. An [assessment](https://www.habergo.com.tr/haber/yapay-zeka-artik-tibbi-cihazlarla-konusuyor-saglikta-sohbet-arayuzu-donusumu-nasil-yonetiliyor) that addresses the relationship between AI and medical devices and the regulations of the FDA in the US and TİTCK (Turkey's Medicines and Medical Devices Agency) in Turkey summarizes this framework. In practice, a product's approval is valid for a specific intended use and image type. Using a tool for a different finding or patient group does not rely on the same approval. For the situation in Turkey, you can read the guide [AI in healthcare in Turkey](/rehber/turkiyede-saglikta-yapay-zeka/).

## Practical points for institutions and patients

If you run a healthcare institution, check the following:

- What is the product's intended use and legal approval status?
- In which population and with which devices was it validated?
- Can a pilot be run on your own data without affecting physicians' decisions?
- How will false alarms and missed cases be monitored?

If you are a patient, you can ask your physician whether AI is used in your imaging. Uploading an image to an AI chatbot to try to make a diagnosis, however, is not the same as the clinical tools described in this guide. To learn more about this, read the guide on [using AI for health questions](/rehber/saglik-sorularinda-yapay-zeka-kullanimi/). This article is not medical advice; consult a physician about symptoms or screening results.
