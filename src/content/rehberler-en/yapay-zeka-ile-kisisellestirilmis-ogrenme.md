---
ref: "yapay-zeka-ile-kisisellestirilmis-ogrenme"
slug: "ai-tutors-and-personalized-learning"
title: "AI tutors and personalized learning: what the research says"
description: "What randomized trials in Nigeria, Harvard and Türkiye, plus the Khanmigo case, show about AI tutors and learning: when they help and when they can hurt."
summary:
  - "Controlled experiments with structured, teacher-supported AI tutors produced learning gains."
  - "An unrestricted chatbot raised scores during the exercise, but when the AI was removed, high school students performed worse on later tests."
  - "The results depend on limited conditions such as a single course, a single school or a short program. Good design and teacher guidance were decisive."
faq:
  - q: "Can an AI tutor replace the classroom teacher?"
    a: "The studies in the research notes do not show this. In the Nigeria program, teachers were part of the process. The Harvard study was limited to one course and two short topics."
  - q: "Does a general chatbot like ChatGPT harm learning?"
    a: "In the Türkiye high school experiment, an unrestricted ChatGPT-style interface improved performance during the exercise, but when the AI was removed, exam results were worse than the control group's. A structure that gave hints instead of answers prevented this loss."
  - q: "Is it enough for students to use an AI learning tool on their own?"
    a: "Chalkbeat's report on Khanmigo shows that when students were offered the tool as an option, they rarely used it. Offering a tool is not enough on its own; its use needs to be structured within the classroom."
---

AI teaching assistants are promoted as helpers that let each student progress at their own pace and answer questions instantly. But how well does that promise hold up in controlled experiments? This guide looks at findings from randomized controlled trials conducted in Nigeria, Harvard and Türkiye, the Khanmigo example, and the practical principles that follow from them. For the broader context, you can also read the guide to [personalized learning with AI](/rehber/yapay-zeka-ile-kisisellestirilmis-ogrenme/).

## What does an AI teaching assistant do?

The tools discussed here are chat-based tutors built on large language models (LLMs). Based on a student's question, they explain, give hints and suggest exercises. An important distinction is this: some give direct answers, while others are instructed not to give the answer outright. The studies below suggest that this design difference can nearly by itself determine the outcome.

## Nigeria: the World Bank's six-week experiment

The World Bank published the results of a randomized controlled trial testing a GPT-4-based virtual tutor in Nigeria as Policy Research Working Paper 11125 in May 2025. The experiment lasted six weeks, and [according to the study summary](https://research.askpoppy.ai/papers/de-simone-2025-chalkboards-to-chatbots-nigeria/), meaningful gains were seen in English, digital skills and AI skills. The program ran as 12 sessions guided by teachers in nine public schools in Benin City, and about 57% of students took part in the final assessment.

According to the [World Bank's reproducibility package](https://reproducibility.worldbank.org/catalog/419), the effect on the combined assessment was 0.31 standard deviations. The largest effects were seen among girls and among students who started with high academic performance.

When interpreting this result, it is important to keep in mind the World Bank's own caveat: [the effect reflects the outcome of the entire package, including structured programming, teacher support and well-designed prompts](https://blogs.worldbank.org/en/developmenttalk/addressing-the-learning-crisis-with-generative-ai--lessons-from-). In other words, the effect of an AI model alone was not measured. In addition, because the program required device access and an internet connection, [its cost is not fully priced](https://research.askpoppy.ai/papers/de-simone-2025-chalkboards-to-chatbots-nigeria/).

## Harvard physics study: a tutor that withholds answers

The study, published in Scientific Reports in June 2025, involved [194 undergraduates](https://mjengohub.co.ke/articles/news/harvard-study-finds-ai-tutor-beats-in-class-physics-teaching) enrolled in an introductory physics course (Physical Sciences 2) at Harvard. The design was crossover: [each student studied one topic through active learning in class and the other at home with an AI tutor, with the order determined by lottery](https://en.bokern.co/harvard-study-finds-ai-tutor-can-speed-up-physics-learning/). The tool used was a GPT-4-based "PS2 Pal" that had been instructed not to give direct answers.

The median score on the final test was 4.5 in the AI group and 3.5 in the classroom group; the median pre-test score was 2.75. In other words, [the median gain was roughly twice as large in the AI group](https://research.askpoppy.ai/papers/kestin-2025-ai-tutoring-outperforms-active-learning/).

The limits of the finding are clear: the results are limited to one course, one institution and two short topics. The authors also stress that [this result cannot simply be transferred to general chatbots](https://mjengohub.co.ke/articles/news/harvard-study-finds-ai-tutor-beats-in-class-physics-teaching). Part of the success may come from the tool being designed to make students think rather than to hand them answers.

## Unrestricted use may weaken learning

At the other end of the spectrum is a high school experiment conducted in Türkiye. The [study published in PNAS](https://www.pnas.org/doi/10.1073/pnas.2422633122) covered about 1,000 students at a large high school during the fall 2023-2024 term; among the authors is Turkish researcher Özge Kabakcı. The experiment had two arms: a standard ChatGPT-style interface (GPT Base) and a tutor interface with restrictions (GPT Tutor).

The findings can be summarized as follows:

- During the exercise, the GPT Base group performed 48% better than the control group. But when AI access was removed and an exam was given, it scored [17% worse](https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education/).
- The GPT Tutor group performed better during the exercise, but on the exam it was not statistically different from the control group. In other words, the structure that gave hints prevented the learning loss but did not increase learning.

The title of the study also summarizes this result: [unguardrailed generative AI can harm learning](https://www.pnas.org/doi/10.1073/pnas.2422633122). This experiment, too, was conducted at a single school, in a single course, with two tools, so it would be wrong to generalize its results to every age group and subject.

## The Khanmigo example: offering a tool is not enough

Khan Academy's AI tutor Khanmigo is one of the best-known examples in the teaching assistant category. However, according to Chalkbeat's August 2026 report, middle school students [rarely used it](https://www.chalkbeat.org/2026/08/25/ai-tutoring-students-khanmigo-khan-academy-engagement-study/) when it was offered as an option. Use was seen on about one-third of the days students worked on Khan Academy. Students often sent off-topic messages or tried to force the tool to give them the correct answer.

The same report also notes the view that the gains seen on Khan Academy may come from the platform as a whole rather than from the AI. This is a reminder that calling a tool "AI-powered" does not prove where any gain comes from.

## Principles of good use drawn from the research

These studies were conducted in different countries and with different age groups, but they share a common pattern. We suggest the following:

1. **Ask for the thinking process, not just the answer.** The Harvard tool was instructed not to give direct answers, and in the Türkiye experiment the structure that gave hints prevented learning loss. If you use a general chatbot, tell it not to give the solution first and to ask step-by-step questions. The guide to [how to write a good prompt](/rehber/iyi-istem-nasil-yazilir/) will help with this.
2. **Don't take the teacher out of the process.** The Nigeria program ran through structured sessions guided by teachers. For practical suggestions for teachers, see the AI guide for teachers.
3. **Try learning without AI.** In the Türkiye experiment, the difference became visible when AI was removed. The way to tell whether you have actually learned is to turn off the tool and try solving the questions yourself.
4. **Design how the tool is used.** Chalkbeat's report shows that offering a tool does not guarantee its use. Use tied to a specific class period and a specific task seems more sensible than an "use it whenever you want" approach.
5. **Check the output.** AI can make mistakes; if students copy a solution without learning it, they also copy the error.

For practical steps on the student side, see the [AI for students](/rehber/ogrenciler-icin-yapay-zeka/) guide, and for the latest developments in the sector, see the [AI in education](/sektor/egitim/) page.

## Limits and cautions

It is too early to draw firm conclusions from these findings. The Harvard study is limited to one course and two short topics, and the study in Türkiye's high school is limited to one school and two tools. The Nigeria results measure an entire structured program; they require device and internet access, and their cost is not fully priced. In addition, different sources may report the sub-results of the same study with slightly different figures, so where possible, it is best to check the paper itself.

In summary, the research does not say that "AI improves learning" or that it "harms learning." Depending on how it is designed, who provides guidance and how the student uses the tool, both outcomes can occur. A small first step is enough: for a single topic, set up a tutor that does not give answers, and at the end measure the result with a short exam taken without AI, then compare the outcomes.
