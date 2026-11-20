---
ref: "giyilebilir-cihazlar-ve-yapay-zeka"
slug: "wearables-and-ai"
title: "Wearables and AI: how smartwatches monitor your health"
description: "FDA-cleared smartwatch and ring features (hypertension notifications, sleep apnea), accuracy of heart rhythm detection, false alarms, and health data privacy."
summary:
  - "Some Apple and Samsung health features have received FDA clearance, but they do not diagnose. They only alert the user."
  - "Smartwatches detect heart rhythm disorders reliably overall, but accuracy varies between algorithms, and false alarms can increase among low-risk people."
  - "In the US, consumer smartwatch data is largely outside HIPAA. In Turkey, health data is classified as special-category data under KVKK (Turkey's Personal Data Protection Law)."
faq:
  - q: "Does the Apple Watch hypertension notification measure my blood pressure?"
    a: "No. The feature does not display a blood pressure reading. It only sends a notification if it detects a pattern that points to high blood pressure. For an exact measurement and evaluation, consult your doctor."
  - q: "If my smartwatch warns of a heart rhythm disorder, does that mean I have the condition?"
    a: "No, an alert is not a diagnosis. An alert and confirmation are different things. Show the notification to your doctor and get an evaluation."
  - q: "Is my smartwatch data legally protected?"
    a: "In the US, consumer smartwatch data is largely outside the scope of HIPAA. In Turkey, personal health data is classified as special-category personal data under KVKK."
---

Smartwatches and smart rings no longer just count steps. They carry AI-powered algorithms that generate alerts about heart rhythm, sleep and blood pressure. Some of these features have received approval or clearance from the FDA in the US. This guide explains which features are approved, the limits of accuracy and false alarms, and how your data is protected. This text is not medical advice; consult your doctor before making any decision based on an alert. For a general framework, see the [Healthcare AI](/sektor/saglik/) page.

## How do smartwatches monitor health?

These devices continuously collect data from sensors placed on the wrist or finger. The algorithm looks for patterns in this data and informs you if it finds one. The algorithms are built with machine learning: they are first trained on data from large numbers of participants, then tested in clinical studies. For example, Apple says it used data from studies with more than 100,000 participants for its hypertension feature, and confirmed its performance in a clinical study with more than 2,000 participants ([HLTH](https://hlth.com/insights/news/apple-receives-fda-nod-for-hypertension-notification-feature-2025-09-16)).

There is an important distinction here: these features are screening and awareness tools. A notification does not mean a definitive diagnosis.

## Hypertension notifications: no blood pressure reading

Apple's hypertension notification received FDA clearance in September 2025. The algorithm reviews 30 days of optical heart sensor data; if it sees a pattern pointing to high blood pressure, it notifies the user. The feature comes with watchOS 26 on Series 9, 10, 11 and Ultra 2/3 models. Apple also says the feature will not catch every case of hypertension. The company expects to alert more than one million people in its first year about possible undiagnosed high blood pressure ([HLTH](https://hlth.com/insights/news/apple-receives-fda-nod-for-hypertension-notification-feature-2025-09-16)).

It is important to know that the feature does not display a blood pressure value; it only provides a notification ([Wareable](https://www.wareable.com/apple/apple-watch-hypertension-notifications-feature-fda-approved)). So it does not replace a blood pressure monitor. If you receive a notification, your doctor determines the next step.

## Sleep apnea: from watch to ring

Samsung's sleep apnea feature on the Galaxy Watch received FDA authorization through a De Novo decision dated February 6, 2024. The feature aims to detect signs of moderate to severe obstructive sleep apnea in people aged 22 and older who have not been previously diagnosed, and it monitors over two nights ([Samsung](https://news.samsung.com/global/samsungs-sleep-apnea-feature-on-galaxy-watch-first-of-its-kind-cleared-by-us-fda)).

Samsung's upgraded sleep apnea feature has also received FDA approval; the company announced that it is the first FDA-approved smart ring feature for the Galaxy Ring. The feature requires at least two nights of five hours of sleep and a ten-day window. Results are reported as mild, occasional or frequent sleep apnea. Samsung stresses that only a physician can make a diagnosis ([Engadget](https://www.engadget.com/2305182/samsung-galaxy-ring-gets-fda-approval-for-advanced-sleep-apnea-detection/)).

The sleep time and number of days the feature needs mean you have to wear the device while sleeping. If you do not wear the ring or watch regularly, you may not get a result.

## Accuracy of heart rhythm detection

Atrial fibrillation (AF) detection is one of the most studied areas for smartwatches. A systematic review and meta-analysis published in JACC: Advances in 2025, covering 26 studies and 17,349 patients, reports that accuracy differs among device algorithms, but that detection is generally reliable ([PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12713314/)).

But reliable detection does not mean every alert is correct. A letter to the editor in JACC: Advances stresses that alerts and confirmation should not be confused. According to the authors, the reliability of smartwatch screening appears greater than it is when detection and diagnosis are merged. The letter also notes that in settings where AF is uncommon (for example, after surgery), the positive predictive value drops and unnecessary alerts are generated ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC13221851/)). In simple terms: in a group where the condition is rare, even an algorithm that works well can produce more false alerts than true ones.

## False alarms and measurement error

There are two types of error. The first is a false positive: an alert arrives even though your rhythm is normal. This can lead to unnecessary anxiety and additional testing. The second is a miss: a condition that does not match the pattern the algorithm looks for goes unnoticed. Apple also clearly states that its hypertension feature will not catch every case ([HLTH](https://hlth.com/insights/news/apple-receives-fda-nod-for-hypertension-notification-feature-2025-09-16)).

So the practical rule is this: do not panic when a notification arrives, but do not ignore it either. Save the date and a screenshot of the notification and show it to your doctor. The absence of a notification is also not proof that you are healthy; if you have symptoms, do not wait for your watch to alert you before seeing a doctor. Similar limits apply to chatbots as well; for that, see the guide on [using AI for health questions](/rehber/saglik-sorularinda-yapay-zeka-kullanimi/).

## Whose data is it? Privacy and KVKK

Pulse, sleep and rhythm data are very personal information. In the US, consumer smartwatch data is largely outside the scope of HIPAA, which applies when data is generated within a doctor-patient relationship ([Reason](https://reason.com/2026/03/19/the-feds-are-investing-in-wearable-health-trackers-that-could-put-your-private-data-at-risk/), analysis article). Although legislative proposals to close this gap are under discussion in the US, check current sources for the latest status.

The framework in Turkey is different. Under KVKK, personal health data is classified as special-category personal data. As a rule, this data cannot be processed; to be processed, the conditions listed in Article 6 of the Law must be met ([KVKK](https://kvkk.gov.tr/SharedFolderServer/CMSFiles/c148901d-cd7f-43ff-ae9a-978fb78fb43c.pdf)). To see which organization processes data under which condition, it is useful to read the manufacturer's privacy notice. For a broader view, see the guides on [health data and AI privacy](/rehber/saglik-verisi-ve-yapay-zeka-gizlilik/) and [protecting personal data](/rehber/yapay-zeka-kullanirken-kisisel-verileri-koruma/).

## How to get started and what to watch for

- **Define your goal.** Do you want to track your sleep patterns or your heart rhythm? Features vary by device and model.
- **Check the scope of the clearance.** FDA clearance is a US process. Ask the manufacturer whether the feature is offered in your country and on your device. Features also have a limited target audience; for example, Samsung's sleep apnea feature is aimed at people aged 22 and older who have not been previously diagnosed.
- **Review data sharing settings.** Regularly check which apps can access your health data and where the data is transferred.
- **Do not read a notification as a diagnosis.** Take the alert to your doctor; do not make treatment or medication decisions on your own.
- **Monitor your anxiety.** One study found that false AF alerts can lower the sense of well-being among people who receive them. If notifications keep you constantly uneasy, discuss this with your doctor.

The [healthcare AI in Turkey](/rehber/turkiyede-saglikta-yapay-zeka/) guide can also help you follow developments in Turkey.

## Conclusion: a helpful signal, not a diagnosis

Approved features can provide an early sign on issues such as heart rhythm, high blood pressure and sleep apnea. However, accuracy depends on the group and condition in which the notification is generated, and an alert and confirmation are not the same thing. The healthiest approach is to see your watch not as a replacement for a doctor, but as a data source to discuss with your doctor.
