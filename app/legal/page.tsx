import LegalCenterHero from "@/components/legal/LegalCenterHero";
import LegalStats from "@/components/legal/LegalStats";
import LegalCategory from "@/components/legal/LegalCategory";
import LegalContact from "@/components/legal/LegalContact";

import {
  legalCategories,
  legalPolicies,
} from "@/data/legal/legalCenter";

export const metadata = {
  title: "Legal & Trust Center | OCTOREQ",
  description:
    "Access OCTOREQ's legal policies, security documentation, compliance commitments, developer agreements, and enterprise documentation.",
};

export default function LegalCenterPage() {
  return (
    <>
      <LegalCenterHero />

      <LegalStats totalPolicies={legalPolicies.length} />

      {legalCategories.map((category) => (
        <LegalCategory
          key={category.id}
          title={category.title}
          description={getCategoryDescription(category.id)}
          policies={legalPolicies.filter(
            (policy) => policy.category === category.id
          )}
        />
      ))}

      <LegalContact />
    </>
  );
}

function getCategoryDescription(
  category: (typeof legalCategories)[number]["id"]
) {
  switch (category) {
    case "legal":
      return "Core legal agreements governing the use of OCTOREQ's platform, services, merchant accounts, and partner ecosystem.";

    case "security":
      return "Security, privacy, compliance, data protection, service availability, and enterprise trust documentation.";

    case "developer":
      return "Documentation governing access to OCTOREQ APIs, webhooks, integrations, and developer services.";

    default:
      return "";
  }
}