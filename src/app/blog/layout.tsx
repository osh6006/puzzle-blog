import Inner from "@/components/layouts/inner";
import Layout from "@/components/layouts/layout";
import React from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <Inner className="max-w-5xl ">{children}</Inner>
    </Layout>
  );
}
