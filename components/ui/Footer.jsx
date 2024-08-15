import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row max-sm:items-center gap-2">
      <Image src="/assets/logo_cainf.png" width={60} height={60} unoptimized />
      <div className="flex flex-col justify-center gap-2 max-sm:items-center">
        <span className="text-sm">
          Centro de alumnos de Ingeniería Civil Informática - 2024
        </span>
        <span className="text-xs">Universidad de Concepción</span>
      </div>
    </div>
  );
}
