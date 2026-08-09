"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/products";

export default function SnackQuiz({ products = PRODUCTS }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ flavor: "", goal: "" });
  const [result, setResult] = useState(null);

  const safeProducts = (products && products.length > 0) ? products : PRODUCTS;

  const questions = [
    {
      id: "flavor",
      title: "What flavor profile do you prefer?",
      options: [
        { label: "Caramel Sweet & Rich", val: "sweet" },
        { label: "Mild Buttery & Savory", val: "buttery" },
        { label: "Crunchy & Nutty", val: "nutty" }
      ]
    },
    {
      id: "goal",
      title: "What is your primary health goal?",
      options: [
        { label: "Energy & Post-Workout Boost", val: "energy" },
        { label: "Brain Power & Heart Health", val: "brain" },
        { label: "High Fiber & Digestion", val: "fiber" }
      ]
    }
  ];

  const handleSelect = (val) => {
    const nextAnswers = { ...answers, [questions[step].id]: val };
    setAnswers(nextAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Find matching nut product
      let match = safeProducts[0]; // fallback
      if (nextAnswers.flavor === "sweet") {
        match = nextAnswers.goal === "fiber" 
          ? safeProducts.find(p => p.id.includes("fig")) 
          : safeProducts.find(p => p.id.includes("date"));
      } else if (nextAnswers.flavor === "buttery") {
        match = nextAnswers.goal === "brain" 
          ? safeProducts.find(p => p.id.includes("walnut")) 
          : safeProducts.find(p => p.id.includes("cashew"));
      } else if (nextAnswers.flavor === "nutty") {
        match = nextAnswers.goal === "brain" 
          ? safeProducts.find(p => p.id.includes("walnut")) 
          : safeProducts.find(p => p.id.includes("pista"));
      }
      setResult(match || safeProducts[0]);
      setStep(step + 1);
    }
  };


  const resetQuiz = () => {
    setStep(0);
    setAnswers({ flavor: "", goal: "" });
    setResult(null);
  };

  const progressPercent = (step / (questions.length)) * 100;

  return (
    <div className="quiz-card reveal">
      {step < questions.length ? (
        <div>
          <div className="quiz-progress-bar" aria-hidden="true">
            <div className="quiz-progress-inner" style={{ width: `${progressPercent}%` }} />
          </div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 700 }}>
            Question {step + 1} of {questions.length}
          </span>
          <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', marginBlockStart: 'var(--space-xs)', textWrap: 'balance' }}>
            {questions[step].title}
          </h3>
          <div className="quiz-options">
            {questions[step].options.map((opt, i) => (
              <button key={i} className="quiz-option-btn" onClick={() => handleSelect(opt.val)}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-result-wrap">
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 700 }}>
            Your Match Found!
          </span>
          <h4 style={{ marginBlockStart: 'var(--space-xs)' }}>{result.name}</h4>
          <img src={result.image} alt={result.name} />
          <p>{result.desc}</p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={resetQuiz} style={{ padding: '0.8rem 2rem', fontSize: '0.9rem' }}>
              <span>Retake Matcher</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
