import { useNavigate } from "react-router-dom";
import "./welcome.css";
import imgLateral from "../assets/Resourses/img-lateral.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <main className="welcome-container">
        <section className="welcome-left">
          <div className="brand">
            <div className="logo">CF</div>
            <div>
              <h1>FrontMind <span>AI</span></h1>
              <p>Framework de Optimización Frontend basado en métricas ISO/IEC 25010</p>
            </div>
          </div>

          <h2>Audita. Optimiza. Mejora.</h2>

          <p className="description">
            Convierte interfaces generadas por IA en experiencias web de alta calidad.
          </p>

          <div className="actions">
            <button className="primary-btn" onClick={() => navigate("/analysis")}>Iniciar análisis →</button>
            <button className="secondary-btn" onClick={() => navigate("/dashboard")}>Ver cómo funciona</button>
          </div>
        </section>

        <section className="welcome-right">
          <div className="image-container">
            <img src={imgLateral} alt="FrontMind AI" className="hero-image" />
          </div>
        </section>
      </main>

      <section className="features">
        <div>◈ ISO/IEC 25010</div>
        <div>▣ Análisis automático</div>
        <div>⌘ Optimización inteligente</div>
        <div>▤ Reporte profesional</div>
      </section>
    </div>
  );
}
