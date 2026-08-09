"use client";

export default function InteractiveCashew() {
  return (
    <div 
      className="hero-viewer-container" 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, oklch(0.72 0.14 75 / 0.08) 0%, transparent 70%)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        maxHeight: '400px',
        overflow: 'hidden'
      }}
    >
      <img 
        src="images/cashews.png" 
        alt="Premium Whole Cashews" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          maxHeight: '320px',
          filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.6))'
        }}
      />
    </div>
  );
}
