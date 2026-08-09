import os

pages = {
    "products": """
import ProductGrid from "@/components/ProductGrid";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Premium Products | NutsHub"
};

export default function ProductsPage() {
  return (
    <main style={{ padding: "120px 20px 60px", minHeight: "100vh" }}>
      <section className="section" id="products">
        <div className="section-header">
          <p className="section-label">Our Collection</p>
          <h2 className="section-title">Premium Selections</h2>
          <div className="gold-line" aria-hidden="true" />
        </div>
        <ProductGrid products={PRODUCTS} />
      </section>
    </main>
  );
}
""",
    "showcase": """
import ShowcaseScroller from "@/components/ShowcaseScroller";

export const metadata = {
  title: "Showcase | NutsHub"
};

export default function ShowcasePage() {
  return (
    <main style={{ padding: "100px 0 60px", minHeight: "100vh" }}>
      <ShowcaseScroller />
    </main>
  );
}
""",
    "gift-box": """
import GiftBoxBuilder from "@/components/GiftBoxBuilder";

export const metadata = {
  title: "Custom Gift Box | NutsHub"
};

export default function GiftBoxPage() {
  return (
    <main style={{ padding: "100px 20px 60px", minHeight: "100vh" }}>
      <section className="section" id="builder">
        <div className="section-header">
          <p className="section-label">Make it Special</p>
          <h2 className="section-title">Custom Gift Box</h2>
          <div className="gold-line" aria-hidden="true" />
        </div>
        <GiftBoxBuilder />
      </section>
    </main>
  );
}
""",
    "about": """
export const metadata = {
  title: "About Us | NutsHub"
};

export default function AboutPage() {
  return (
    <main style={{ padding: "120px 20px 60px", minHeight: "100vh" }}>
      <section className="section" id="about">
        <div className="section-header">
          <p className="section-label">Our Heritage</p>
          <h2 className="section-title">The NutsHub Story</h2>
          <div className="gold-line" aria-hidden="true" />
        </div>
        <div className="about-content" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", fontSize: "1.1rem" }}>
          <p>
            Established in Panathur, Bangalore, NutsHub brings you the world's finest
            dry fruits, nuts, and exotic spices. Our commitment to quality ensures that
            every bite delivers crunch, flavor, and immense health benefits.
          </p>
          <p style={{ marginTop: "20px" }}>
            We source directly from premium global orchards to ensure that our customers
            always receive the most natural, unadulterated products available.
          </p>
        </div>
      </section>
    </main>
  );
}
""",
    "why-us": """
import SnackQuiz from "@/components/SnackQuiz";
import InteractiveCashew from "@/components/InteractiveCashew";

export const metadata = {
  title: "Why Choose Us | NutsHub"
};

export default function WhyUsPage() {
  return (
    <main style={{ padding: "120px 20px 60px", minHeight: "100vh" }}>
      <section className="section" id="features">
        <div className="section-header">
          <p className="section-label">Why Us</p>
          <h2 className="section-title">The Premium Difference</h2>
          <div className="gold-line" aria-hidden="true" />
        </div>
        <InteractiveCashew />
        <div style={{ marginTop: "60px" }}>
          <SnackQuiz />
        </div>
      </section>
    </main>
  );
}
""",
    "reviews": """
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata = {
  title: "Customer Reviews | NutsHub"
};

export default function ReviewsPage() {
  return (
    <main style={{ padding: "120px 20px 60px", minHeight: "100vh" }}>
      <section className="section" id="testimonials">
        <div className="section-header">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What They Say</h2>
          <div className="gold-line" aria-hidden="true" />
        </div>
        <TestimonialCarousel />
      </section>
    </main>
  );
}
""",
    "faq": """
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "FAQ | NutsHub"
};

export default function FAQPage() {
  return (
    <main style={{ padding: "120px 20px 60px", minHeight: "100vh" }}>
      <section className="section" id="faq">
        <div className="section-header">
          <p className="section-label">Support</p>
          <h2 className="section-title">Common Questions</h2>
          <div className="gold-line" aria-hidden="true" />
        </div>
        <FAQAccordion />
      </section>
    </main>
  );
}
""",
    "contact": """
export const metadata = {
  title: "Contact Us | NutsHub"
};

export default function ContactPage() {
  return (
    <main style={{ padding: "120px 20px 60px", minHeight: "100vh" }}>
      <section className="section" id="contact" style={{ textAlign: "center" }}>
        <div className="section-header">
          <p className="section-label">Reach Out</p>
          <h2 className="section-title">Visit Our Store</h2>
          <div className="gold-line" aria-hidden="true" />
        </div>
        <div style={{ maxWidth: "600px", margin: "0 auto", background: "var(--surface-900)", padding: "40px", borderRadius: "12px", border: "1px solid var(--color-border)" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "var(--color-accent)" }}>NutsHub Panathur</h3>
          <p>Panathur Main Road, Bangalore, Karnataka</p>
          <p style={{ marginTop: "10px" }}>Phone: +91 98765 43210</p>
          <p>Email: hello@nutshub.in</p>
          
          <button className="btn-primary" style={{ marginTop: "30px", padding: "15px 30px" }}>
            Get Directions
          </button>
        </div>
      </section>
    </main>
  );
}
"""
}

base_dir = "/Users/hrishi/Desktop/nutshub/src/app"

for route, content in pages.items():
    route_dir = os.path.join(base_dir, route)
    with open(os.path.join(route_dir, "page.js"), "w") as f:
        f.write(content.strip() + "\\n")

print("Created 8 page routes successfully.")
