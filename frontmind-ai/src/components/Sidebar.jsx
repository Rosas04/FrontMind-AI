<<<<<<< HEAD
import "./Sidebar.css";

const steps = [
  { number: 1, title: "Entrada", text: "Defina la fuente de análisis." },
  { number: 2, title: "Captura", text: "Captura automática de la interfaz." },
  { number: 3, title: "HTML", text: "HTML real o replicado." },
  { number: 4, title: "Evaluación", text: "Análisis ISO/IEC 25010." },
  { number: 5, title: "Reporte técnico", text: "Generación del informe." },
];

export default function Sidebar({ activeStep = 1 }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>FrontMind AI</h1>
        <p>Evaluación frontend multimodal</p>
      </div>

      <div className="step-list">
        {steps.map((step) => (
          <div
            className={`step-item ${activeStep === step.number ? "active" : ""}`}
            key={step.number}
          >
            <div className="step-number">{step.number}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="version">
        <strong>FrontMind AI v1.0.0</strong>
        <span>© 2026</span>
      </div>
=======
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div>
          <h2>
            FrontMind <span>AI</span>
          </h2>
          <p>Framework de optimización</p>
        </div>
      </div>

      <nav className="menu">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/analysis">Análisis</NavLink>
        <NavLink to="/preview">Vista previa</NavLink>
        <NavLink to="/results">Métricas ISO 25010</NavLink>
      </nav>
>>>>>>> ed3ee1def73026f26502dae1b6733b6107c5c555
    </aside>
  );
}