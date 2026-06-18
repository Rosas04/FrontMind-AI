# FrontMind-AI

Sistema inteligente de análisis de interfaces de usuario con IA.

## Descripción

FrontMind-AI es una aplicación que combina React en el frontend con agentes Python en el backend para analizar y mejorar interfaces de usuario.

## Estructura del Proyecto

```
.
├── frontmind-ai/              # Frontend React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
├── vite.config.js            # Configuración Vite (con Tailwind CSS)
├── package.json              # Dependencias del proyecto
└── eslint.config.js          # Configuración ESLint
```

## Instalación y Uso

### Frontend (React + Vite)

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Backend (Python Agents)

Ver `frontmind-ai/frontmind-agents/` para la configuración del backend.

## Notas Importantes

- El proyecto usa Vite con React y Tailwind CSS
- ESLint está configurado para validar el código
- La carpeta `venv` está ignora en `.gitignore`
