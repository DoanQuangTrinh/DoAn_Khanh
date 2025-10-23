// app/page.tsx

import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceHighlights } from "@/components/services/ServiceHighlights";

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceHighlights />
    </>
  );
}
