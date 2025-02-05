import Link from "next/link";

interface Props {
  className: string;
}

export default function QuickLinks({ className }: Props) {
  return (
    <nav className={className}>
      <Link href={"/"} className="hover:underline text-white">
        {" "}
        Política de privacidad
      </Link>
      <Link href={"/"} className="hover:underline text-white">
        {" "}
        Quiénes somos
      </Link>
    </nav>
  );
}
