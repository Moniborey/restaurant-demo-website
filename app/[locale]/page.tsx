import Home from "@/components/pages/homepage/Home";
import { unstable_setRequestLocale } from "next-intl/server";

export default function pageHome({ params: { locale } }: { params: { locale: string}}) {

  unstable_setRequestLocale(locale);

  return <Home />
}
