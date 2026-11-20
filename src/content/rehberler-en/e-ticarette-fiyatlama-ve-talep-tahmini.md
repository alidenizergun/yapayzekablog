---
ref: "e-ticarette-fiyatlama-ve-talep-tahmini"
slug: "how-to-use-ai-for-e-commerce-pricing-demand-forecasting"
title: "How to use AI for e-commerce pricing, demand forecasting and inventory: a practical guide"
description: "A practical guide to what dynamic pricing, demand forecasting and inventory optimization can do, how small sellers can start, and the competition law risks of pricing algorithms."
summary:
  - "Pricing, demand forecasting and stock decisions all use the same data; if the data is poor, the results will be weak no matter which tool you choose."
  - "For small sellers, the most sensible start is analyzing existing sales data in a spreadsheet and piloting with a small product group."
  - "Pricing algorithms are on the agenda of competition authorities in the US and Turkey; sharing the same software with rivals and setting prices using personal data are distinct risks."
faq:
  - q: "Should a small e-commerce store start with dynamic pricing?"
    a: "It is safer to first get demand forecasting and stock tracking in order. If you move to dynamic pricing, test it on a small product group with a minimum and maximum price limit."
  - q: "Is using the same pricing software as competitors a legal problem?"
    a: "Some US lawsuits have examined this under competition law. In July 2026, the Third Circuit reversed a lower court's dismissal of such a case, involving the same pricing software used by Atlantic City hotels, on July 29, 2026. For your situation in Turkey, consult a competition law attorney."
  - q: "Is it right to apply AI price and stock recommendations directly?"
    a: "Initially, it is healthier to have a human approve recommendations. Before applying a recommendation, compare it with your historical data and margin limits."
---

Setting prices, deciding how much stock to hold and forecasting next week's sales are the three most labor-intensive tasks in e-commerce. AI handles these tasks by using machine learning to find patterns in historical sales data and generate recommendations. However, these recommendations are not equally useful for every business, and there are legal limits on pricing. This guide covers the three areas, methods accessible to small sellers, and competition law risks in a practical order.

## Three tasks, one data foundation

Pricing, demand forecasting and inventory management are linked. When you change a price, demand changes; when demand changes, stock needs change too. That is why all three rely on the same foundation: clean, well-organized sales data.

Before you start, check the following:

- Do you track daily or weekly unit sales by product?
- Are campaigns, discounts and out-of-stock days flagged in your records?
- Are returns and cancellations tracked separately?

On out-of-stock days, sales show as zero, but that does not mean there was no demand. If you do not flag these days, the model will learn that demand is lower than it really is. For guidance on organizing your data, see the [AI with Excel and data analysis](/rehber/yapay-zeka-ile-excel-ve-veri-analizi/) guide.

## Dynamic pricing: what it does and where its limits are

Dynamic pricing means automatically or semi-automatically adjusting prices based on signals such as demand, stock levels, competitor prices and timing. Here, AI uses historical data to estimate answers to the question "how much will I sell at which price?"

The limits are also clear:

- A model only learns from the data it sees; it may perform poorly on new products or during sudden market shifts.
- If you do not set a margin floor, the system may recommend a price that boosts sales but erodes profit.
- If customers notice that a product's price changes frequently, trust can suffer.

For these reasons, set a minimum and maximum price, limit how often prices change, and approve recommendations yourself before applying them in the early stages.

## Demand forecasting and inventory optimization

Demand forecasting means predicting how many units of a product you will sell in a given period. Seasonality, the campaign calendar and past sales trends are the most basic inputs. Inventory optimization turns that forecast into order timing and quantity: when and how much to order so that shelves do not run empty and warehouses do not fill with excess stock.

The two types of error have different costs. Too little stock means lost sales; too much means tied-up cash and products sold off at a discount. Consider which error is more expensive for you by product group. For fast-selling products with long supply lead times, a safety stock may make sense; for products that go out of fashion, keeping low stock may be more sensible.

It is healthier to read a forecast as a range rather than a single number. Monitor how many weeks of history the model relies on and which products it often gets wrong.

## Examples from large retailers and how to approach the numbers

Large retailers work in this area with their own data science teams; they produce forecasts for millions of products and many stores. A small seller does not need to copy this infrastructure, and in most cases cannot.

Claims such as "X% revenue growth" or "Y% stock reduction" appear frequently in seller blogs and consulting articles. These are often the solution provider's or implementer's own measurements; do not accept these figures as benchmarks without seeing the full report. Define your own success metrics through a pilot: forecast error, the number of out-of-stock days and margin.

## An accessible starting point for small sellers

You can start without investing in a large system:

1. **Put the data into a spreadsheet.** Export recent sales by product from your marketplace or store dashboard.
2. **Start with a simple forecast.** Simple methods such as moving averages and seasonal adjustments are often easier to understand than starting with a complex model. You can ask a general-purpose AI assistant to run this analysis on your spreadsheet, but check the results manually against sample products.
3. **Pilot with a small product group.** Choose a few best-selling products, not your entire catalog.
4. **Measure the results.** Compare the products where you followed the recommendation with those where you did not.
5. **Make the final decision on recommendations.** Before linking prices and order quantities to automation, monitor the consistency of the recommendations over several periods.

If you sell on a marketplace, also see the guides on [AI for marketplace sellers](/rehber/kucuk-isletmeler-icin-yapay-zeka/) and [AI for small businesses](/rehber/kucuk-isletmeler-icin-yapay-zeka/). For a broader overview, see the e-commerce AI use cases page.

## Competition law risks of pricing algorithms

Leaving pricing to an algorithm does not remove legal liability. In the US, several developments occurred in this area in 2026. The following is not legal advice; consult a lawyer about your own situation.

**Shared software and alleged agreements.** On July 29, 2026, the Third Circuit [reversed](https://www.paulweiss.com/insights/client-memos/the-antitrust-landscape-for-algorithmic-pricing-key-decisions-and-takeaways) a lower court's dismissal of an antitrust lawsuit in the Cornish-Adebiyi / Caesars Entertainment case, which targeted Atlantic City hotels using the same pricing software. In a ruling on appeal, the Ninth Circuit also [stated](https://www.joneswalker.com/en/insights/blogs/ai-law-blog/algorithmic-pricing-risk-business-implications-from-californias-new-law-and-bey.html) that rivals agreeing to use the same software and follow its recommendations could be considered a horizontal agreement. In May 2026, a US Department of Justice official also [said](https://www.paulweiss.com/insights/client-memos/the-antitrust-landscape-for-algorithmic-pricing-key-decisions-and-takeaways) that knowingly joining a shared algorithm that uses rivals' sensitive pricing data could fall within the scope of criminal law.

**New laws.** In California, AB 325 took effect on January 1, 2026; it prohibits the use and distribution of "common pricing algorithms" in price-fixing arrangements and [imposes](https://www.joneswalker.com/en/insights/blogs/ai-law-blog/algorithmic-pricing-risk-business-implications-from-californias-new-law-and-bey.html) direct liability on software providers. In New York, a law requiring companies that use algorithms to set prices based on personal data to disclose this also took effect on January 1, 2026; it [provides](https://www.skadden.com/insights/publications/2026/01/new-york-algorithmic-pricing-law) for penalties of up to $1,000 per violation and an opportunity to cure a first violation. In Maryland, a regulation prohibiting dynamic pricing and higher prices set using personal data for large grocery chains and third-party delivery services [takes effect](https://www.orrick.com/en/Insights/2026/06/Algorithmic-Pricing-Under-Scrutiny-What-You-Need-to-Know) on October 1, 2026. The Federal Trade Commission (FTC) has also issued an advance notice on disclosure requirements for variable and personalized pricing.

The practical lesson is this: avoid systems that create a shared price pool with competitors or that are fed with their sensitive data, and separately evaluate transparency and personal data protection rules for personalized pricing based on customer data. For this, the guide on [AI and personalization and KVKK (Turkey's Personal Data Protection Authority)](/rehber/yapay-zeka-ile-kisisellestirme-ve-kvkk/) can be a starting point.

## The Turkish Competition Authority's approach

Competition Authority President Birol Küle [said](https://www.aa.com.tr/tr/ekonomi/rekabet-kurumu-algoritmalar-kullanilarak-yapilan-rekabet-ihlallerini-yapay-zeka-ile-belirleyecek/3623865) that companies set prices using algorithms and that violations such as price fixing can occur automatically through algorithms. The authority also announced that it plans a counter-audit system that will use AI to detect these violations. Küle further noted that learning algorithms can create the risk of price coordination without human intervention, known as "algorithmic collusion." The authority [announced](https://www.ekonomim.com/sehirler/rekabet-kurumu-2026da-dijital-ekosistemi-yakindan-izleyecek-haberi-863079) that it will closely monitor the digital ecosystem in 2026.

According to a law firm, the Competition Board's decision dated October 3, 2024, numbered 24-40/950-409, examined an automatic pricing mechanism that an e-marketplace offered to sellers, and the decision [expresses concern](https://www.oguzkara.av.tr/post/sirketlerde-yapay-zeka-kullanim-politikasi) that algorithms may facilitate secret agreements. It is best to check the decision text against the official source. If you use the automatic pricing tools offered by a marketplace, it is a good starting point to understand how these tools work and whether your rivals use the same tool.

## Checklist before you apply it

- Is your data clean, and are out-of-stock days flagged?
- Have you defined a minimum and maximum price?
- Are you getting competitor data only from publicly available sources?
- Have you asked your software provider whether the software produces joint pricing recommendations with rivals?
- If you use customer data in pricing, have you reviewed your disclosure and notice obligations?
- When and by whom are recommendations approved?

If you cannot answer several of these questions, hold off on the next step of automation. For legal questions, consult a competition law attorney.
