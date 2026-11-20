---
ref: "kestirimci-bakim-nedir"
slug: "predictive-maintenance-with-ai"
title: "Predictive maintenance with AI: how it spots equipment failures before they happen"
description: "How does AI use vibration and temperature data to flag equipment failures in predictive maintenance? Maintenance types, reported savings figures, limits and first steps for small and medium-sized businesses."
summary:
  - "Predictive maintenance schedules work based on a machine's measured condition, using data such as vibration, temperature and current draw, rather than on a fixed calendar."
  - "AI learns a machine's normal operating profile and flags deviations as early warnings, but models can degrade over time and produce false alarms."
  - "Savings figures vary by source: a U.S. Department of Energy estimate projects 8% to 12% savings compared with preventive maintenance alone, while vendor claims are higher."
faq:
  - q: "Does predictive maintenance fully replace preventive maintenance?"
    a: "No. Legally required inspections and warranty-related work stay on their schedules. Predictive data mainly changes the timing of optional tasks such as bearing replacement or coil cleaning."
  - q: "Which sensors are needed for predictive maintenance?"
    a: "It depends on the failure type. Accelerometers are commonly used for vibration, and temperature and current draw are also frequently monitored. Before buying, check that the frequencies of the target failure fall within the sensor's measurement range."
  - q: "Can AI predict every failure in advance?"
    a: "No. In one academic study, the system caught a sudden overheating event but missed a gradual temperature rise caused by miscalibration. Because models can degrade over time, they need continuous monitoring."
---

When a pump bearing fails in a factory, the line stops, a replacement part has to be sourced, and the bill for unplanned downtime arrives. Predictive maintenance aims to reduce that surprise. It monitors sensor data from machinery, detects the early stages of deterioration and lets you act before a breakdown occurs. In this workflow, AI handles the part that learns patterns in the data. This guide explains how it works, what you can rely on, and where a small business can start. For a broader definition, see the [what is predictive maintenance](/rehber/kestirimci-bakim-nedir/) guide.

## Three maintenance approaches compared

**Reactive maintenance** means acting after a failure has occurred. **Preventive maintenance** means inspecting or replacing parts at set intervals, based on a schedule. **Predictive maintenance**, by contrast, plans work based on the equipment's actual condition rather than the calendar. According to [Milvian's glossary](https://milvian.ai/insights/glossary/predictive-maintenance), it looks at trends in condition data such as vibration, temperature or current draw, and repairs are made before a failure occurs. The definition from the U.S. Department of Energy (DOE), as relayed by [AOPL](https://aopl.tech/blog/predictive-maintenance-with-ai-sensors-data-and-roi), points the same way: measurements are used to detect the onset of deterioration, and causes are addressed before the problem becomes serious.

In day-to-day practice, most facilities still operate with a lopsided picture. Citing the DOE, the same source reports that in typical U.S. facilities, more than 55% of maintenance resources go to reactive work, 31% to preventive work and 12% to predictive work.

## Predictive maintenance does not eliminate the calendar

Predictive maintenance does not fully replace time-based preventive maintenance. [Milvian](https://milvian.ai/insights/glossary/predictive-maintenance) notes that legally required inspections and warranty work keep their schedules. Predictive data mainly changes the timing of optional tasks such as bearing replacement or coil cleaning. The goal, then, is not "monitor everything and eliminate the maintenance crew"; it is to make better decisions about when each job should be done.

## What sensors measure and which to choose

Sensor choice depends on the failure type. According to a [review article](https://arxiv.org/pdf/2206.14153), imbalance, bearing damage, cavitation in pumps, rising vibration, temperature increases in mechanical parts and loss of lubrication are typical warning signals. Accelerometers are widely used for vibration measurement. To catch failures in specific components, such as a bearing or a fan blade, frequency-domain analysis (FFT) is needed.

The same article offers a practical warning: before buying a sensor, check that the failure frequencies you want to catch fall within the sensor's frequency range. A failure outside that range will not appear in the data, no matter how advanced the model is.

## How AI detects anomalies

The core idea is this: a machine learning model derives an "ideal condition" profile from values such as vibration, temperature and current draw recorded while the machine runs normally, and it issues an alert when readings deviate from that profile. This explanation appears on the vendor page of [ProManage](https://promanage.com/tr/yapay-zeka-destekli-kestirimci-bakim-arizalar-olusmadan-durdurmak-mumkun-mu/), so read it as a description stripped of marketing language. The data the model learns from, the training data, should reflect the machine's periods of healthy operation.

[Tredence](https://www.tredence.com/blog/ai-anomaly-detection) explains that traditional FFT analysis can catch shifts, and that AI takes this a step further by learning what normal vibration spectra look like under different loads, speeds and temperatures. In practice, a fixed threshold does not mean the same thing in every operating condition, whereas a learning model can distinguish what counts as "normal" for a given condition.

## Limits: model drift, missed failures and false alarms

The first limit is that models degrade over time. Bearings loosen, temperature baselines drift and production conditions change. Tredence calls this gradual change concept drift and identifies it as one of the main reasons models degrade over time. A model is not software you set up once and leave alone; it needs to be monitored and updated.

The second limit concerns what the system misses. In an industrial sensor study [published in PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10650466/), overheating and sudden vibration spikes simulating a cooling system failure were successfully detected. A sustained temperature rise, however, was later attributed to miscalibration, and the algorithm failed to catch it. The study focuses more on sensor tampering and anomaly detection than on failure prediction, but it still shows that slow, continuous drift is hard to catch.

The third issue is false alarms. In a [preprint that has not been peer-reviewed](https://arxiv.org/pdf/2512.01149), the cost of a missed failure in CNC machines was put at $25,000, and a false alarm at $500. The cost ratio between unplanned downtime and preventive maintenance ranged from 20:1 to 100:1. This asymmetry affects how you set the alarm threshold: missing an expensive failure can cost far more than a cheap false alarm. Too many false alarms, however, erode the maintenance team's trust in the system.

## Savings figures: how much you can rely on them

The source of the figures makes a major difference. Public and academic sources are more cautious; vendor pages are more ambitious.

- **DOE's O&M guidance:** According to a [PNNL summary](https://www.pnnl.gov/projects/om-best-practices/maintenance-approaches), a well-run predictive maintenance program can save 8% to 12% compared with a program that relies only on preventive maintenance. For facilities that depend heavily on reactive maintenance, the savings opportunity can exceed 30-40%.
- **Academic survey:** In a [manufacturing survey](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9890517/), the group that relied more on predictive maintenance experienced 52.7% fewer unplanned stoppages and 78.5% fewer errors. In the same study, unplanned downtime was 18.5% lower in the predictive-leaning group than in the preventive-leaning group. This survey data does not establish causation.
- **Industry surveys:** [Milvian](https://milvian.ai/insights/glossary/predictive-maintenance) cites DOE in reporting maintenance cost reductions of 25-30%, failure reductions of 70-75% and downtime reductions of 35-45% for predictive maintenance programs. This is a secondary source.

In short, savings depend largely on where your business starts. If you already have a solid preventive maintenance routine, the additional gain you can expect from predictive maintenance is described as single-digit or low double-digit percentages. If most of your work is done after failures, the opportunity may be much larger. Do not apply the dramatic figure from a single case study directly to your own facility.

## Starting steps for small and medium-sized businesses

It may not be realistic for a small business, or a small and medium-sized enterprise (SME), to fit every machine with a sensor. Based on the material in this guide, a sensible sequence looks like this:

1. **Select critical equipment.** Start with a few machines whose downtime disrupts production the most or whose failure is most expensive.
2. **Identify the failure type.** Is it bearing damage, overheating or cavitation in a pump? The failure type determines which sensor you need.
3. **Check the sensor's range.** Confirm that the failure frequencies you want to catch fall within the sensor's frequency range.
4. **Collect normal operating data.** The model learns the machine's healthy profile from this data, so cover different load and speed conditions.
5. **Set the alarm threshold based on cost.** Compare what a missed failure would cost you with what a false alarm would cost.
6. **Keep scheduled work in place.** Continue legally required inspections and warranty work.
7. **Review the model regularly.** Because of drift and changing conditions, compare its results with field maintenance records.

If you are looking for a general framework for small businesses, the [AI for small businesses](/rehber/kucuk-isletmeler-icin-yapay-zeka/) guide is a good starting point. For other manufacturing use cases, see [AI in manufacturing](/rehber/uretimde-yapay-zeka/), and for the Turkish context, see [AI in Turkey's industrial sector](/rehber/turkiyede-sanayide-yapay-zeka/).

Finally, when reviewing vendor proposals, keep the distinction in this guide in mind. Ask whether the promised savings rate is consistent with the ranges in public sources, how the model will be updated, and how false alarms will be managed.
