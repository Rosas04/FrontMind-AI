import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";

const emptyReport = {
  globalScore: 0,
  status: "Sin análisis",
  summary: { errors: 0, warnings: 0, goodPractices: 0, opportunities: 0 },
  dimensions: {},
  type: "-",
  url: "",
  fileName: "",
};

export default function Dashboard() {
  const navigate = useNavigate();

  const report = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("auditReport") || "null") || emptyReport;
    } catch {
      return emptyReport;
    }
  }, []);

  const history = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("analysisHistory") || "[]");
    } catch {
      return [];
    }
  }, []);

  const lastItem = history[0];
  const sourceLabel = report.type === "url" ? report.url : report.fileName || (report.sourceLength ? "Código pegado" : "Sin proyecto");
  const dimensions = Object.entries(report.dimensions || {});
  const averageDimension = dimensions.length
    ? Math.round(dimensions.reduce((acc, [, value]) => acc + value, 0) / dimensions.length)
    : 0;

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Resumen general de la calidad de tu interfaz</p>
          </div>

          <button className="new-btn" onClick={() => navigate("/analysis")}>Nuevo análisis</button>
        </header>

        <section className="metric-grid">
          <div className="metric-card">
            <p>Puntaje global</p>
            <h2>{report.globalScore}<span>/100</span></h2>
            <small>{report.status}</small>
          </div>

          <div className="metric-card">
            <p>Promedio ISO 25010</p>
            <h2>{averageDimension}<span>/100</span></h2>
            <small>Dimensiones evaluadas</small>
          </div>

          <div className="metric-card">
            <p>Errores detectados</p>
            <h2>{report.summary?.errors || 0}</h2>
            <small>Críticos</small>
          </div>

          <div className="metric-card">
            <p>Advertencias</p>
            <h2>{report.summary?.warnings || 0}</h2>
            <small>Aspectos a mejorar</small>
          </div>
        </section>

        <section className="dashboard-content">
          <div className="quality-card">
            <h3>Métricas ISO/IEC 25010</h3>

            {dimensions.length > 0 ? (
              <div className="dimension-list">
                {dimensions.map(([name, value]) => (
                  <div className="dimension-row" key={name}>
                    <span>{name}</span>
                    <strong>{value}/100</strong>
                    <div className="dimension-bar"><i style={{ width: `${value}%` }}></i></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-dashboard">Aún no hay resultados. Crea un nuevo análisis para mostrar métricas reales.</div>
            )}
          </div>

          <div className="side-cards">
            <div className="project-card">
              <h3>Último proyecto analizado</h3>
              <div className="project-info">
                <div className="project-img"></div>
                <div>
                  <strong>{sourceLabel}</strong>
                  <p>{lastItem ? new Date(lastItem.createdAt).toLocaleString() : "Sin análisis registrado"}</p>
                </div>
              </div>
            </div>

            <div className="tech-card">
              <h3>Tipo de entrada</h3>
              <div className="tech-list">
                <span>{report.type === "url" ? "URL" : report.type === "zip" ? "ZIP" : report.type === "code" ? "Código" : "Sin datos"}</span>
                {report.sourceLength > 0 && <span>{report.sourceLength} caracteres</span>}
                {report.summary?.goodPractices > 0 && <span>{report.summary.goodPractices} buenas prácticas</span>}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
