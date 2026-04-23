'use client'
import Link from "next/link";

type Props = {
  className?: string;
  content?: string
};

export default function ContactBtn({ className, content}: Props) {
  return (
    <Link href={'#'} target="_blank"
      className={`text-xl bg-cta px-6 py-4 shadow-xl !font-inter font-semibold tracking-tight rounded-xl hover:shadow-xl ${className}`}
    >
      {content ? content : "Beratungsgespräch vereinbaren"}
    </Link>
  );
}
