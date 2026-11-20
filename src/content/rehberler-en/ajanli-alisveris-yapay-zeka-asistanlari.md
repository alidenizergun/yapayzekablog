---
ref: "ajanli-alisveris-yapay-zeka-asistanlari"
slug: "agentic-shopping"
title: "Agentic shopping: how AI assistants are changing online buying"
description: "ChatGPT shopping and Instant Checkout, Google AI Mode's checkout flow and the ACP protocol: what has been confirmed in agentic commerce, what sellers should prepare for, and the risks."
summary:
  - "OpenAI launched in-chat purchasing in ChatGPT in September 2025, then in March 2026 shifted focus to product discovery and allowed merchants to use their own checkout experience."
  - "ACP is an open standard published by OpenAI and Stripe in September 2025; the specification is in beta on GitHub."
  - "For sellers, the most concrete preparation is keeping product feed and promotion data current and keeping payment infrastructure compatible with these protocols."
faq:
  - q: "Can I complete a purchase entirely within ChatGPT?"
    a: "In September 2025, OpenAI launched direct in-ChatGPT purchasing for users in the US. In March 2026, it shifted its focus to product discovery and allowed merchants to use their own checkout experiences."
  - q: "What is the Agentic Commerce Protocol (ACP)?"
    a: "ACP is an open standard designed to connect buyers, AI agents and businesses in the purchasing process. OpenAI and Stripe published it on September 29, 2025; the specification is in beta on GitHub."
  - q: "Why should I start as a small seller?"
    a: "First, keep your product data accurate and up to date, since assistant product discovery relies on it. Ask your payment provider whether its infrastructure supports these protocols."
---

Agentic shopping means an AI assistant researches products for you, compares options and, in some cases, accompanies you through the purchase step. The field is changing fast: ChatGPT's checkout experience changed direction within a year. This guide only covers information backed by official pages and reliable news sources. Topics such as Perplexity shopping and Google's AP2 protocol are not covered in detail here.

## What is agentic shopping changing?

In traditional e-commerce, you search for products, compare across tabs, then pay at a store. In assistant-based shopping, most of these steps are combined into a single chat: you describe what you need and the assistant ranks the options. The contested point is the final step, namely where payment happens. As the sections below show, the industry has not yet settled on a model for this.

## Shopping in ChatGPT: getting started with Instant Checkout

[OpenAI](https://openai.com/index/buy-it-in-chatgpt/) opened direct purchasing within ChatGPT to Plus, Pro and free users in the US in September 2025. Initially, only single-item orders were supported, and payment ran through the Agentic Commerce Protocol (ACP).

Read the ranking details carefully. The same OpenAI page says products using Instant Checkout are not favored; however, whether Instant Checkout is enabled for sellers offering the same product is also considered in ranking. In other words, enabling the feature may not be entirely neutral for ranking. If you are a seller, weigh this detail in your own decisions.

## March 2026: focus shifts to product discovery

The picture changed later. [According to CNBC](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html), OpenAI said Instant Checkout did not offer enough flexibility, allowed merchants to use their own checkout experiences and shifted its focus to product discovery. According to the same report, merchants can share product feeds and promotions; Target, Sephora and Nordstrom are supporting this new discovery experience, and Walmart announced it is offering an app within ChatGPT.

Why did this happen? According to [a report based on The Information](https://searchengineland.com/chatgpt-instant-checkout-plan-change-471033), OpenAI found that users were researching products in ChatGPT but not completing purchases there, and only a small number of merchants were using the built-in checkout. [Fast Company](https://www.fastcompany.com/91533534/shop-til-you-bot-google-openai-and-the-race-to-build-agentic-commerce) reports that fewer than 30 of Shopify's millions of merchants had moved to Instant Checkout. This figure is not official data but journalistic reporting; still, it suggests adoption has been limited.

CNBC also reported that OpenAI is moving toward [building its own apps within ChatGPT with merchants](https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html). A spokesperson said the apps would give brands more control over the look and feel of shopping. In practice, this points to an arrangement in which ChatGPT is the storefront, while the brand owns the sale and the customer experience.

## Google: AI Mode and agentic checkout

At its I/O event in May 2025, Google announced [a new shopping experience in AI Mode and agentic checkout](https://blog.google/products-and-platforms/products/shopping/google-shopping-ai-mode-virtual-try-on-update/). According to Google, the cart is built on the merchant's own site and payment is completed with Google Pay. The feature was expected to roll out more broadly in the coming months for product listings in the US.

This flow departs from ChatGPT's initial model at one point: the purchase stays tied to the merchant's cart on its own site. The announcements cover the US. To check availability in Turkey, you will need to test it on your own account.

## ACP and agent payment protocols

For an agent to pay securely, it needs a common language. [According to Stripe](https://stripe.com/newsroom/news/stripe-openai-instant-checkout), OpenAI and Stripe published ACP on September 29, 2025, and describe it as an open standard. The specification is [maintained on GitHub](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol) by OpenAI and Stripe, and is described as being in beta.

Stripe says it was the first compatible implementation for ACP and that payments are made with Shared Payment Tokens. A merchant can process the transaction through Stripe, or, when working with another payment company, use Stripe's fraud risk scores. [According to the ACP official site](https://www.agenticcommerce.dev/), the protocol is not tied to a specific payment provider.

These details also show that the protocol is still evolving: before making long-term investments in a specification in beta, it makes sense to follow the current version.

## What should brands and sellers prepare for?

Concrete steps that follow from the confirmed information are:

- **Keep product data organized.** According to OpenAI, merchants can share product feeds and promotions. Consistent price, stock, image and description fields are the core input for discovery. For the general framework, see our guide to AI use cases in e-commerce.
- **Check your payment infrastructure.** Ask your payment provider whether it supports protocols such as ACP. Even if you do not use Stripe, the protocol is not limited to a specific payment company.
- **Protect your own checkout experience.** The March 2026 change shows that a purchase can be completed on the merchant's website or app. Rather than leaving your conversion funnel only inside the assistant, keep your own site strong.
- **Monitor visibility in assistants.** You can track how your brand is mentioned in AI responses using the approach in our guide to [AI search and brands](/rehber/yapay-zeka-aramalari-ve-markalar-geo/).
- **If you sell on a marketplace,** the feed and catalog preparation will be handled through the marketplace, so our guide to AI for marketplace sellers will be useful.

Also clarify commission and fee terms in writing; no official source has confirmed the figures circulating on this topic.

## Risks and limits

Several points call for caution:

- **The model is changing quickly.** ChatGPT's built-in checkout approach was restructured in a short time. There is no guarantee that an integration you set up today will remain the same tomorrow.
- **Figures may be speculative.** Data attributed to Pew, which says roughly 2% of ChatGPT queries, or around 50 million queries per day, are related to shopping, is cited [in Fast Company](https://www.fastcompany.com/91533534/shop-til-you-bot-google-openai-and-the-race-to-build-agentic-commerce); Pew's own report was not found in this research. Use the figure as a directional guide, not as a basis for investment decisions.
- **Ranking transparency is limited.** The official wording does not fully clarify how Instant Checkout affects ranking.
- **Regional gaps.** The announced features are focused on the US.

As a buyer, verify the price, seller and return terms of any product an assistant recommends before you pay. When delegating tasks to agents, apply the principles in our guide to [using AI agents safely](/rehber/yapay-zeka-ajanlarini-guvenle-kullanma/).

## How do you get started?

If you are a buyer, try researching a product with [ChatGPT](/arac/chatgpt/) or Google's shopping features, but complete the payment by checking on the merchant's page. If you are a seller, start with three steps: update your product feed, discuss protocol support with your payment provider, and make a plan that keeps most of your sales in your own channels. If you are a small team, first invest time in product data quality; protocol integration comes after that.
