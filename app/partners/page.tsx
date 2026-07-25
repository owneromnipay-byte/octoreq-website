import PartnerHero from "@/components/partners/PartnerHero";
import PartnerBenefits from "@/components/partners/PartnerBenefits";
import PartnerProcess from "@/components/partners/PartnerProcess";
import PartnerAudience from "@/components/partners/PartnerAudience";
import PartnerDashboard from "@/components/partners/partnersDashboard";
import PartnerFAQ from "@/components/partners/partnersFAQ";
import PartnerCTA from "@/components/partners/PartnerCTA";

export default function PartnersPage() {
  return (
    <>
      <PartnerHero />
      <PartnerBenefits />
      <PartnerProcess />
      <PartnerAudience />
      <PartnerDashboard />
      <PartnerFAQ />
      <PartnerCTA />
    </>
  );
}