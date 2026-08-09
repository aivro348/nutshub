"use client";

import { useState } from "react";

const PREMADE_GIFT_BOXES = [
  {
    id: "premium-gift-box",
    name: "PREMIUM GIFT BOX",
    image: "/images/giftbox_premium.png",
    price: "₹1,499",
    desc: "Luxury wooden velvet box with jumbo almonds, W180 cashews, pistachios, and Medjool dates."
  },
  {
    id: "festival-hamper",
    name: "FESTIVAL HAMPER",
    image: "/images/giftbox_festival.png",
    price: "₹1,999",
    desc: "Grand festive mesh net hamper basket decorated with flowers & dry fruit pouches."
  },
  {
    id: "corporate-gift-pack",
    name: "CORPORATE GIFT PACK",
    image: "/images/giftbox_corporate.png",
    price: "₹2,250",
    desc: "Teal & gold executive chest with clear glass jars & scented tealight candles."
  },
  {
    id: "dry-fruits-combo",
    name: "DRY FRUITS COMBO",
    image: "/images/giftbox_combo.png",
    price: "₹1,850",
    desc: "9-compartment solid wooden tray filled with assorted premium nuts, figs & raisins."
  },
  {
    id: "nut-lovers-box",
    name: "NUT LOVERS BOX",
    image: "/images/giftbox_nut_lovers.png",
    price: "₹1,650",
    desc: "Royal magenta floral box packed with roasted pistachios, almonds, cashews & pecans."
  },
  {
    id: "dates-nuts-hamper",
    name: "DATES & NUTS HAMPER",
    image: "/images/giftbox_dates_nuts.png",
    price: "₹1,750",
    desc: "9-slot light wood hamper with Medjool dates, almonds, cashews & dried fruits."
  },
  {
    id: "mini-gift-pack",
    name: "MINI GIFT PACK",
    image: "/images/giftbox_mini.png",
    price: "₹899",
    desc: "4-compartment square box tied with a satin red ribbon filled with 4 popular dry fruits."
  },
  {
    id: "luxury-assorted-box",
    name: "LUXURY ASSORTED BOX",
    image: "/images/giftbox_luxury_assorted.png",
    price: "₹2,899",
    desc: "Royal blue floral inlay chest box with glass jars of gold cashews & majestic dates."
  }
];

const BOX_LAYOUTS = [
  { id: "2x2", name: "2 × 2 Classic Box", rows: 2, cols: 2, totalSlots: 4, desc: "4 equal compartments (1.0 kg total)" },
  { id: "2x3", name: "2 × 3 Royal Box", rows: 2, cols: 3, totalSlots: 6, desc: "6 compartments (1.5 kg total)" },
  { id: "3x3", name: "3 × 3 Imperial Box", rows: 3, cols: 3, totalSlots: 9, desc: "9 deluxe compartments (2.25 kg total)" }
];

export default function GiftBoxBuilder({ products }) {
  const [selectedLayout, setSelectedLayout] = useState(BOX_LAYOUTS[0]);
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [slots, setSlots] = useState(Array(4).fill(null));

  const handleLayoutChange = (layout) => {
    setSelectedLayout(layout);
    setSlots(Array(layout.totalSlots).fill(null));
    setActiveSlotIndex(0);
  };

  const assignProductToSlot = (product) => {
    let targetIndex = activeSlotIndex;
    
    if (slots[targetIndex] !== null) {
      const firstEmpty = slots.findIndex(s => s === null);
      if (firstEmpty !== -1) {
        targetIndex = firstEmpty;
      }
    }

    const updatedSlots = [...slots];
    updatedSlots[targetIndex] = product;
    setSlots(updatedSlots);

    const nextEmpty = updatedSlots.findIndex((s, idx) => idx > targetIndex && s === null);
    if (nextEmpty !== -1) {
      setActiveSlotIndex(nextEmpty);
    } else {
      const anyEmpty = updatedSlots.findIndex(s => s === null);
      if (anyEmpty !== -1) setActiveSlotIndex(anyEmpty);
    }
  };

  const clearSlot = (slotIndex, e) => {
    e.stopPropagation();
    const updatedSlots = [...slots];
    updatedSlots[slotIndex] = null;
    setSlots(updatedSlots);
    setActiveSlotIndex(slotIndex);
  };

  const totalWeightKg = (slots.filter(Boolean).length * 0.25).toFixed(2);
  const totalPrice = slots.reduce((acc, p) => {
    if (!p) return acc;
    const num = parseInt(p.price.replace(/[^\d]/g, ""), 10) || 0;
    return acc + Math.round(num);
  }, 150);

  const filledItems = slots
    .map((s, idx) => s ? `Slot ${idx + 1}: ${s.name} (250g)` : null)
    .filter(Boolean);

  const whatsappMsg = encodeURIComponent(
    `Hello NutsHub! I built a Custom Gift Box on your website:\n` +
    `📦 Layout: ${selectedLayout.name}\n` +
    `🌰 Contents:\n${filledItems.join("\n")}\n` +
    `⚖️ Total Weight: ${totalWeightKg} kg\n` +
    `💰 Estimated Price: ₹${totalPrice}\n` +
    `Please confirm my custom gift box order.`
  );

  return (
    <div style={{ maxWidth: "1250px", margin: "0 auto", color: "var(--color-text)" }}>
      
      {/* 🎁 SECTION 1: PRE-MADE GIFT BOXES SHOWCASE GRID */}
      <section style={{ marginBottom: "70px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: "#dfb76c", textTransform: "uppercase", letterSpacing: "2.5px", fontSize: "0.85rem", fontWeight: 700, margin: "0 0 6px" }}>
            READY-TO-ORDER CURATED SELECTIONS
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "#fff", margin: 0 }}>
            Luxury Gift Box Collection
          </h2>
          <div className="gold-line" aria-hidden="true" style={{ margin: "1rem auto", width: "60px", height: "3px", backgroundColor: "var(--color-accent)" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "30px"
        }}>
          {PREMADE_GIFT_BOXES.map((box) => (
            <div key={box.id} style={{
              background: "rgba(18, 12, 6, 0.85)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(223, 183, 108, 0.35)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.4s ease, border-color 0.4s ease"
            }}>
              <div>
                <div style={{ height: "240px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={box.image}
                    alt={`${box.name} - NutsHub`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.06)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(13, 9, 5, 0.85)",
                    border: "1px solid #dfb76c",
                    color: "#dfb76c",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "999px"
                  }}>
                    {box.price}
                  </span>
                </div>

                <div style={{ padding: "24px 20px 15px" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", letterSpacing: "1px", margin: "0 0 10px", textAlign: "center" }}>
                    {box.name}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", lineHeight: "1.5", textAlign: "center", margin: 0 }}>
                    {box.desc}
                  </p>
                </div>
              </div>

              <div style={{ padding: "0 20px 24px" }}>
                <a
                  href={`https://wa.me/919901844007?text=${encodeURIComponent(`Hello NutsHub! I would like to order the pre-made gift box: ${box.name} (${box.price}). Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: "block",
                    padding: "12px 20px",
                    borderRadius: "999px",
                    textAlign: "center",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    fontWeight: 700
                  }}
                >
                  Order via WhatsApp 💬
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠️ SECTION 2: CUSTOM INTERACTIVE GRID BUILDER */}
      <section style={{
        padding: "45px 30px",
        background: "rgba(18, 12, 6, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(223, 183, 108, 0.35)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: "#dfb76c", textTransform: "uppercase", letterSpacing: "2.5px", fontSize: "0.85rem", fontWeight: 700, margin: "0 0 6px" }}>
            CREATE YOUR OWN COMBINATION
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "#fff", margin: 0 }}>
            Custom Gift Box Builder
          </h2>
          <div className="gold-line" aria-hidden="true" style={{ margin: "1rem auto", width: "60px", height: "3px", backgroundColor: "var(--color-accent)" }} />
        </div>

        {/* 1. LAYOUT SELECTOR TABS (2x2, 2x3, 3x3) */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h3 style={{ fontSize: "1.1rem", color: "#dfb76c", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px", fontWeight: 700 }}>
            Step 1: Choose Box Grid Layout
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
            {BOX_LAYOUTS.map((layout) => {
              const isActive = selectedLayout.id === layout.id;
              return (
                <button
                  key={layout.id}
                  onClick={() => handleLayoutChange(layout)}
                  style={{
                    padding: "16px 28px",
                    borderRadius: "var(--radius-md)",
                    border: isActive ? "2px solid #dfb76c" : "1px solid rgba(255,255,255,0.15)",
                    background: isActive ? "rgba(223, 183, 108, 0.15)" : "rgba(20, 15, 10, 0.6)",
                    color: isActive ? "#dfb76c" : "#fff",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textAlign: "left",
                    minWidth: "220px"
                  }}
                >
                  <div style={{ fontWeight: "700", fontSize: "1.05rem" }}>{layout.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>{layout.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. GRID PREVIEW & ORDER SUMMARY */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "start",
          marginBottom: "50px"
        }}>
          {/* VISUAL BOX COMPARTMENTS */}
          <div style={{
            background: "rgba(10, 7, 4, 0.9)",
            border: "2px solid #dfb76c",
            borderRadius: "var(--radius-lg)",
            padding: "25px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#dfb76c" }}>
                🎁 {selectedLayout.name} Preview
              </h4>
              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
                {slots.filter(Boolean).length} / {selectedLayout.totalSlots} Filled
              </span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${selectedLayout.cols}, 1fr)`,
              gap: "15px"
            }}>
              {slots.map((item, idx) => {
                const isActive = activeSlotIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveSlotIndex(idx)}
                    style={{
                      height: "120px",
                      borderRadius: "var(--radius-md)",
                      border: isActive ? "2px solid #dfb76c" : item ? "1px solid rgba(223, 183, 108, 0.4)" : "2px dashed rgba(255,255,255,0.2)",
                      background: isActive ? "rgba(223, 183, 108, 0.12)" : item ? "rgba(30, 20, 10, 0.8)" : "rgba(15, 10, 5, 0.4)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      padding: "8px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <span style={{
                      position: "absolute",
                      top: "6px",
                      left: "8px",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      color: isActive ? "#dfb76c" : "rgba(255,255,255,0.5)"
                    }}>
                      #{idx + 1}
                    </span>

                    {item ? (
                      <>
                        <button
                          onClick={(e) => clearSlot(idx, e)}
                          title="Remove item"
                          style={{
                            position: "absolute",
                            top: "4px",
                            right: "6px",
                            background: "rgba(255,0,0,0.6)",
                            border: "none",
                            color: "#fff",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                            fontSize: "0.75rem",
                            cursor: "pointer",
                            lineHeight: "1"
                          }}
                        >
                          ✕
                        </button>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "45px", height: "45px", objectFit: "contain", marginBottom: "4px" }}
                        />
                        <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "#fff", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "90%" }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "#dfb76c" }}>{item.price} (250g)</div>
                      </>
                    ) : (
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "1.5rem", color: isActive ? "#dfb76c" : "rgba(255,255,255,0.3)" }}>+</div>
                        <div style={{ fontSize: "0.75rem", color: isActive ? "#dfb76c" : "rgba(255,255,255,0.4)" }}>
                          {isActive ? "Active Slot" : "Empty Slot"}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ORDER SUMMARY SIDEBAR */}
          <div style={{
            background: "rgba(18, 12, 6, 0.9)",
            border: "1px solid rgba(223, 183, 108, 0.3)",
            borderRadius: "var(--radius-lg)",
            padding: "25px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}>
            <h4 style={{ margin: "0 0 15px", fontSize: "1.2rem", color: "#fff" }}>Box Summary</h4>
            
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "15px", marginBottom: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.9rem" }}>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>Selected Layout:</span>
                <span style={{ color: "#fff", fontWeight: "600" }}>{selectedLayout.name}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.9rem" }}>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>Total Weight:</span>
                <span style={{ color: "#fff", fontWeight: "600" }}>{totalWeightKg} kg</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.1rem", fontWeight: "700", marginTop: "12px", color: "#dfb76c" }}>
                <span>Estimated Total:</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.4", marginBottom: "20px" }}>
              * Includes luxury wooden box packaging & satin ribbon wrapping. Instant delivery inside Bangalore.
            </p>

            <a
              href={`https://wa.me/919901844007?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: "block",
                padding: "16px",
                borderRadius: "999px",
                textAlign: "center",
                fontSize: "0.95rem",
                fontWeight: "700",
                textDecoration: "none"
              }}
            >
              Order Custom Box via WhatsApp 💬
            </a>
          </div>
        </div>

        {/* 3. PRODUCT PICKER FOR ACTIVE SLOT */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#dfb76c", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 5px", fontWeight: 700 }}>
              Step 2: Tap Any Dry Fruit to Fill Slot #{activeSlotIndex + 1}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", margin: 0 }}>
              Each slot holds 250g of fresh handpicked nuts or dry fruits.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "15px",
            maxHeight: "500px",
            overflowY: "auto",
            paddingRight: "5px"
          }}>
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => assignProductToSlot(product)}
                style={{
                  background: "rgba(15, 10, 5, 0.7)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#dfb76c";
                  e.currentTarget.style.background = "rgba(223, 183, 108, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(15, 10, 5, 0.7)";
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "65px", height: "65px", objectFit: "contain", margin: "0 auto 8px" }}
                />
                <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {product.name}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#dfb76c", fontWeight: "600", marginTop: "2px" }}>
                  {product.price}
                </div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>250g portion</div>
                <button
                  style={{
                    marginTop: "8px",
                    width: "100%",
                    padding: "6px",
                    borderRadius: "4px",
                    border: "none",
                    background: "rgba(223, 183, 108, 0.2)",
                    color: "#dfb76c",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                >
                  + Add to Slot #{activeSlotIndex + 1}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
