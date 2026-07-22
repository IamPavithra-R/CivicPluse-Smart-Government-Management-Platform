import { useState } from "react";

// Exercise 1: Counter App
// Concepts: useState, event handlers, conditional styling

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Counter App</h2>

        <p
          style={{
            ...styles.count,
            color: count > 0 ? "#16a34a" : count < 0 ? "#dc2626" : "#111827",
          }}
        >
          {count}
        </p>

        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={decrement}>
            − Decrement
          </button>
          <button style={styles.resetButton} onClick={reset}>
            Reset
          </button>
          <button style={styles.button} onClick={increment}>
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "32px",
    textAlign: "center",
    width: "320px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  title: { margin: "0 0 16px 0", color: "#111827" },
  count: { fontSize: "48px", fontWeight: "bold", margin: "8px 0 24px 0" },
  buttonRow: { display: "flex", gap: "8px", justifyContent: "center" },
  button: {
    padding: "10px 14px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
  resetButton: {
    padding: "10px 14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    background: "#f3f4f6",
    color: "#374151",
    fontWeight: 600,
    cursor: "pointer",
  },
};
