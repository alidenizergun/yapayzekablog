---
ref: "yapay-zeka-ile-finansal-dolandiricilik"
slug: "ai-and-financial-fraud"
title: "AI and financial fraud: how banks and companies are protecting themselves"
description: "Voice cloning and deepfake fraud, the Arup case, FBI data, how banks use AI detection, and payment approval safeguards companies can adopt."
summary:
  - "In the Arup case, an employee sent about $25 million in 15 transfers after trusting a deepfake video call."
  - "Banks are trying to catch fake voices by combining voice biometrics, behavioral signals and transaction context, not by relying on a single tool."
  - "For companies, the most effective safeguard is tying payment approval to a second channel that is independent of both the image and the voice."
faq:
  - q: "Can I tell whether the person I see on a video call is fake?"
    a: "Not always. In the Arup case, all the other participants in the meeting were AI-generated. For critical actions like payments, do not rely on the video image; use an independent, second verification channel."
  - q: "Can banks stop scammers who clone my voice?"
    a: "Banks are evaluating real-time detection tools, but according to an ABA analysis, many institutions still see this threat as an emerging risk. Detection alone is not considered sufficient and is used alongside other signals."
  - q: "What is the simplest first step for my company?"
    a: "Verify high-value or unusual payment requests by calling back on a pre-registered number that is independent of the channel the request came through, and make this a written rule."
---

A few seconds of audio or a handful of photos can be enough to convincingly imitate a person's voice and appearance. That makes finance fraud's oldest trick, impersonating someone you trust, far more persuasive. In this guide we cover a real case (Arup), the general picture from official records, how banks approach detection, and the safeguards companies can put in place in their payment approval processes. For individual protection, see the guide [protecting yourself from AI scams](/rehber/yapay-zeka-dolandiriciliklarindan-korunma/).

## The Arup case: everyone in the meeting was fake

The incident took place in January 2024 at the Hong Kong office of engineering firm Arup. A finance employee joined a video conference after receiving a confidential transfer request purportedly from the company's UK chief financial officer (CFO). [According to a compilation by Neural Defend](https://neuraldefend.com/insights/verified-cases/arup-deepfake-video-call-case), all the other participants in the meeting were fake, AI-generated images. The employee made 15 separate transfers totaling about $25 million (HK$200 million). Sources report the amount with small differences; some say $25.6 million.

Hong Kong police disclosed the case in February 2024, and Arup confirmed in May 2024 that it had been a victim. The most instructive aspect of the case, [as Axlio also emphasizes](https://www.axlio.com/insights/arup-deepfake-scam/), is that the employee became suspicious of an unusual email and asked for a video call, but the call itself was fake. In other words, the verification channel had also been compromised. Although the incident dates to 2024, the lesson still applies today.

## The official numbers in context

In the US, the FBI tracked artificial intelligence as a separate category for the first time in its 2025 Internet Crime Report. [According to data reported by PPC Land](https://ppc.land/ai-linked-fraud-costs-americans-893-million-fbi-reports-for-2025/), the report contains 1,008,597 complaints and $20.877 billion in losses. Of these, 22,364 were linked to AI, and the losses in those complaints totaled $893,346,472. AI-related losses in investment fraud exceeded $632 million, while total investment fraud losses were $8.6 billion. In addition, [according to a news site](https://www.ainexusdaily.com/article/fbi-2025-ic3-report-ai-cybercrime-losses), $13 million in losses were reported from deepfake job interviews.

When reading these figures, keep one limitation in mind: the data only covers cases in which the victim noticed that AI was used and reported it. The true picture is expected to be worse.

## How banks try to catch fake voices

Voice has long been a channel for both customer verification and call centers in banking. Generative AI has weakened that trust. According to [Banking News AI](https://www.bankingnewsai.com/ai-fraud-detection), a review of 2024 and 2025 annual 10-K filings from 120 major US banks indicates that generative AI makes fraud harder to detect, particularly in voice recognition and authentication.

The response does not rely on a single tool. [According to an August 2026 analysis by ABA Banking Journal](https://bankingjournal.aba.com/2026/08/the-voice-fraud-threat-to-banking/), banks are evaluating tools that work in real time to distinguish synthetic speech from human voices. The same analysis notes that deepfake voice fraud is still seen as an emerging threat by many institutions. In other words, the sector does not yet have an established standard in this area.

A layered approach is emerging. [As described in a Matellio article](https://www.matellio.com/blog/deepfake-detection-for-banking/), fake voice detection is used together with voice biometrics, caller number, behavioral signals and transaction context. For example, a convincing-sounding caller requesting a transfer that does not match the customer's usual behavior can by itself be a warning sign. Machine learning models are used to quickly flag such pattern deviations across large volumes of transactions, but a human or an additional verification step typically remains in the final decision. For broader applications in banking, see the guide [AI in banking](/rehber/bankacilikta-yapay-zeka/).

## The limits of detection

Fake voice and video detection tools are not flawless. Production methods change quickly, so there is no guarantee that a detector that works today will perform the same tomorrow. Vendor articles also tend to highlight their own products, so claims about success rates should be treated with caution. We have deliberately not used such rates in this guide.

Another limit, as the Arup case showed, is that attacks target the human process before technical detection comes into play. When an employee faces pressure, a request for secrecy and familiar faces, process rules need to guide them even without a technical alert. For tips on spotting synthetic media, the guide [how to recognize a deepfake](/rehber/deepfake-nasil-anlasilir/) may help, but it is safer not to leave a payment decision to those tips alone.

## Payment approval safeguards for companies

The most reliable defense against payment fraud is separating identity verification from image and voice. The recommendations below are general good practices; adapt them to your organization's risk profile. [Adaptive Security's article on payment verification](https://www.adaptivesecurity.com/blog/business-email-compromise-payment-verification) also highlights methods such as callbacks and checklists.

- **Independent callback:** Instead of the email, message or video link where the request arrived, call the requester on a number already recorded in your directory or system. Do not trust a number supplied by the caller.
- **Dual approval:** Require two separate authorized approvers for payments above a set amount or for first-time payments. Persuading one person should not be enough.
- **Urgency and secrecy flags:** Automatically route requests that are urgent, confidential or ask you to bypass the normal process to additional verification. Pressure is a common feature of this type of fraud.
- **Account change controls:** Verify changes to supplier or beneficiary bank details through a channel separate from the payment request, using contact information already on file.
- **Video call is not proof on its own:** Do not treat an instruction from someone whose face you saw on a meeting as sufficient without a written, authorized approval chain.
- **Training and drills:** Show finance teams examples of fake voices and videos, and run short exercises on executive impersonation scenarios. It is important that employees can halt a process when they are suspicious and know they will not be punished for doing so.

None of these measures requires AI. They are low cost, but they demand discipline. For finance teams looking to use AI with confidence, the guide [AI for finance teams](/rehber/finans-ekipleri-icin-yapay-zeka/) can also be a starting point.

## Where to start

As a first step, map your current payment workflow and record who approves at each stage, through which channel, and on what basis. If approval rests only on an email, phone call or video call, that point carries a risk similar to the gap exploited in the Arup case. Then put the callback and dual approval rules above in writing, and make clear that executives are also bound by them. A rule that applies even to executive requests removes the core target of these attacks.

The same logic applies to individuals: if a voice or video from someone you know asks for urgent money, hang up and call that person on a number you already know. For details, see [protecting yourself from AI scams](/rehber/yapay-zeka-dolandiriciliklarindan-korunma/). This article is not legal or investment advice; consult your information security and legal experts when designing corporate processes.
