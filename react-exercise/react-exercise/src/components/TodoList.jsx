import { useState } from "react";

// Exercise 2: To-Do List
// Concepts: array state, adding/removing items, mapping with keys, toggling booleans

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn useState", completed: true },
    { id: 2, text: "Learn useEffect", completed: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(), // simple unique id
      text: input.trim(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>To-Do List</h2>

        <form onSubmit={addTodo} style={styles.form}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>
            Add
          </button>
        </form>

        {todos.length === 0 && <p style={styles.empty}>No tasks yet.</p>}

        <ul style={styles.list}>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
              <span
                onClick={() => toggleComplete(todo.id)}
                style={{
                  ...styles.text,
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#9ca3af" : "#111827",
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={styles.deleteButton}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
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
    padding: "28px",
    width: "380px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  title: { margin: "0 0 16px 0", color: "#111827" },
  form: { display: "flex", gap: "8px", marginBottom: "16px" },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    outline: "none",
  },
  addButton: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
  list: { listStyle: "none", padding: 0, margin: 0 },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #f3f4f6",
  },
  text: { cursor: "pointer", flex: 1 },
  deleteButton: {
    border: "none",
    background: "transparent",
    color: "#dc2626",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
  },
  empty: { color: "#9ca3af", fontStyle: "italic" },
};
