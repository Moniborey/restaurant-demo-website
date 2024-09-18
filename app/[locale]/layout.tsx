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
    template: '%s | webdash',
    default: "restaurant website from webdash"
  },
  description: "This is a demo restaurant website showcase for clients created by webdash",
  keywords:['restaurant','website'],
  metadataBase: new URL('https://restaurant-demo-website.vercel.app'),
  openGraph: {
    title: 'restaurant website from webdash',
    description: 'This is a demo restaurant website showcase for clients created by webdash',
    url: 'https://restaurant-demo-website.vercel.app',
    siteName: 'restaurant website from webdash',
    images: ['restaurantdemowebsite.png'],
    type: 'website',
  },
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
