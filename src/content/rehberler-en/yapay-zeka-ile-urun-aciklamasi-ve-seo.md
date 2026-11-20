---
ref: "yapay-zeka-ile-urun-aciklamasi-ve-seo"
slug: "ai-product-descriptions-and-category-page-seo"
title: "AI product descriptions and category page SEO: Google and marketplace rules"
description: "How to write product titles and descriptions with AI while following Google's content policies, Merchant Center labeling rules, duplicate content risks, structured data, and Trendyol's rules."
summary:
  - "Google does not ban AI-generated content. The problem is unhelpful, unoriginal content produced to manipulate search rankings."
  - "On Merchant Center, titles written with AI should be submitted as structured_title instead of title, and the AI source should be labeled."
  - "Supplier copy or template descriptions that follow the same pattern can weaken visibility. On marketplaces, the single-content rule also matters."
faq:
  - q: "Does Google penalize product descriptions written with AI?"
    a: "According to Google's official blog post, the purpose and usefulness of content matter more than how it was produced. Automated content generated to manipulate rankings is treated as spam. The goal is helpful, original and trustworthy content."
  - q: "How should I submit an AI-written product title to Merchant Center?"
    a: "According to the Merchant Center help page, AI-generated titles should be submitted using the structured_title attribute instead of title, with the digital_source_type sub-attribute set to trained_algorithmic_media."
  - q: "Is it a problem to use the manufacturer's ready-made description?"
    a: "According to secondary sources, this is not a penalty trigger in itself, but the same text appearing across many stores can lead to lost visibility. On marketplaces, the single-content principle and the platform's own rules apply."
---

Writing product titles and descriptions is one of the tasks e-commerce teams most readily hand over to AI. For stores with thousands of products, that makes sense. But the same ease also creates the risk of producing look-alike pages that do not actually describe the product. This guide walks through what Google says about product content and AI-generated content, the duplicate content risk, structured data, and Trendyol's official rules in a straightforward flow. For general use cases, you can also see the [AI use cases in e-commerce](/rehber/e-ticarette-yapay-zeka-kullanim-alanlari/) guide.

## Where to start when writing titles and descriptions with AI

Good results come not from giving the model a blank page but from giving it accurate, complete product data. Take the brand, model, material, dimensions, intended use and, if available, warranty information from your product table and include them in the prompt. If you let the model fill in missing information on its own, the risk of fabricated information (hallucination) arises: a feature or certificate that does not exist harms both customer trust and marketplace compliance. The [how to write a good prompt](/rehber/iyi-istem-nasil-yazilir/) guide is useful for prompt writing.

Before publishing the output, run these checks: Does every feature match your product data? Does it fit the brand voice? Is the same template repeating across hundreds of products? For Turkish-language text, a software company blog states that ChatGPT can produce descriptions suitable for Trendyol but needs manual correction for formatting and SEO. Since that assessment was published by a seller, it should not be treated as a definitive benchmark on its own. Still, the practical takeaway is the same: let AI write the draft, but have a human make the final decision. To keep your brand voice, you can review the [AI content production and brand voice](/rehber/yapay-zeka-ile-icerik-uretimi-ve-marka-sesi/) guide.

## How Google views AI content

According to the [Google Search Central blog post](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content), producing content through automation, including AI, violates spam policies when its main purpose is to manipulate search rankings. The same post states that AI does not give content any inherent advantage. The standard, then, is not the tool itself but whether the content meets the criteria of being helpful, original and E-E-A-T (experience, expertise, authoritativeness, trustworthiness).

For product pages, this means the description needs to help the reader choose the product. Ready-made templates and text that only stuffs in keywords do not meet this standard. Google has not published a separate AI-specific guide for product descriptions; the framework available consists of general content principles and the field definitions in Merchant Center. Applying these principles to category pages is a reasonable approach: rather than producing hundreds of thin, similar texts for a category at once, it is healthier to write fewer texts that actually guide the buyer. This is our interpretation; Google has not published a separate AI rule for category pages. For changes in the search environment, see the [SEO in the age of AI](/rehber/yapay-zeka-caginda-seo/) guide.

## Labeling AI titles in Merchant Center

If you use titles in Google Shopping listings, there is a clear rule here. According to the [Merchant Center help page](https://support.google.com/merchants/answer/14743464?hl=en), titles produced by AI should use the structured_title attribute, with the digital_source_type sub-attribute set to trained_algorithmic_media. The [page describing the title attribute](https://support.google.com/merchants/answer/6324415?hl=en) also states that all AI-generated titles should be submitted with structured_title instead of title. The Merchant API documentation sets a limit of [150 characters](https://developers.google.com/merchant/api/reference/rpc/google.shopping.merchant.products.v1/Types/StructuredTitle) for the structured title field.

Some secondary sources write that when both title and structured_title are sent, only title is used and AI titles may be silently disabled. The official page does not explicitly describe this behavior, so after setting up your feed, check in the product view in Merchant Center which title is being used.

Another rule is consistency: the title in the feed does not have to be identical to the content on the page, but it must describe the same product. Do not let AI inflate the title with marketing language until it loses its connection to the product.

## Duplicate content risk

Sources speak in somewhat different tones about duplicate content. One says that reusing supplier descriptions does not carry a penalty but can cause lost visibility, and that when the same description appears across many stores, Google will choose one of them. The [SEO.digital guide](https://seo.digital/guides/duplicate-product-descriptions-seo-fix-rank-higher/) recommends a canonical tag for cases where the same product appears at more than one address. This is a secondary source. Another transfer, based on an older Google statement, says duplicate content is not a negative signal in itself, but that unique descriptions help differentiate similar products.

AI is a double-edged tool here. On one hand, it makes it easier to generate different text for each product; on the other, texts produced from the same prompt template can fall into the same pattern even when the words differ. One secondary source says that such "technically unique but same-pattern" texts carry risk. This is not an official Google statement but the source's interpretation. As a practical safeguard, tie the prompt to product features, highlight each product's real differences, and sample outputs at random to check how similar they are. To find existing duplicates, you can use the "Duplicate, Google chose different canonical" and "Duplicate without user-selected canonical" reports in Search Console.

## Structured data: must match the description

Information in an AI-written description must match the page's structured data. According to the [Merchant Center help page](https://support.google.com/merchants/answer/6069143), structured data must match the values shown to the customer, and incorrect data on a product page is considered a violation. There are two important technical notes: according to the [Merchant Center structured data setup page](https://support.google.com/merchants/answer/7331077?hl=en), the data should be present in the HTML rather than generated later with JavaScript, and the product page should include both a Product object and a nested Offer object.

In practice, these errors are common: AI changes the color or dimensions in the description, but the markup keeps the old value; or a campaign price is updated on the page but the structured data is not. One secondary source also recommends keeping the page, structured data and feed in sync. The fact that no special schema is needed for visibility in AI search comes from a Google guide as relayed by Semrush. In other words, keeping existing product data accurate takes priority over looking for new markup.

## Marketplace content rules

On marketplaces, the rules differ from those on your own site. According to [Trendyol Academy](https://akademi.trendyol.com/satici-bilgi-merkezi/detay/242), product content consists of product features and usage details; it should include information that lets customers see the product's content and how it is used. For electronics, warranty terms and installation service information should also be included in the product content. The same page specifies a minimum image size of 600x800.

The most critical rule is in [Trendyol's quality standards](https://akademi.trendyol.com/satici-bilgi-merkezi/detay/204): under the Buy Box model, the principle is that a single content is created for each product. Opening multiple contents for the same product, entering a different product under a barcode, and changes that negatively affect other sellers' trade are considered violations. For this reason, having each seller generate a separate AI description for the same product carries risk on a marketplace. It is safer to contribute to the accuracy of the existing product listing than to open new content.

Secondary sources disagree on title length and image dimensions. Some cite a 100-character limit for product names in API integration, while the panel uses a different range. Secondary sources also say that emojis, links, and shipping or campaign promises should not be placed in the description. Confirm the current limits in the seller panel and official Academy pages, and shorten AI output to fit those limits. Follow the same approach for Hepsiburada and Amazon: check the official seller help pages and do not treat dated rules from secondary sources as definitive.

## A short implementation flow

1. Organize your product data: features, dimensions, warranty and usage information should be in a single table.
2. Tie the prompt to this data and instruct the model to use only the information provided.
3. Run a human check: compare every claim with the product data and remove repeated patterns.
4. Adapt by channel: on your own site, use helpful and original text; on a marketplace, use a single content that complies with platform rules.
5. If you use Merchant Center, submit AI titles with structured_title and the correct label.
6. Update structured data, the page and the feed together whenever prices or stock change.
7. Regularly monitor duplicate page reports in Search Console.

The place this flow saves time is the drafting stage; accuracy, originality and platform compliance remain your responsibility. Figures on AI usage rates in Turkey are circulating in secondary sources, but since no official bulletin has been seen, we do not rely on those numbers here. Measuring the performance of your own pages is the most reliable method.
