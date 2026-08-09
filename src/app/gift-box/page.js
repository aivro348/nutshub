import GiftBoxBuilder from "@/components/GiftBoxBuilder";
import PageHeroHeader from "@/components/PageHeroHeader";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Customized Dry Fruit Gift Boxes | NutsHub Bangalore",
  description: "Build custom 2x2, 2x3, and 3x3 grid wooden dry fruit gift boxes for Diwali, weddings, and corporate gifting with instant WhatsApp ordering."
};

export default function GiftBoxPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / GIFT BOX"
        subtitle="MAKE IT SPECIAL"
        title="Custom Gift Box Builder"
        bgImage="/images/hero_gift_box.png"
      />

      <section className="section" id="builder" style={{ padding: "60px 20px" }}>
        <GiftBoxBuilder products={PRODUCTS} />
      </section>
    </main>
  );
}