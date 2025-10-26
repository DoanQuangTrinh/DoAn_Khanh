// app/page.tsx

import { DetailTabs } from "@/components/products/DetailTabs";
import { ServiceDetailPage } from "@/components/products/ServiceDetailPage";

export default function ServicesPage() {
  return (
    <>
      <ServiceDetailPage />
      <DetailTabs />
    </>
  );
}
