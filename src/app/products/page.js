import ProductGrid from "@/components/ProductGrid";
import PageHeroHeader from "@/components/PageHeroHeader";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Premium Dry Fruits Products | NutsHub Bangalore",
  description: "Explore 100+ jumbo almonds, W180 cashews, Iranian pistachios, Medjool dates, organic seeds, and exotic dried fruits at NutsHub."
};

export default function ProductsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--surface-950)" }}>
      {/* LUXURY HERO HEADER BANNER */}
      <PageHeroHeader
        breadcrumb="HOME / PRODUCTS"
        subtitle="OUR COLLECTION"
        title="Premium Selections"
        bgImage="/images/hero_products.png"
      />

      <section className="section" id="products" style={{ padding: "60px 20px" }}>
        <ProductGrid products={PRODUCTS} />
      </section>
    </main>
  );
}