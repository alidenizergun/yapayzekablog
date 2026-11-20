---
ref: "e-ticarette-yapay-zeka-musteri-hizmetleri"
slug: "how-to-set-up-an-ai-customer-service-chatbot"
title: "How to Set Up an AI Customer Service Chatbot for E-Commerce: A Step-by-Step Guide"
description: "Planning an AI assistant for order tracking, returns and product questions? Key choices include ready-made tools, human handoff, the Air Canada ruling and the metrics to track."
summary:
  - "Chatbots can handle orders, returns and product questions, but a business may be held responsible for wrong answers."
  - "A Gartner survey found that 87% of customers expect the option to reach a human when companies use generative AI for customer service."
  - "Containment alone is not enough; resolution, satisfaction and repeat contacts should be tracked together."
faq:
  - q: "How do I add an AI chatbot to an e-commerce site?"
    a: "First identify the most common customer questions, prepare a single, up-to-date information source for the bot to answer from, then launch on a ready-made platform with a limited scope. Define the handoff rule and monitoring metrics from the start."
  - q: "Is a company liable if its chatbot gives wrong information?"
    a: "In Canada's Air Canada case, the tribunal held the airline liable for wrong information its chatbot gave. A Turkish law firm also writes that a business is responsible for statements made by its chatbot; this is the firm's commentary, not a court ruling."
  - q: "Which metrics should be tracked?"
    a: "Containment, verified resolution, repeat contacts, customer satisfaction (CSAT) for both AI and human conversations, and satisfaction after handoff should be tracked together. Because containment is defined differently by each vendor, write down your own definition."
---

A significant share of customer messages in e-commerce are repetitive: Where is my order? How do I return an item? Will this product work for my needs? AI-powered chatbots can answer these questions and reduce the workload on your team. However, when a bot gives wrong information, responsibility falls on the business. This guide walks through how to define the scope, choose ready-made solutions, hand off to humans, manage risks and measure performance, step by step. For the broader picture, see the guide to [AI use cases in e-commerce](/rehber/e-ticarette-yapay-zeka-kullanim-alanlari/).

## Which tasks should the bot handle?

Order tracking, returns and product questions are the most natural three topics, but they do not carry the same level of risk. Fixed information such as return conditions and shipping times is the safest area. Product questions depend on catalog data, so your product data must be current. For order-specific actions such as order status, first determine whether the bot is connected to your order system and clearly define what it can and cannot do. This is a recommendation; it is not presented as a standard rule in the sources.

The customer side is mixed. According to Gartner's survey of 3,566 B2B and B2C customers conducted in February and March 2026, customers are more comfortable using AI to resolve service issues, but they react negatively when AI prevents them from reaching a human ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0)). The bot should therefore be designed as a first line of help, not as a barrier.

## Ready-made solution or custom build?

For a small or mid-sized store, the most sensible starting point is usually a ready-made tool. For example, Shopify Inbox, a free live chat tool integrated into the Shopify admin with a simple FAQ bot, is cited as a starting point ([Shopify Türkiye](https://www.shopify.com/tr/blog/e-ticaret-icin-en-iyi-yapay-zeka-araclari)). If you sell on a marketplace, the guide to [AI for marketplace sellers](/rehber/pazaryeri-saticilari-icin-yapay-zeka/) will also help.

When choosing a platform, get the following confirmed in writing from the vendor: Turkish language support, pricing, whether it connects to your order system, and the option to hand off to a human. We could not find this information compiled for Turkey in an official, independent source. Also do not accept vendor claims about success rates without testing them against your own data.

## Setup steps

1. **Sort the questions.** Group recent customer messages by topic (shipping, returns, products, payment) and start the bot with the few topics that come up most often.
2. **Prepare a single, up-to-date information source.** Keep the return policy, shipping times and product information in one place, and have the bot answer only from that source. When writing the bot's instructions, the principles in the guide to [how to write a good prompt](/rehber/iyi-istem-nasil-yazilir/) are useful.
3. **Define the limits.** The bot should not guess when it does not know an answer, and should not promise discounts, exceptions or compensation. It should refer such requests to the team.
4. **Define the handoff rule.** Determine in advance when a conversation moves to a human (see below).
5. **Test with real questions.** Try messages involving exceptions, angry customers or vague requests, and check whether the bot produces answers that contradict your policies.
6. **Launch with a limited scope.** Start with a single topic or page, read conversation logs regularly, and then expand.

## Wrong-information risk: the Air Canada ruling

The tendency of chatbots to generate made-up information (hallucination) may look like a technical issue on paper, but in practice it can become a legal liability. In its February 14, 2024 decision (2024 BCCRT 149), Canada's British Columbia Civil Resolution Tribunal held Air Canada liable for wrong information its AI chatbot gave a consumer and ordered compensation ([American Bar Association](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/)).

In the case, passenger Jake Moffatt asked the airline's AI-powered chatbot in November 2022 whether he could get a bereavement discount. The airline's actual policy, however, required the discount to be approved before the flight ([AOL](https://www.aol.com/air-canada-must-pay-refund-040527166.html)). Air Canada argued that the bot was a "separate legal entity"; the tribunal rejected this defense. According to the tribunal, the bot was part of the company's website, and it made no difference whether the information came from a static page or from the chatbot ([The Hill](https://thehill.com/business/4476307-air-canada-must-pay-refund-promised-by-ai-chatbot-tribunal-rules/)).

Sources differ on the amount. The Hill reports a refund of C$483 that was promised to the passenger. When citing figures, note that the currency is Canadian dollars and be aware of the discrepancy between sources. The lesson can be read independently of the amount: a chatbot's answer can bind you just as much as a page on your site.

## Handing off to a human representative

According to Gartner's survey, 87% of customers say companies using generative AI in customer service should offer the option to reach a human representative ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0)). For that reason, treat handoff as part of the design, not as a failure. Practical recommendations:

- When a customer asks for a human, do not try to persuade them through the bot; hand off in one step.
- Route sensitive matters such as payment disputes, damaged products, complaints or legal threats directly to the team.
- Hand off when the bot cannot answer the same question twice.
- Pass the conversation history to the representative so customers do not have to repeat themselves.
- If handoff is not possible outside business hours, state this clearly and give an expected response time.

Monitor the quality of handoffs as well: metrics such as handoff success, satisfaction after handoff and repeat contact rate are recommended in one compiled article. We did not find a source showing these are industry standards, so adapt them to your needs.

## Legal framework: Turkey and the EU

According to a Turkish law firm's article, under current law a business is itself responsible for statements made by the bot it uses, and the defense that "the AI gave this answer" does not, as a rule, remove liability. The same article states that if an AI-powered service offered to a consumer is defective, the elective rights under Turkey's Law No. 6502 on Consumer Protection may be exercised ([Bolak Hukuk Bürosu](https://www.aycabolak.av.tr/yapay-zeka-hukuku/)). This is a law firm's interpretation; it is not a court ruling and does not replace legal advice. For the personal data side, see the guide to [AI-driven personalization and KVKK (Turkey's Personal Data Protection Authority)](/rehber/yapay-zeka-ile-kisisellestirme-ve-kvkk/), and consult a lawyer for any specific situation.

If you sell into the EU, Article 50 of the EU AI Act is also important. Transparency obligations became applicable on August 2, 2026. Systems that interact directly with users, such as chatbots and voice assistants, must be designed so that users are informed they are interacting with an AI system; this is not required when it is clear from the context. The provision applies to providers placing systems on the EU market and to providers and users located outside the EU whose system output is used within the EU ([Baker Botts](https://www.bakerbotts.com/thought-leadership/publications/2026/september/eu-ai-act-article-50-transparency-obligations-go-live)). Whether a Turkish company falls within this scope depends on its specific situation; for details, see the guide to [the EU AI Act and Turkey](/rehber/ab-yapay-zeka-yasasi-ve-turkiye/). Telling customers they are talking to a bot is good practice even outside the EU.

## Metrics to track

The most commonly used measure is containment: the share of conversations the bot closes without handing off to a human. However, the definition is not uniform. According to one guide, containment is the percentage of conversations the bot manages without transferring them to a human, regardless of whether the issue was resolved. Gorgias, meanwhile, counts conversations where the bot responded and no representative intervened for 72 hours; the same source shows that the definition varies from vendor to vendor ([Ask AI](https://myaskai.com/blog/what-is-containment-rate), vendor blog). Because customers sometimes give up and leave, containment can look high; for this reason it is misleading on its own.

Several compiled sources commonly recommend tracking several measures together: containment; resolution rate, which verifies that the issue was actually solved; repeat contact rate for the same topic; customer satisfaction (CSAT) scores for AI and human conversations tracked separately; and cost per resolved issue. Do not treat threshold figures such as "alarm if below this rate" from blogs and vendor articles as verified values. First collect your own data for the first few weeks, then set targets. Also review random conversations regularly to check manually whether the bot is giving wrong information.

In short, a bot works well when it is set up with clear boundaries, connected to a current information source, easy to hand off to a human, and measured by its output.
