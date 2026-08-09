"use client";

export default function FAQAccordion() {
  const faqs = [
    {
      q: "Are dry fruits healthy?",
      a: "Dry fruits are rich in vitamins and minerals. They contain low calories and more nutrients which makes them healthy snack options. They are excellent sources of fibre, antioxidants, and essential fatty acids."
    },
    {
      q: "Do dried fruits have expiry dates?",
      a: "Dried fruits can be stored for 4 months to 1 year. However, keep a check on the temperature and humidity level when storing them. We recommend storing in airtight containers in a cool, dry place."
    },
    {
      q: "Does NutsHub have a home delivery facility?",
      a: "Yes, NutsHub has a home delivery option for its customers. You can share your address while ordering to get home delivery across Bangalore. We ensure careful packaging to maintain freshness."
    },
    {
      q: "Can I buy packed dry fruit gift boxes from NutsHub?",
      a: "NutsHub provides the best quality dry fruits in beautifully curated gift boxes, perfect for festivals and special occasions. Please consult directly to know about available gift box options and customization."
    },
    {
      q: "What are the store timings?",
      a: "NutsHub is open all days of the week from 10:00 AM to 10:00 PM (Monday through Sunday). We suggest calling and confirming the availability before visiting for specific products."
    }
  ];

  return (
    <div className="faq-container">
      {faqs.map((faq, idx) => (
        <details key={idx} className={`faq-item reveal reveal-delay-${idx + 1}`} name="faq-group">
          <summary>
            <span>{faq.q}</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </summary>
          <div className="faq-answer">
            <p>{faq.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
