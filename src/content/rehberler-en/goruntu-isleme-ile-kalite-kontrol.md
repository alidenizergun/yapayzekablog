---
ref: "goruntu-isleme-ile-kalite-kontrol"
slug: "ai-quality-control-with-machine-vision"
title: "AI Quality Control with Machine Vision: How It Works and Where to Start"
description: "How does defect detection work with a camera and a deep learning model? Covers data collection and labeling, off-the-shelf platforms vs. custom builds, success metrics, and starting with a small pilot."
summary:
  - "The system uses a camera on the line to capture product images, then a trained model evaluates them and sorts each product as acceptable or defective."
  - "Success depends largely on lighting, camera setup, and well-labeled examples that cover every type of defect."
  - "The safest starting point is a small pilot with one defect type and one station, with success metrics set in advance."
faq:
  - q: "Does AI-based machine vision quality control require many images of defective products?"
    a: "Defective examples are usually rare, so collecting data is one of the hardest steps. Start by collecting images of good products and the defect examples you already have, list the defect types, and discuss with your supplier which method you will need."
  - q: "Should I choose an off-the-shelf platform or a custom build?"
    a: "If your product and defects fit standard patterns, an off-the-shelf platform can provide a quick start. If the defects are very specific, a custom build may be necessary. Before deciding, ask for a trial run with the same product."
  - q: "How can you tell whether the system is working?"
    a: "Look at missed defects and wrongly rejected good products separately, since a single accuracy rate can be misleading. Measure by comparing results with those of a human inspector on the same examples."
---

Checking a product for scratches, cracks, missing parts or incorrect assembly by eye on a production line is tiring, and results vary from person to person. Machine vision systems that combine cameras with AI models aim to automate this work. This guide explains the basic logic of the system, data preparation, the available options, and the points that need to be measured. For the broader framework of AI in manufacturing, see the [AI in manufacturing](/rehber/uretimde-yapay-zeka/) guide.

## The core idea: the camera captures the image, the model makes the call

The system has three parts: the camera and lighting that capture the product image, the model that evaluates the image, and a connection that passes the decision on to the line. The model classifies the product as acceptable, defective or needing review. The result can trigger a sorting mechanism or go to the operator as an alert. Deep learning-based machine vision stands out as a key element that eases control and decision flows in various production settings. This framework is covered in a [systematic review published on Springer](https://link.springer.com/article/10.1007/s44245-026-00320-w) on July 29, 2026.

## The difference between rule-based and learning systems

In traditional machine vision, engineers define the rules for each defect type by hand, such as: a part is defective if its brightness in this area falls outside this range. According to firms operating in this field, the weakness of this approach is that a separate rule must be written for each defect type, and the system can break when the product changes. In learning systems, instead of writing rules, labeled examples are provided and the model extracts the distinguishing features from them. This comparison is based on vendor claims, so you need to see through testing which approach works better for your own product.

For simple, fixed and clearly defined checks, such as whether a part is present or whether a label is in place, a rule-based method may be enough. Learning systems make more sense for products with variable surface textures or defects that are hard to describe.

## Camera, lighting and line layout matter as much as the model

A model cannot be expected to recognize what it does not see. For a defect to appear clearly on camera, the direction and glare of the light, the product's position and the line speed must be considered together. The same scratch can disappear completely under the wrong light. For this reason, before selecting a model, the project should start with these questions:

- Which defect do we want to catch, and under what conditions can the human eye see it?
- Does the product always reach the camera in the same position and with the same surface?
- Does the line speed leave enough time for the camera to capture the image and produce a result?
- Are the lighting, dust, vibration and temperature conditions in the factory stable?

If image quality is poor, results will not improve no matter how much data you have. Stabilize the camera setup first, then collect data.

## Data collection and labeling

In learning systems, the training data determines the quality of the model. The process usually goes like this:

1. **Collection:** Images are gathered under real line conditions, covering different shifts, batches and lighting situations.
2. **Labeling:** Quality specialists mark the defect type and, if needed, its location in the images. This is the foundation of supervised learning.
3. **Consistency check:** If two experts assign different labels to the same image, the model will also learn ambiguously. What counts as a defect should be clarified in a written guide.
4. **Test split:** Some images are not used in training. They are set aside to measure how the model behaves on examples it has not seen before.

The most common problem is that defective products are scarce. Good examples are plentiful, defective ones are few, and rare defect types are where the model tends to miss defects. In this case, methods that learn only from good products and look for deviations can also be used. However, determine which method suits your situation by testing it with your supplier. Plan time for the labeling work, since this effort is often the hidden cost of the project.

## Off-the-shelf platform or custom build?

There are two main paths. Off-the-shelf platforms offer cameras, software and the interface as a package. Setup is usually faster, and your team needs less software expertise. Custom development involves building a model only for your product and defects. It offers flexibility but requires more engineering and maintenance. For comparison readings, see the [Roboflow article on Cognex vs. Keyence](https://roboflow.com/blog/cognex-vs-keyence) and the [AGMIS article comparing custom builds and off-the-shelf platforms](https://agmis.com/ai-quality-control-tools-custom-build-vs-off-the-shelf-platforms/). These are vendor or industry publications, so base your decision on testing with your own product.

When evaluating vendors, ask for a trial on a similar product, how the model is updated when a new product or new defect type is added, where the data is stored, and how the system connects to existing line automation.

## Realistic expectations on cost and timeline

We do not give a single figure for cost or setup time here. These values vary significantly depending on the number of cameras, lighting, line speed, integration and labeling labor, and most commonly cited figures come from vendor marketing. Request quotes by breaking the budget into these items:

- Hardware: cameras, lenses, lighting, computers and mounting equipment.
- Software: license or custom development costs.
- Data preparation: internal team time for collection and labeling.
- Integration: connection to line control and factory systems.
- Operations: model updates and maintenance over time.

Request quotes from different vendors for the same scope. Do not compare quotes if the scopes differ.

## How to measure success

Looking at a single accuracy rate is misleading. On a line where most products are good, even a system that approves everything can show high accuracy. Instead, track the two error types separately:

- **Missed defect:** A defective product passes inspection. It means a faulty product reaches the customer.
- **False alarm:** A good product is rejected. It means scrap and unnecessary rechecks.

There is a trade-off between them. Tightening the threshold reduces missed defects but increases false alarms. Quality and production teams should decide together which balance is acceptable. Measure on the same examples the model has never seen and a human inspector has also evaluated, so the comparison is fair. Also monitor results on the real line for a period to check whether they hold up as they did in the lab.

## Where to start: a small pilot with a clear goal

A practical path for the first step:

1. Choose a single product, a single station, and one or two defect types that cause the most cost.
2. Record the current inspection method's miss and scrap rates. This will be your comparison benchmark.
3. Stabilize the camera and lighting setup and collect real line images.
4. Write the labeling guide and ensure the quality team labels consistently.
5. Set the acceptance criteria and a decision date before the pilot begins.
6. Share the results with operators and leave a feedback channel through which they can challenge the system's decisions.

The limits must also be understood from the start. The model may not recognize a new defect type it did not see in training, retraining may be needed when the product or material changes, and the system requires ongoing maintenance. Machine vision should be seen less as a replacement for human quality experts and more as a tool that speeds up repetitive inspection and keeps records. For neighboring applications, see [What is predictive maintenance?](/rehber/kestirimci-bakim-nedir/). For general information on the situation in Turkey, see the [AI in industry in Turkey](/rehber/turkiyede-sanayide-yapay-zeka/) guide. For applications combined with robots, see the [Robots and AI in factories](/rehber/fabrikalarda-robotlar-ve-yapay-zeka/) article, and for an overview of the section, see the [Industrial AI](/sektor/sanayi/) page.
