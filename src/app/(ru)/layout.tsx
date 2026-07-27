import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("ru");

export default function RuLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="ru">{children}</RootShell>;
}
