import CounterApp from "./components/CounterApp";
import TodoList from "./components/TodoList";
import SimpleForm from "./components/SimpleForm";

// This page brings together all 3 exercises.
// Each exercise lives in its own component file inside src/components.

function App() {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", padding: "20px 0" }}>
      <h1 style={{ textAlign: "center", fontFamily: "Segoe UI, sans-serif", color: "#111827" }}>
        React Exercises — Infosys Internship Prep
      </h1>

      <CounterApp />
      <TodoList />
      <SimpleForm />
    </div>
  );
}

export default App;
