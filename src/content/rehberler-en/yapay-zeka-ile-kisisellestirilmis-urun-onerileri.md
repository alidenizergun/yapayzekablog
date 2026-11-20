---
ref: "yapay-zeka-ile-kisisellestirilmis-urun-onerileri"
slug: "how-ai-powered-product-recommendations-work"
title: "How AI-powered product recommendations work: a guide for small online sellers"
description: "How recommendation engines work, why big retailers' impact figures call for caution, free tools for small sellers, KVKK (Turkey's Personal Data Protection Law) consent rules and bias risks."
summary:
  - "Recommendation systems learn from past interactions and product attributes; collaborative, content-based and hybrid methods stand out."
  - "Most impact figures cited for large retailers come from secondary sources; test results from your own store are more reliable."
  - "Explicit consent, disclosure and the right to object come up with profiling and cookie use, and popularity bias should also be monitored."
faq:
  - q: "Where should a small store start with a recommendation system?"
    a: "Shopify's own blog recommends first adding a related-product recommendation to a frequently visited product page, then tracking clicks and purchases. Starting with built-in features and moving to a paid app only if you see results is the more sensible path."
  - q: "Do personalized recommendations always require explicit consent?"
    a: "According to a law firm's website, marketing-related profiling in most cases relies on explicit consent, and if you use cookies, separate cookie consent is also required. For a definitive assessment, consult the KVKK text and a legal expert."
  - q: "Why do recommendation engines keep showing the same popular products?"
    a: "According to academic studies, algorithms can frequently recommend a small number of popular products, and this tendency strengthens as user reactions to recommendations feed back into the system. That is why it is important to regularly monitor recommendation diversity."
---

You have probably seen a "you may also like" section below a product page in a store. Behind that section there is usually a machine learning model at work: it extracts patterns from past behavior and tries to decide which products to show each visitor. This guide explains how that logic works, where a small seller can start, and what to watch for regarding KVKK (Turkey's Personal Data Protection Law) and bias. For general context, you can also see the guide on [AI use cases in e-commerce](/rehber/e-ticarette-yapay-zeka-kullanim-alanlari/).

## What does a recommendation system do?

The job of a recommendation system is to highlight, from among many products, those most likely to interest a given person. Its inputs include clicks, purchases, items added to the cart and the products' own attributes. The output is a short list shown at points such as the product page, the cart, the checkout screen or in an email. The quality of the system depends largely on the amount and cleanliness of your data; a new store has little data, and its results are weaker as a result.

## Core methods

The best-known approach is **collaborative filtering**. The system looks at past user-product interactions and recommends products liked by people with similar tastes. [According to Real Python's explanation](https://realpython.com/build-recommendation-engine-collaborative-filtering/), the method that finds similar users is called user-based, and the method that finds similar products is called item-based.

**Content-based filtering**, on the other hand, looks at the attributes of the product. Because it does not depend on the behavior of other customers, it can work in stores with few customers. [In Shopify's example](https://www.shopify.com/blog/ai-recommendation-system), a tea store can recommend similar blends based on the aroma profile and caffeine level of the tea a customer likes.

In practice, these methods are usually used together. [A Turkish-language source](https://ecosire.com/tr/blog/ai-transforming-ecommerce-operations-2026) notes that collaborative, content-based and hybrid models are used together, and that recommendations are displayed on product pages, in carts and in emails.

A known weakness of these systems is the **cold start problem**: for a new user or a new product there is no historical data, which makes it harder to generate recommendations. This is why recommendations may be inaccurate in the first weeks of a newly opened store.

## Treat big retailers' figures with caution

Many figures circulate online in the style of "recommendations drive X% of sales." Percentages given for brands such as Amazon and H&M, and ranges attributed to McKinsey on the revenue contribution of personalization, are often repeated. However, most of these numbers come not from the companies' own disclosures but from secondary blogs and marketing sites, and different sources give different ranges for the same claim. For this reason, this guide does not present these percentages as conclusions.

What is more meaningful for you is the results you measure in your own store: the click-through rate of the recommendation block, the add-to-cart rate of recommended products and the average order value. Read the figures of large brands not as targets but as a general directional indicator.

## Ready-made tools for small sellers

You do not need to train your own model to set up a recommendation system. Shopify generates automatic recommendations based on purchase history, product descriptions and related collections. [According to Shopify's explanation](https://www.shopify.com/blog/ai-recommendation-system), a reasonable first step for a small store is to add a related-product recommendation to a frequently visited product page and then track clicks and purchases. In the free Search & Discovery app, you can also manually select up to 10 complementary and 10 related products for each product.

These built-in features have limits: recommendations can often appear the same to all visitors. So think of them as a good starting point rather than full personalization. Paid apps such as Nosto, Rebuy, LimeSpot and Klaviyo appear on various lists; however, you need to check their current prices and whether they can be used in Turkey on the apps' own websites. Local platforms' AI features, such as IdeaSoft and ikas, are also discussed in [Turkish-language sources](https://ecosire.com/tr/blog/ai-transforming-ecommerce-operations-2026); check the platforms' official pages for scope and pricing.

For the general framework for small businesses, see the guide on [AI for small businesses](/rehber/kucuk-isletmeler-icin-yapay-zeka/). If you sell on a marketplace, see the guide on [AI for marketplace sellers](/rehber/pazaryeri-saticilari-icin-yapay-zeka/).

## Personal data and explicit consent

Personalized recommendations mean collecting data about individuals and building profiles from that data. This is where KVKK comes into play. The information below is based on law firm and consultancy websites; do not act on it without checking it against primary texts such as kvkk.gov.tr or the Official Gazette. This is not a legal opinion.

- **Profiling and explicit consent:** [According to a law firm's website](https://konsorsiyumlegal.com/kavramlar/profilleme/), marketing-related profiling in most cases cannot rely on another processing condition, so it rests on explicit consent. Behavior-based personalized advertising also generally requires explicit consent.
- **Cookie consent:** According to the same source, if you use cookies and tracking technologies, you must obtain cookie consent separately.
- **Tying consent to the service:** [Another source](https://www.nesilteknoloji.com/yapay-zeka-profilleme-ve-kvkk/) states that making consent to unrelated profiling a condition of service is considered contrary to KVKK. So you should not prevent a customer who says "I don't want recommendations" from shopping.
- **Right to object:** The same source says a person can object only in cases where a decision adversely affecting them is produced solely by automated systems. Although product recommendations often fall outside this scope, for systems that make pricing or access decisions, always check the article and its scope in the primary text.
- **Privacy notice:** [According to one source](https://www.bilisimvehukuk.net/icerik/yapay-zeka-kullanirken-kvkk-uyumu-nasil-saglanir), the privacy notice should clearly state the types of data passed to the AI, the purpose and the service provider. If your recommendation tool is an external application, mention it as well.

Putting in writing what data you collect and why helps both customer trust and compliance. For details, see the guides on [personalization with AI and KVKK](/rehber/yapay-zeka-ile-kisisellestirme-ve-kvkk/) and [KVKK and AI tools](/rehber/kvkk-ve-yapay-zeka-araclari/), and consult a lawyer for your specific situation.

## Bias risk in recommendation engines

Recommendation systems may appear neutral, but they are fed by data they themselves generate. In [an academic study by Mansoury and colleagues](https://arxiv.org/abs/2007.13019), the authors note that algorithms often frequently recommend a small number of popular products while other products are overlooked. This bias strengthens as reactions to recommendations feed back into the system. The same study found that this feedback loop is stronger for users in minority groups.

In [a survey](https://dl.acm.org/doi/10.1145/3564284), this phenomenon is described as the "rich get richer" effect (the Matthew effect): popular products become even more popular while non-popular ones stay in the background. The same survey proposes methods such as random data collection or reinforcement learning to break the cycle.

The practical implication for sellers is this: the new or niche products of your small brand may become completely invisible because of recommendation blocks. Regularly check which products are being recommended; if the recommendation list lacks diversity, make sure the products you select manually also get exposure. For the general framework on bias, you can look at the term [AI bias](/sozluk/yapay-zeka-onyargisi/).

## Where to start

1. **Set a goal.** Do you want to increase average order value, or the move from product page to cart? Choose a single metric.
2. **Start with a built-in feature.** Turn on your platform's ready-made recommendation feature and test it on a product page.
3. **Measure and compare.** Compare pages with and without recommendations over a set period; if the results are good, move to a paid app.
4. **Prepare consent and disclosure.** Review your cookie notice, privacy notice and explicit consent flow before activating the recommendation tool.
5. **Monitor diversity.** Check monthly whether recommendations are piling up on the same few products.

A recommendation system is not a magic sales tool; when it runs on the right data, with a measurable goal and permitted data use, it is a useful assistant.
