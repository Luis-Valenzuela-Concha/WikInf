import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row max-sm:items-center gap-2">
      <Image
        src="/assets/logo_cainf.png"
        width={60}
        height={60}
        unoptimized
        alt="Logo Cainf"
      />
      <div className="flex flex-col justify-center gap-2 max-sm:items-center">
        <span className="text-sm text-center sm:text-left">
          Centro de alumnos de Ingeniería Civil Informática - 2024
        </span>
        <span className="text-xs text-center sm:text-left">
          Universidad de Concepción
        </span>
      </div>
    </div>
  );
}
