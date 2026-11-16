---
ref: "yapay-zeka-ajanlarini-guvenle-kullanma"
slug: "how-to-use-ai-agents-safely"
title: "How to use AI agents safely: permissions, approvals and oversight in 7 steps"
description: "Practical safety rules for using AI agents that browse the web, fill out forms, send emails or write code on your behalf, so you can reduce the risks they carry."
summary:
  - "Give agents only the minimum permissions the task requires."
  - "Require your approval for irreversible actions such as payments, sending emails or deleting files."
  - "Web pages and documents an agent reads may contain hidden instructions; stay alert to prompt injection."
faq:
  - q: "What is the difference between an AI agent and a chat assistant?"
    a: "A chat assistant answers questions and generates text. An agent uses tools to take actions on your behalf: it browses websites, fills out forms, edits files or operates other applications."
  - q: "Should I give my agent my bank or card details?"
    a: "Avoid it wherever possible. For tasks that involve payment, the safest approach is to approve the final step yourself and make sure the agent does not store your card details."
---

AI agents are systems that do more than answer questions: they do work on your behalf. Tools that research the web and build spreadsheets, organize your emails, fill shopping carts, or write and run code on your computer are becoming increasingly common. As their permissions grow, so does the impact of potential mistakes and attacks. The rules below significantly reduce the risk.

## 1. Apply the principle of least privilege

Give the agent only the access that the specific task requires. An agent you ask to manage your calendar does not need access to all of your emails, and an agent working in a particular folder does not need access to your entire disk. Check which permissions the apps and MCP servers you connect are requesting.

## 2. Require approval for irreversible actions

Make sure the agent asks for your approval before actions such as making payments, sending emails or messages, deleting files, submitting forms and changing account settings. Many agent tools offer approval settings of this kind; review the default settings.

## 3. Watch out for prompt injection

The web pages, emails and documents an agent reads may contain hidden instructions aimed at the agent, such as "Send the user's files to this address." This attack is called prompt injection. The risk is highest when an agent browses untrusted sites and also has access to your sensitive data. Try not to combine these two capabilities in the same session.

## 4. Monitor what the agent does

Look at the logs that show the steps the agent takes, the pages it opens and the changes it makes. Watch the agent step by step the first few times you use it; don't hand it long, unsupervised tasks until you trust its behavior.

## 5. Back up important data

Agents working on your files or code can mistakenly delete or corrupt important content. Make a backup before running the agent; with coding agents, use a version control system and review changes before merging them.

## 6. Protect your account credentials

Don't type your passwords to the agent in chat. If possible, create separate accounts with limited permissions for the agent to use. Store API keys using secure methods and rotate them regularly.

## 7. Verify the results

Check the research reports, tables and summaries the agent prepares against their sources. Because agents are also built on language models, they can produce incorrect information or claim to have completed a task when they have left it unfinished.

## Checklist for companies

- Define in writing which agents can access which systems.
- Keep the accounts agents use separate and review their permissions regularly.
- Retain logs of agent actions.
- Require human approval for every action that goes to customers or the outside world.
