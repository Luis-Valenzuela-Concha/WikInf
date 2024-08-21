import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image unoptimized src="/assets/logo_wikinf.png" width={30} height={30} />
      <span
        style={{ marginLeft: ".4em", fontSize: "1.5em", fontWeight: "600" }}
      >
        WikInf
      </span>
    </>
  );
}
