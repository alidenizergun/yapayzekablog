---
ref: "2026-11-13-llama-cpp-ve-ggml-1-0-0-surumune-ulasti"
slug: "llama-cpp-and-ggml-reach-version-1-0-0-with-clear"
title: "llama.cpp and ggml reach version 1.0.0, with clear versioning rules for compatibility"
spot: "Georgi Gerganov announced the first major release of llama.cpp and ggml. Both libraries will now follow rules that make clear from the version number which updates will break compatibility; this release removes 35 deprecated functions."
whyItMatters: "The most widely used library for running models locally (on-device) is giving app developers its first formal compatibility promise."
photoAlt: "a computer screen with a bunch of code on it"
---

Georgi Gerganov announced that version 1.0.0, released on November 13, is the first major release of llama.cpp and ggml. Hugging Face CEO Clément Delangue also presented the release on X as the project's first stable version.

Both libraries have moved to semantic versioning: changes to the C API that break backward compatibility will bump the first number (MAJOR), compatible new features the second (MINOR), and bug fixes the third (PATCH). According to the release notes, 35 functions that had previously been announced as deprecated were removed in this release.

llama.cpp supports more than 150 architecture variants. Gerganov's team joined Hugging Face in February 2026.
