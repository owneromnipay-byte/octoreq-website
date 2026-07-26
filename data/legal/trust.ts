import { LegalDocument } from "@/types/legal";

const trust: LegalDocument = {
  title: "Trust Center",
  description:
    "The OCTOREQ Trust Center provides an overview of our commitments to security, privacy, compliance, operational reliability, and responsible platform governance.",
  version: "1.0",
  effectiveDate: "July 2026",
  lastUpdated: "July 2026",

  sections: [
        {
      id: "our-commitment",
      title: "1. Our Commitment",

      blocks: [
        {
          type: "paragraph",
          content:
            "Trust is fundamental to every payment processed through the OCTOREQ platform. We recognize that merchants, partners, developers, financial institutions, and customers rely on us to provide secure, reliable, and transparent payment infrastructure that supports their businesses and protects the information entrusted to us.",
        },

        {
          type: "paragraph",
          content:
            "Our approach to trust is built upon security, privacy, compliance, operational resilience, and continuous improvement. These principles guide how we design, operate, and enhance our platform while supporting responsible innovation across the digital payments ecosystem.",
        },

        {
          type: "paragraph",
          content:
            "Trust is not achieved through technology alone. It is reinforced through strong governance, disciplined operational practices, risk management, accountability, and clear communication with our customers, partners, and stakeholders.",
        },

        {
          type: "paragraph",
          content:
            "This Trust Center provides a high-level overview of OCTOREQ's security practices, privacy commitments, compliance framework, operational standards, and governance principles. Detailed information is available throughout our legal documentation and supporting policies.",
        },
      ],
    },

    {
      id: "security",
      title: "2. Security",

      blocks: [
        {
          type: "paragraph",
          content:
            "Security is integrated into every stage of the OCTOREQ platform lifecycle, from system architecture and software development to infrastructure operations and ongoing service management. Our objective is to maintain a resilient environment that protects customer data, payment operations, and platform availability.",
        },

        {
          type: "paragraph",
          content:
            "Our security program is supported by multiple layers of technical and organizational controls designed to reduce operational risk and strengthen the overall security posture of the platform.",
        },

        {
          type: "paragraph",
          content:
            "Our security practices include:",
        },

        {
          type: "list",
          content: [
            "encrypted communications using industry-standard protocols;",
            "protection of sensitive information through appropriate encryption and access controls;",
            "role-based access management and least-privilege administration;",
            "continuous infrastructure and application monitoring;",
            "security logging and audit capabilities;",
            "secure software development lifecycle practices;",
            "vulnerability assessment and remediation processes;",
            "incident detection, response, and recovery procedures;",
            "business continuity and disaster recovery planning; and",
            "ongoing evaluation and improvement of security controls.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Security is continuously reviewed and strengthened as technology, operational risks, and regulatory expectations evolve. While no platform can eliminate every possible risk, OCTOREQ is committed to maintaining security measures appropriate to the sensitivity of the services we provide.",
        },
      ],
    },

    {
      id: "privacy-data-protection",
      title: "3. Privacy & Data Protection",

      blocks: [
        {
          type: "paragraph",
          content:
            "Respect for privacy is an essential component of OCTOREQ's approach to building trusted financial infrastructure. We process Personal Data responsibly and implement policies and safeguards designed to support compliance with applicable data protection laws and recognized privacy principles.",
        },

        {
          type: "paragraph",
          content:
            "Our privacy program emphasizes lawful processing, transparency, data minimization, appropriate retention practices, and secure handling of Personal Data throughout its lifecycle.",
        },

        {
          type: "paragraph",
          content:
            "Our privacy commitments include:",
        },

        {
          type: "list",
          content: [
            "processing Personal Data only for legitimate and authorized purposes;",
            "implementing appropriate technical and organizational safeguards to protect Personal Data;",
            "supporting customers in fulfilling applicable data protection obligations where appropriate;",
            "maintaining clear privacy documentation describing our data handling practices;",
            "requiring confidentiality obligations for personnel with access to sensitive information;",
            "carefully assessing third-party service providers that may process Personal Data;",
            "retaining Personal Data only as long as reasonably necessary or legally required; and",
            "continuously reviewing privacy practices as legal and regulatory requirements evolve.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Additional information regarding our privacy practices, data processing responsibilities, and customer rights is available within our Privacy Policy and Data Processing Agreement.",
        },
      ],
    },
        {
      id: "compliance",
      title: "4. Compliance",

      blocks: [
        {
          type: "paragraph",
          content:
            "Compliance is a core component of OCTOREQ's governance framework. We are committed to operating our platform in accordance with applicable laws, regulatory requirements, payment network rules, and industry standards while supporting our customers in meeting their own compliance obligations.",
        },

        {
          type: "paragraph",
          content:
            "Our compliance program is designed to evolve alongside changing legal, regulatory, and operational requirements within the financial services and payments ecosystem.",
        },

        {
          type: "paragraph",
          content:
            "Our compliance practices include:",
        },

        {
          type: "list",
          content: [
            "maintaining policies supporting Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) compliance;",
            "supporting Know Your Customer (KYC) and business verification processes where applicable;",
            "cooperating with lawful requests from competent regulatory and governmental authorities;",
            "operating in accordance with applicable payment provider and banking partner requirements;",
            "maintaining internal governance, operational, and risk management policies;",
            "periodically reviewing compliance controls as regulatory expectations evolve;",
            "promoting ethical business conduct and accountability throughout our organization; and",
            "continuously improving compliance processes through monitoring, assessment, and operational reviews.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Compliance is an ongoing process rather than a one-time achievement. OCTOREQ regularly evaluates its policies, procedures, and operational controls to support responsible and sustainable business operations.",
        },
      ],
    },

    {
      id: "reliability-operations",
      title: "5. Reliability & Operations",

      blocks: [
        {
          type: "paragraph",
          content:
            "Reliable payment infrastructure is essential to the businesses that depend on OCTOREQ. We design and operate our platform with resilience, scalability, observability, and operational continuity in mind to support consistent service delivery.",
        },

        {
          type: "paragraph",
          content:
            "Operational resilience is supported through proactive monitoring, capacity planning, infrastructure redundancy, incident management, and continuous service optimization.",
        },

        {
          type: "paragraph",
          content:
            "Our operational practices include:",
        },

        {
          type: "list",
          content: [
            "continuous monitoring of critical systems and services;",
            "high-availability infrastructure where appropriate;",
            "capacity planning and performance optimization;",
            "automated alerting for operational anomalies;",
            "business continuity and disaster recovery planning;",
            "regular backup procedures and recovery testing;",
            "structured incident response and post-incident reviews;",
            "ongoing infrastructure maintenance and upgrades; and",
            "continuous investment in platform scalability and reliability.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Although no technology platform can guarantee uninterrupted availability under every circumstance, OCTOREQ continually works to minimize service disruptions and improve operational resilience through disciplined engineering and operational excellence.",
        },
      ],
    },

    {
      id: "responsible-development",
      title: "6. Responsible Development",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ follows responsible engineering practices throughout the software development lifecycle. Security, quality, reliability, and maintainability are considered from initial design through deployment and ongoing platform operations.",
        },

        {
          type: "paragraph",
          content:
            "Development processes are designed to reduce operational risk while enabling continuous innovation and timely delivery of platform improvements.",
        },

        {
          type: "paragraph",
          content:
            "Our engineering practices include:",
        },

        {
          type: "list",
          content: [
            "secure software development lifecycle (Secure SDLC) practices;",
            "peer review of source code prior to deployment;",
            "testing throughout development, staging, and production readiness processes;",
            "dependency and vulnerability management;",
            "controlled change management and deployment procedures;",
            "monitoring of application performance after release;",
            "timely remediation of identified security issues;",
            "maintenance of development standards and technical documentation; and",
            "continuous improvement of engineering processes based on operational experience and evolving industry practices.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Responsible development helps us deliver reliable payment infrastructure while reducing security risks, improving software quality, and supporting long-term platform stability for our customers.",
        },
      ],
    },
        {
      id: "third-party-risk-management",
      title: "7. Third-Party Risk Management",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ works with carefully selected third-party providers that support the delivery, operation, and continuous improvement of our Services. Because these providers may contribute to critical aspects of our infrastructure, we maintain processes designed to evaluate and manage third-party risks throughout the relationship lifecycle.",
        },

        {
          type: "paragraph",
          content:
            "Third-party providers may include cloud infrastructure providers, payment processors, banking partners, communications providers, identity verification services, security vendors, monitoring platforms, analytics providers, and other organizations that support the operation of the OCTOREQ platform.",
        },

        {
          type: "paragraph",
          content:
            "Our third-party risk management practices include:",
        },

        {
          type: "list",
          content: [
            "performing reasonable due diligence before engaging critical service providers;",
            "evaluating security, privacy, operational, and compliance capabilities where appropriate;",
            "requiring contractual obligations relating to confidentiality, security, and applicable legal requirements;",
            "periodically reviewing critical vendor relationships;",
            "limiting third-party access to systems and information based on business necessity;",
            "monitoring the performance and reliability of critical service providers;",
            "maintaining contingency planning for significant third-party service disruptions; and",
            "continuously reassessing vendor risks as business and regulatory requirements evolve.",
          ],
        },

        {
          type: "paragraph",
          content:
            "While OCTOREQ carefully manages relationships with third-party providers, certain aspects of the Services depend upon external organizations whose systems and operations remain outside OCTOREQ's direct control.",
        },
      ],
    },

    {
      id: "transparency",
      title: "8. Transparency",

      blocks: [
        {
          type: "paragraph",
          content:
            "Transparency strengthens trust. OCTOREQ seeks to provide customers, partners, developers, and other stakeholders with clear information regarding our policies, operational practices, security principles, and service commitments through publicly available documentation and responsible communication.",
        },

        {
          type: "paragraph",
          content:
            "Our commitment to transparency includes:",
        },

        {
          type: "list",
          content: [
            "publishing and maintaining clear legal and policy documentation;",
            "communicating material changes to our policies and services where appropriate;",
            "maintaining documentation for developers and technical integrations;",
            "providing information regarding our security and privacy practices;",
            "supporting responsible disclosure of security vulnerabilities;",
            "communicating significant operational incidents when appropriate;",
            "maintaining clear support and contact channels; and",
            "continually improving our documentation to reflect evolving services and regulatory expectations.",
          ],
        },

        {
          type: "paragraph",
          content:
            "We believe that transparency helps customers make informed decisions and strengthens long-term confidence in the OCTOREQ platform.",
        },
      ],
    },

    {
      id: "resources",
      title: "9. Resources",

      blocks: [
        {
          type: "paragraph",
          content:
            "Additional information regarding OCTOREQ's operational practices, legal framework, privacy commitments, security standards, and developer resources is available throughout our documentation.",
        },

        {
          type: "paragraph",
          content:
            "Key resources include:",
        },

        {
          type: "list",
          content: [
            "Terms of Service;",
            "Privacy Policy;",
            "Cookie Policy;",
            "Acceptable Use Policy;",
            "Merchant Agreement;",
            "Partner Program Agreement;",
            "API Terms of Use;",
            "Security Policy;",
            "Compliance Policy;",
            "Service Level Agreement (SLA);",
            "Data Processing Agreement (DPA); and",
            "Developer documentation and technical integration guides.",
          ],
        },

        {
          type: "paragraph",
          content:
            "These resources are intended to provide customers, partners, developers, and other stakeholders with detailed information regarding the use, operation, security, governance, and compliance of the OCTOREQ platform.",
        },
      ],
    },

    {
      id: "contact",
      title: "10. Contact Information",

      blocks: [
        {
          type: "paragraph",
          content:
            "Questions regarding OCTOREQ's security practices, privacy program, compliance framework, operational reliability, or other trust-related matters may be directed through the official support, privacy, compliance, or security contact channels published on the OCTOREQ website.",
        },

        {
          type: "paragraph",
          content:
            "We welcome responsible feedback from merchants, partners, developers, enterprise customers, regulators, and the broader community as part of our commitment to continuous improvement and responsible platform governance.",
        },

        {
          type: "paragraph",
          content:
            "At OCTOREQ, trust is more than a commitment—it is the foundation upon which we build our technology, serve our customers, and shape the future of modern commerce. We remain dedicated to delivering secure, compliant, reliable, and innovative payment infrastructure that empowers businesses to grow with confidence.",
        },
      ],
    },
  ],
};

export default trust;