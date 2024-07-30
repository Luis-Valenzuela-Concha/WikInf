export default {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - WikInf",
    };
  },
  logo: <span>WikInf</span>,
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
};
