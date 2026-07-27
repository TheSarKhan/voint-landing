import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("az");

/**
 * Azərbaycan dili kökdədir. Hər dilin öz root layout-u var (Next.js route
 * qrupları) ki, `<html lang>` statik və düzgün olsun.
 */
export default function AzLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="az">{children}</RootShell>;
}
