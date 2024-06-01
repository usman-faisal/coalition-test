import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/RootLayout";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Coalition Test",
  description: "Coalition Frontend developer test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
