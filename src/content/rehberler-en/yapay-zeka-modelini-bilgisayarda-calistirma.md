---
ref: "yapay-zeka-modelini-bilgisayarda-calistirma"
slug: "how-to-run-an-ai-model-on-your-own"
title: "How to run an AI model on your own computer: a beginner's guide"
description: "How to run open-weight language models on your own computer without an internet connection: hardware requirements, model size and quantization, choosing a tool, and security tips."
summary:
  - "Open-weight models can run locally without sending your data anywhere."
  - "Memory (RAM and GPU memory) is the biggest factor in determining how large a model you can run."
  - "Small quantized models can run at a reasonable speed even on ordinary computers."
faq:
  - q: "Is a local model as good as ChatGPT?"
    a: "Models that can run on a personal computer are generally less capable than the largest cloud models. But for tasks like summarization, proofreading, simple coding and document Q&A, they often deliver good enough results."
  - q: "Does a local model work without internet?"
    a: "Once the model has been downloaded, it can run without an internet connection. This offers an important privacy advantage when working with sensitive data."
  - q: "Can I run a local model on a Mac?"
    a: "Yes. Macs with Apple's own chips are well suited to running local models because the processor and graphics unit share the same memory."
---

Assistants such as ChatGPT, Claude and Gemini run in the cloud, on companies' servers. Open-weight models, by contrast, can be downloaded and run on your own computer. This offers advantages such as privacy, the ability to work without an internet connection, and no per-use fees.

## 1. Why run a local model?

- **Privacy:** Your data never leaves your computer.
- **Cost:** If the model is free to download, you don't pay per use; the costs are hardware and electricity.
- **Offline use:** No internet connection is required.
- **Experimentation and learning:** You can try out models and settings however you like.

## 2. Check your hardware

Memory is the main factor determining the size of the model you can run. As a rough rule of thumb, a 4-bit quantized model needs about as many gigabytes of memory as half its parameter count (in billions), plus some headroom for operation. For example, the 4-bit version of an 8-billion-parameter model can run with a few gigabytes of memory, while a 70-billion-parameter model requires a much more powerful system. A graphics card (GPU) with enough memory, or a Mac with an Apple chip, noticeably increases speed.

## 3. Choose a tool to run it

There are free tools that make running local models easier. Ollama and LM Studio are popular options that reduce downloading and running a model to a few steps; llama.cpp is an open-source framework for more technical users. Download tools only from their official websites.

## 4. Pick the right model

Platforms such as Hugging Face host thousands of open-weight models. To start, choose small and mid-sized models (a few billion to a few tens of billions of parameters) from well-known companies. On the model page, check the license (does it allow commercial use?), the supported languages and the recommended quantization levels. If you will use Turkish, make sure the model is multilingual and try it with your own texts.

## 5. Choose a quantization level

Model files are usually offered at different quantization levels. 8-bit gives higher quality but is larger; 4-bit is smaller and faster but gives slightly lower-quality results. If your memory allows, try the mid-level options first.

## 6. Test and compare

Pick a few examples from your own work and try the model: have it summarize an email, proofread a text, or explain a piece of code. Compare the results with cloud models to see which tasks the local model handles well enough.

## 7. Pay attention to security

- Download models and tools only from trusted sources.
- Don't leave the local model's server exposed to the internet; by default, it should be accessible only from your own computer.
- Check that the model's license fits your intended use.
