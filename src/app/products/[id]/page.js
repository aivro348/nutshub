import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductVisual from "@/components/ProductVisual";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    id: p.id
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return {
      title: "Product Not Found — NutsHub",
      description: "The requested dry fruit product was not found in our catalog."
    };
  }
  return {
    title: `${product.name} — Premium Health Benefits & Pricing | NutsHub`,
    description: `Learn about the protein, calcium, and medical benefits of ${product.name}. Buy premium dry fruits in Bangalore.`,
    keywords: `${product.name}, benefits, price, Bangalore, dry fruits`
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-950)',
        color: 'var(--color-text)',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Product Not Found</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>The product you are looking for does not exist in our catalog.</p>
        <Link 
          href="/" 
          style={{
            padding: '0.8rem 2rem',
            background: 'var(--color-accent)',
            color: 'var(--color-bg)',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 700,
            textDecoration: 'none'
          }}
        >
          Return to Store
        </Link>
      </div>
    );
  }

  // Settle similar products in the same category
  const similarProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const cleanPrice = product.price ? product.price.replace(/[^\d.]/g, '') : '0';

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://nutshub.online/${product.image}`,
    "description": product.fullDesc || product.desc,
    "sku": product.code,
    "brand": {
      "@type": "Brand",
      "name": "NutsHub"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://nutshub.online/products/${product.id}`,
      "priceCurrency": "INR",
      "price": cleanPrice,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "NutsHub"
      }
    }
  };

  return (
    <div style={{ background: 'var(--surface-950)', minHeight: '100vh', color: 'var(--color-text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* STATIC TOP HEADER */}
      <header style={{
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--surface-950)',
        padding: '1.25rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link 
            href="/" 
            style={{
              fontFamily: 'var(--font-fancy)',
              fontSize: '1.8rem',
              fontWeight: 900,
              textDecoration: 'none',
              color: 'var(--color-text)',
              letterSpacing: '0.05em'
            }}
          >
            Nuts<span style={{ color: 'var(--color-accent)', fontWeight: 300 }}>Hub</span>
          </Link>
          <Link 
            href="/" 
            style={{
              textDecoration: 'none',
              color: 'var(--color-accent)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            ← Back to Store
          </Link>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* BREADCRUMB */}
        <nav style={{ marginBottom: '2.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ textTransform: 'capitalize' }}>{product.category.replace("-", " ")}</span>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ color: 'var(--color-accent)' }}>{product.name}</span>
        </nav>

        {/* DETAILS SECTION */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', marginBottom: '4rem' }}>
          {/* IMAGE PANEL */}
          <div style={{
            background: 'radial-gradient(circle at center, oklch(0.72 0.14 75 / 0.06) 0%, transparent 80%)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'fit-content'
          }}>
            <ProductVisual product={product} />
          </div>

          {/* INFORMATION PANEL */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-accent)',
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              Product Code: {product.code}
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem', lineHeight: '1.2' }}>
              {product.name}
            </h1>
            
            {/* PRICING ROW */}
            <div style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'var(--color-accent)',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--color-border)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'baseline',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <span>{product.price} <small style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>/ {product.unit}</small></span>
              {product.priceKg && product.priceKg !== product.price && (
                <span style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>
                  (1 Kg: {product.priceKg})
                </span>
              )}
            </div>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              {product.fullDesc || product.desc}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                type="button"
                style={{
                  padding: '1rem 2.5rem',
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Inquire & Order
              </button>
              <Link 
                href="/"
                style={{
                  padding: '1rem 2rem',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                Explore More Products
              </Link>
            </div>
          </div>
        </div>

        {/* NUTRITIONAL & MEDICAL DETAILS BLOCK */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
          
          {/* NUTRITIONAL INFO */}
          {product.nutrition && (
            <div style={{
              background: 'var(--surface-900)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
                🔬 Nutritional Profile (Per 100g)
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.75rem 0', color: 'var(--color-text-muted)' }}>💪 Protein</td>
                    <td style={{ padding: '0.75rem 0', fontWeight: 700, textAlign: 'right' }}>{product.nutrition.protein || "Trace"}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.75rem 0', color: 'var(--color-text-muted)' }}>🦴 Calcium</td>
                    <td style={{ padding: '0.75rem 0', fontWeight: 700, textAlign: 'right' }}>{product.nutrition.calcium || "Trace"}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem 0', color: 'var(--color-text-muted)' }}>🩸 Iron</td>
                    <td style={{ padding: '0.75rem 0', fontWeight: 700, textAlign: 'right' }}>{product.nutrition.iron || "Trace"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* MEDICAL USES & EATING TIP */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {product.medicalUses && (
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-accent)' }}>
                  ❤️ Scientific & Medical Applications
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  {product.medicalUses}
                </p>
              </div>
            )}

            {product.eatingAdvice && (
              <div style={{
                background: 'rgba(223, 183, 108, 0.05)',
                borderLeft: '4px solid var(--color-accent)',
                padding: '1.25rem',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
              }}>
                <h4 style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                  💡 Health Consumption Advice
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  {product.eatingAdvice}
                </p>
              </div>
            )}
          </div>

          {/* PRIMARY BENEFITS */}
          {product.benefits && (
            <div style={{
              background: 'var(--surface-900)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-accent)' }}>
                🌟 Key Body & Health Benefits
              </h3>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--color-text-muted)', lineHeight: '2' }}>
                {product.benefits.map((benefit, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'var(--color-text)' }}>{benefit}</strong> — targeted support for daily metabolic function.
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* RELATED PRODUCTS */}
        {similarProducts.length > 0 && (
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, marginBottom: '2.5rem' }}>
              Similar Products in <span style={{ color: 'var(--color-accent)' }}>{product.category.replace("-", " ")}</span>
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}>
              {similarProducts.map((p) => (
                <Link 
                  href={`/products/${p.id}`} 
                  key={p.id}
                  style={{
                    textDecoration: 'none',
                    background: 'var(--surface-900)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    color: 'var(--color-text)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ height: '140px', width: '100%', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-800)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                      <ProductVisual product={p} />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{p.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineClamp: 2 }}>{p.desc}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>{p.price}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{p.unit}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--color-border)', padding: '3rem 2rem', marginTop: '5rem', background: 'var(--surface-900)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            © 2026 NutsHub. All rights reserved. Panathur, Bangalore.
          </p>
        </div>
      </footer>
    </div>
  );
}
