import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/navigation";
import Navbar from "@/components/navbar/Navbar";
import { dm_sans } from "@/fonts/font";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: {
    template: '%s | Creative Space',
    default: "Demo Restaurant Website from Creative Space"
  },
  description: "This is a demo restaurant website showcase for clients created by creative space",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  unstable_setRequestLocale(locale);
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${dm_sans.className} selection:bg-blue-300 overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
