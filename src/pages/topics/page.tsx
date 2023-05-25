import {Accordion} from "@components/accordion/Accordion";
import "../shared.css";

const topics = [
  {
    title: "1. Patrones de Diseño",
    content: ["Container/Presentation", "Single Responsibility Principle", "Folder Scaffolding"],
    link: "/temario/patrones_diseño"
  },
  {
    title: "2. Router & Providers",
    content: ["Rutas protegidas vs Rutas Públicas", "Outlet & Layout Design", "Error Handler & 404 pages"],
    link: "/temario/router_providers"
  },
  {
    title: "3. Code Splitting",
    content: ["Lazy loading", "Suspense", "Dynamic importing"],
    link: "/temario/code_splitting"
  },
  {
    title: "4. Styled Components",
    content: ["Basic Styling", "Props & Condicionales", "GlobalCSS"],
    link: "/temario/styled_components"
  },
  {
    title: "5. HTTP requests",
    content: ["Controller Object", "React Query"],
    link: "/temario/http_requests"
  }
];

const Topics = () => {
  return (
    <section>
      <h2>Temario:</h2>
      <Accordion data={topics }/>
    </section>
  )
}

export default Topics;