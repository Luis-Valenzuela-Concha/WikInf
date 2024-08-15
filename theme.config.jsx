import Footer from "./components/ui/Footer";
import Logo from "./components/ui/Logo";

export default {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - WikInf",
    };
  },
  logo: <Logo />,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="WikInf" />
      <meta
        property="og:description"
        content="Información para estudiantes de Ingeniería Civil Informática de la Universidad de Concepción"
      />
      <link rel="icon" href="/assets/logo_wikinf.png" sizes="any" />
    </>
  ),
  gitTimestamp: (data) => (
    <>
      Última actualización{" "}
      {new Date(data?.timestamp).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </>
  ),
  search: {
    placeholder: "Buscar información...",
    error: "Ocurrió un error inesperado",
    emptyResult: () => (
      <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        No se encontraron resultados
      </span>
    ),
  },
  docsRepositoryBase:
    "https://github.com/Luis-Valenzuela-Concha/WikInf/tree/main",
  editLink: {
    text: "Constribuye a esta página →",
  },
  feedback: {
    content: null,
  },
  toc: {
    title: "En esta página",
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema",
      };
    },
  },
  footer: {
    text: <Footer />,
  },
};
