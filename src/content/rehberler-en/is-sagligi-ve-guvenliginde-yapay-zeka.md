---
ref: "is-sagligi-ve-guvenliginde-yapay-zeka"
slug: "ai-in-workplace-safety"
title: "AI in workplace safety: cameras, accident prediction and wearable sensors"
description: "How is AI used in workplace health and safety? We explain PPE detection cameras, accident prediction and wearable sensors, their limits, and KVKK and employee privacy risks, with sources."
summary:
  - "Cameras, accident prediction and wearable sensor tools can support workplace safety, but independent evidence that they reduce accidents is limited."
  - "Camera accuracy depends on placement, lighting and resolution; vendor claims should be tested in a pilot."
  - "Using cameras to monitor workers raises KVKK (Turkey's Personal Data Protection Law) risks; the purpose must stay limited to safety and be communicated transparently."
faq:
  - q: "Do AI cameras actually reduce workplace accidents?"
    a: "The sources we reviewed do not include an independent, peer-reviewed study showing this; accident-reduction claims mostly rely on vendor content. That is why testing in a limited pilot at your own site is the safest way to measure the effect."
  - q: "Is using AI cameras for workplace safety a KVKK violation?"
    a: "According to a law firm article, KVKK's announcement does not completely ban cameras in the workplace, but it does not treat performance and productivity monitoring as a legitimate purpose. Read the official text before deploying and consult your legal adviser."
  - q: "How much data do accident prediction models need?"
    a: "The sources do not give a specific threshold. However, one factory study clearly states that a small number of near-miss reports limited the prediction performance. Keeping regular, high-quality incident records is the first step before any model."
---

Artificial intelligence in occupational health and safety (İSG) shows up in three main areas: detecting personal protective equipment (PPE, or KKD in Turkish) and hazardous zones from camera footage, predicting accidents or risks from historical data, and analyzing data from sensors worn by workers. None of these replaces human oversight. They should be seen as tools that support field observation, training and risk assessment. This guide covers the applications found in the sources, their limits and the employee privacy side, in a practical order. Most sources are vendor pages or academic abstracts, so do not read their numerical results as independent verification.

## PPE and hazardous zone detection with cameras

PPE detection uses computer vision to check whether equipment such as hard hats, vests, gloves, goggles or safety harnesses is being worn in camera footage. Flagging someone entering a hazardous area or a fall can work on the same principle. For example, Sitemetric announced [an AI camera that detects PPE, falls, zone violations and badges](https://www.prnewswire.com/news-releases/sitemetric-launches-the-most-advanced-ai-camera-for-construction--built-to-know-the-worksite-302786116.html) in a press release dated June 1, 2026. This is the company's own announcement and contains no performance data.

The success of these systems depends on the camera and environmental conditions. A vendor guide says [accuracy depends on camera placement, lighting and viewing angle, so no vendor can promise flawless detection](https://www.spot.ai/blog/automated-ppe-detection-construction-safety-director-guide). Enlaps' technical guide states that reliable long-range PPE detection requires [a resolution of at least 12 megapixels](https://enlaps.io/blog/post/automatic-ppe-detection-construction-site). It also recommends specialized algorithms or artificial lighting for low-light conditions such as early morning, dusk and shaded areas. This is a manufacturer's guide, but its practical warning is useful: ask suppliers not only for the model name but also for the camera distance and lighting conditions at your site.

For another use of image processing, in production lines, see the guide on [quality control with image processing](/rehber/goruntu-isleme-ile-kalite-kontrol/).

## Accident prediction: why near-miss data matters

The purpose of accident prediction is to identify where, during which shift or under which conditions risk is high before anything happens. To do this, incident records, near-miss reports and workplace data are typically fed into machine learning models.

One notable factory study in this area stands out. A system developed at Bosch Braga [classifies incident descriptions, performs anomaly detection and produces a daily accident probability score](https://www.sciencedirect.com/science/article/pii/S1877050926011294). The paper says the system was validated on a dataset and delivered gains in efficiency and data quality. However, the authors also clearly state that prediction performance remained limited because of the small number of near-miss reports.

This caveat offers a practical lesson: no matter how advanced the model, it is hard to produce reliable predictions without regular and detailed incident records. Before starting an accident prediction project, strengthening near-miss reporting culture and record quality may be a more meaningful first step. Striking claims of an 81% drop in accidents are circulating, but because their methodology and dataset are not disclosed, we do not use them as figures here.

## Wearable sensors: promise exists, evidence is limited

Wearable devices collect data such as movement, posture, back and lower-back loading, or physiological indicators, and interpret it with AI. The goal is to spot ergonomic risks or fatigue early.

BritSafe's 2025 article offers a limited but concrete example on this topic: in a two-week trial of a wearable device monitoring lower-back and spinal loading, [participants reported less fatigue, no injuries were recorded and sick leave fell to zero](https://www.britsafe.org/safety-management/2025/ai-powered-wearables-transforming-workplace-health-and-safety). The same article notes that anecdotal information alone is not a sound basis for decisions. The sample was very small and the trial short, so these results cannot be generalized.

In short, wearable sensors are worth testing in a well-designed pilot, but treat any promise of fewer accidents with caution. Interpreting sensor data can also be uncertain; for example, stress indicators vary by person and situation. Because such data may be considered health-related, the privacy side is even more sensitive. For an overview of the topic, read the guide on [wearable devices and AI](/rehber/giyilebilir-cihazlar-ve-yapay-zeka/).

## Employee privacy and KVKK

A camera system installed for workplace safety can easily turn into an employee monitoring system. This distinction matters legally. According to an article published by Satın Alma Dergisi, in KVKK's announcement dated June 8, 2026, [camera use in the workplace is not entirely banned, but camera monitoring carried out to track employee performance, measure productivity or supervise workers is not considered a legitimate purpose](https://satinalmadergisi.com/isveren-calisanini-kamerayla-izleyebilir-mi/). Because this account comes from a secondary source, check the official KVKK text and consult your legal adviser before implementation.

Within this framework, practical principles include:

- Limit the purpose in writing from the start to safety; do not add a second purpose such as measuring productivity or performance.
- Clearly inform employees about what data is processed and why.
- If identification is not necessary, avoid identifying individuals; try to keep detection at the level of missing equipment or zone violations, independent of personal identity.
- Define who can access the recordings and how long they will be kept.

The EU shows similar sensitivity. A ban on emotion recognition in the workplace has applied since February 2, 2025, based on Article 5(1)(f) of the AI Act, with [only medical and safety reasons counted as exceptions](https://cdt.org/insights/eu-ai-act-brief-pt-4-ai-at-work/). So systems that infer emotional states such as fatigue or stress require a separate review of the legal framework. For broader context, see the guide on [the EU AI Act and Turkey](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/), and for employee monitoring, the article on [employee monitoring and AI](/rehber/calisan-izleme-ve-yapay-zeka/).

## The situation in Türkiye

Domestic companies in Türkiye offer PPE compliance monitoring for factories and construction sites. Movita, Nemesis Elektronik, CX Teknoloji and SE-OPS are among the firms promoting solutions in this space. For example, [Movita's factory solutions page](https://movita.com.tr/cozumler/grup/fabrika-cozumleri) falls into this category. However, these pages do not share measured results or independent case studies; they contain only product promotion. Therefore, the effect of these solutions on accident rates at a Turkish business has not been proven for now. For the broader picture of the sector, see the guide on [AI in Turkey's industrial sector](/rehber/turkiyede-sanayide-yapay-zeka/).

## How to get started

First define the problem: what is the most common near-miss event, in which area are PPE violations increasing, and which task creates ergonomic risk? Choose the technology as a solution to this problem, not the other way around.

1. **Set up a small pilot.** Select a single area or line and test camera placement and lighting under real conditions.
2. **Define success metrics in advance.** Measure the false alarm rate, missed violations and ease of use in the field; do not rely on the figure given by the vendor.
3. **Involve the İSG expert and employee representatives in the process.** Clarify the system's purpose and limits together.
4. **Clarify the legal framework beforehand.** Review KVKK obligations and data retention rules with a legal adviser before implementation.
5. **Use alarms to prevent problems, not to punish.** Employee reaction determines whether the system is accepted.

## Risks and limits

False alarms and missed detections happen in every system; in camera-based solutions, lighting, distance and angle directly affect these rates. Over-reliance on alarms can weaken human observation on site. Accident prediction models depend on data quality; a small number of near-miss records can prevent reliable predictions. With wearable sensors, field validation is limited and interpreting the data can remain uncertain. The most important risk is legal: if data collected for safety shifts toward employee monitoring, it creates problems under both KVKK and employee trust. For this reason, position these technologies not as a standalone solution but as one input to risk assessment. This article is not legal or professional İSG advice; work with a qualified İSG expert and a legal adviser for your decisions.
