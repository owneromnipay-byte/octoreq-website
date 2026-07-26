import { LegalDocument } from "@/types/legal";

const compliance: LegalDocument = {
  title: "Compliance",
  description:
    "Learn about OCTOREQ's compliance framework, including anti-money laundering, customer due diligence, fraud prevention, sanctions screening, security, and regulatory commitments.",
  version: "1.0",
  effectiveDate: "July 2026",
  lastUpdated: "July 2026",

  sections: [
    {
      id: "introduction",
      title: "1. Introduction",

      blocks: [
        {
          type: "paragraph",
          content:
            "Compliance is fundamental to OCTOREQ's mission of providing secure, reliable, and trusted payment orchestration services. We are committed to operating our Platform responsibly while supporting applicable legal, regulatory, and industry requirements across the jurisdictions in which we operate.",
        },

        {
          type: "paragraph",
          content:
            "Our compliance program is designed to promote financial integrity, reduce fraud, protect customers and merchants, and support the broader stability of the payment ecosystem through risk-based controls, ongoing monitoring, and continuous improvement.",
        },

        {
          type: "paragraph",
          content:
            "This Compliance Statement provides an overview of OCTOREQ's compliance principles. It is intended for informational purposes only and does not constitute legal, regulatory, or financial advice.",
        },
      ],
    },

    {
      id: "regulatory-commitment",
      title: "2. Regulatory Commitment",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to conducting its business in accordance with applicable laws, regulations, Payment Provider requirements, and recognized industry standards. Our compliance framework evolves alongside regulatory developments, operational growth, and emerging financial crime risks.",
        },

        {
          type: "paragraph",
          content:
            "Our compliance objectives include:",
        },

        {
          type: "list",
          content: [
            "supporting lawful and transparent financial transactions;",
            "maintaining effective compliance governance;",
            "protecting merchants and customers;",
            "preventing financial crime;",
            "maintaining secure payment infrastructure;",
            "cooperating with competent regulatory authorities where legally required; and",
            "continuously improving our compliance program.",
          ],
        },
      ],
    },

    {
      id: "aml",
      title: "3. Anti-Money Laundering (AML)",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ maintains a risk-based Anti-Money Laundering (AML) program designed to help detect, prevent, and mitigate money laundering, terrorist financing, fraud, and other forms of financial crime. Our AML framework is continuously reviewed and enhanced to reflect evolving regulatory expectations, Payment Provider requirements, and emerging risks.",
        },

        {
          type: "paragraph",
          content:
            "As part of our compliance program, OCTOREQ may implement measures including:",
        },

        {
          type: "list",
          content: [
            "customer due diligence procedures;",
            "business verification requirements;",
            "risk-based customer assessments;",
            "transaction monitoring;",
            "fraud detection controls;",
            "sanctions and watchlist screening;",
            "ongoing account reviews;",
            "enhanced due diligence for higher-risk relationships;",
            "record retention in accordance with applicable law; and",
            "reporting of suspicious activities where legally required.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where appropriate, OCTOREQ works alongside regulated Payment Providers and financial institutions that maintain their own AML compliance programs. Merchants remain independently responsible for complying with applicable AML laws that govern their own businesses.",
        },
      ],
    },

    {
      id: "kyc-kyb",
      title: "4. Know Your Customer (KYC) & Know Your Business (KYB)",

      blocks: [
        {
          type: "paragraph",
          content:
            "Customer verification is an essential component of OCTOREQ's compliance framework. We apply Know Your Customer (KYC) and Know Your Business (KYB) procedures to verify the identity of individuals and businesses using the Platform where required by applicable law, Payment Provider requirements, or our internal risk management policies.",
        },

        {
          type: "paragraph",
          content:
            "Verification requirements may include the collection and validation of:",
        },

        {
          type: "list",
          content: [
            "government-issued identification;",
            "business registration documents;",
            "certificate of incorporation or equivalent records;",
            "proof of address;",
            "beneficial ownership information;",
            "director and authorized representative details;",
            "bank account verification;",
            "tax registration information;",
            "business licenses or permits where applicable; and",
            "additional documentation reasonably required for compliance purposes.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Verification is not limited to onboarding. OCTOREQ may periodically request updated information, perform ongoing due diligence, or conduct enhanced verification where changes in risk profile, transaction activity, regulatory obligations, or Payment Provider requirements make additional review necessary.",
        },

        {
          type: "paragraph",
          content:
            "Failure to provide requested information within a reasonable timeframe may result in delayed onboarding, restricted functionality, temporary suspension of Services, delayed settlements, or termination of access in accordance with our legal agreements.",
        },
      ],
    },

    {
      id: "sanctions-screening",
      title: "5. Sanctions Screening",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to complying with applicable sanctions laws and supporting efforts to prevent the misuse of the financial system. We may perform sanctions screening and other compliance checks where required by law, Payment Providers, banking partners, or our internal compliance procedures.",
        },

        {
          type: "paragraph",
          content:
            "Sanctions screening may include the review of individuals, businesses, beneficial owners, transactions, jurisdictions, and counterparties against applicable sanctions lists, watchlists, and other legally recognized sources used to support compliance obligations.",
        },

        {
          type: "paragraph",
          content:
            "Where a potential sanctions concern or regulatory restriction is identified, OCTOREQ may conduct additional reviews and, where appropriate, decline onboarding, suspend Services, delay settlements, restrict transactions, request additional information, or take other actions necessary to comply with applicable legal or regulatory requirements.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ does not guarantee that sanctions screening will identify every prohibited individual, entity, or transaction. Compliance measures form part of a broader risk management framework designed to reduce financial crime risk while supporting lawful commerce.",
        },
      ],
    },

    {
      id: "fraud-monitoring",
      title: "6. Fraud Prevention & Transaction Monitoring",

      blocks: [
                {
          type: "paragraph",
          content:
            "Protecting the integrity of the payment ecosystem requires continuous monitoring of transactions and account activity. OCTOREQ employs a risk-based fraud prevention framework designed to identify unusual behavior, detect suspicious activity, reduce financial crime, and protect Merchants, Customers, Payment Providers, and the Platform.",
        },

        {
          type: "paragraph",
          content:
            "Our fraud prevention program may incorporate automated systems, manual reviews, behavioral analysis, risk scoring, and other operational controls appropriate to the Services being provided.",
        },

        {
          type: "paragraph",
          content:
            "Fraud monitoring measures may include:",
        },

        {
          type: "list",
          content: [
            "real-time transaction monitoring;",
            "behavioral and anomaly detection;",
            "velocity and transaction pattern analysis;",
            "device and IP reputation checks;",
            "account takeover detection;",
            "duplicate transaction detection;",
            "risk scoring and profiling;",
            "manual review of higher-risk transactions;",
            "ongoing merchant activity monitoring;",
            "webhook and API abuse detection;",
            "investigation of suspicious account activity; and",
            "temporary transaction holds where reasonably necessary.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where suspicious activity is identified, OCTOREQ may request additional information, delay settlements, restrict transactions, temporarily suspend access, or take other reasonable actions necessary to investigate and manage risk while complying with applicable legal and regulatory obligations.",
        },
      ],
    },

    {
      id: "risk-based-compliance",
      title: "7. Risk-Based Compliance",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ applies a risk-based approach to compliance, recognizing that different businesses, industries, payment methods, transaction volumes, and jurisdictions present different levels of operational, financial, and regulatory risk. Compliance controls are proportionate to the level of risk reasonably identified.",
        },

        {
          type: "paragraph",
          content:
            "Risk assessments may consider factors including:",
        },

        {
          type: "list",
          content: [
            "merchant industry classification;",
            "products and services offered;",
            "geographic footprint;",
            "transaction volume and value;",
            "payment methods accepted;",
            "historical fraud and dispute activity;",
            "beneficial ownership structure;",
            "regulatory environment;",
            "customer verification results;",
            "Payment Provider requirements; and",
            "other relevant operational or compliance considerations.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Based on the outcome of these assessments, OCTOREQ may apply enhanced due diligence, additional monitoring, reserve requirements, transaction limits, periodic reviews, or other reasonable risk management measures designed to maintain the integrity of the Platform.",
        },
      ],
    },

    {
      id: "security-standards",
      title: "8. Security Standards",

      blocks: [
        {
          type: "paragraph",
          content:
            "Security is a fundamental component of OCTOREQ's compliance framework. We maintain administrative, technical, and organizational safeguards designed to protect our systems, customer information, and payment infrastructure against unauthorized access, misuse, alteration, or disclosure.",
        },

        {
          type: "paragraph",
          content:
            "Our security program is designed to support recognized industry standards and continually evolves to address emerging threats, technological developments, and changing regulatory expectations.",
        },

        {
          type: "paragraph",
          content:
            "Our security controls may include:",
        },

        {
          type: "list",
          content: [
            "strong authentication and access controls;",
            "encryption of data in transit and, where appropriate, at rest;",
            "network and infrastructure security controls;",
            "continuous logging and monitoring;",
            "security incident detection and response procedures;",
            "secure software development practices;",
            "vulnerability assessment and remediation;",
            "regular security reviews;",
            "employee security awareness training;",
            "business continuity and disaster recovery planning; and",
            "ongoing evaluation of third-party service providers.",
          ],
        },

        {
          type: "paragraph",
          content:
            "While OCTOREQ implements commercially reasonable safeguards to protect the Platform, no security program can guarantee absolute protection against every cyber threat or security incident. We continuously improve our controls to reduce risk and strengthen the resilience of our infrastructure.",
        },
      ],
    },

    {
      id: "data-protection",
      title: "9. Data Protection & Privacy",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ is committed to protecting personal information and processing data responsibly in accordance with applicable data protection and privacy laws. Our privacy practices are designed to support transparency, accountability, and the secure handling of personal information throughout the lifecycle of our Services.",
        },

        {
          type: "paragraph",
          content:
            "We implement administrative, technical, and organizational measures appropriate to the nature of the information we process and continually review our privacy controls to address evolving legal, operational, and technological requirements.",
        },

        {
          type: "paragraph",
          content:
            "Our data protection practices may include:",
        },

        {
          type: "list",
          content: [
            "processing personal information only for legitimate business purposes;",
            "collecting only information reasonably necessary to provide the Services;",
            "implementing access controls to protect sensitive information;",
            "maintaining secure storage and transmission of data;",
            "limiting access to authorized personnel;",
            "supporting applicable data subject rights where required by law;",
            "maintaining data retention and deletion procedures;",
            "monitoring for unauthorized access to personal information; and",
            "continuously improving privacy and security controls.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Additional information regarding our collection, use, disclosure, and protection of personal information is available in the OCTOREQ Privacy Policy.",
        },
      ],
    },

    {
      id: "regulatory-reporting",
      title: "10. Regulatory Reporting & Cooperation",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to cooperating with competent regulatory authorities, law enforcement agencies, Payment Providers, and financial institutions where required by applicable law or valid legal process.",
        },

        {
          type: "paragraph",
          content:
            "Where legally required, OCTOREQ may report suspicious activities, respond to lawful information requests, preserve relevant records, provide transaction information, or take other actions necessary to comply with applicable legal and regulatory obligations.",
        },

        {
          type: "paragraph",
          content:
            "Our cooperation with regulators is conducted in accordance with applicable privacy laws, confidentiality obligations, due process requirements, and other legal safeguards intended to protect the rights of our users while supporting lawful regulatory oversight.",
        },
      ],
    },

    {
      id: "third-party-providers",
      title: "11. Third-Party Providers",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ works with trusted third-party service providers, including licensed Payment Providers, banking partners, identity verification providers, cloud infrastructure providers, fraud prevention services, and other technology partners that support the operation of our Platform.",
        },

        {
          type: "paragraph",
          content:
            "We perform appropriate due diligence when selecting third-party providers and seek to work with organizations that maintain appropriate security, compliance, operational resilience, and regulatory standards consistent with the services they provide.",
        },

        {
          type: "paragraph",
          content:
            "Although OCTOREQ carefully evaluates its service providers, each third party maintains independent legal and operational responsibilities. Their services remain subject to their own applicable agreements, compliance obligations, and regulatory requirements.",
        },
      ],
    },

    {
      id: "compliance-audits",
      title: "12. Compliance Reviews & Audits",

      blocks: [
        {
          type: "paragraph",
          content:
            "Compliance is an ongoing process. OCTOREQ periodically reviews and evaluates its policies, procedures, operational controls, and risk management practices to support continuous improvement and alignment with applicable legal, regulatory, and industry requirements.",
        },

        {
          type: "paragraph",
          content:
            "Compliance reviews may include internal assessments, independent evaluations, operational testing, security reviews, policy updates, risk assessments, employee training, and other activities designed to strengthen our compliance framework.",
        },

        {
          type: "paragraph",
          content:
            "Where appropriate, OCTOREQ may implement corrective actions, update internal controls, or enhance compliance procedures in response to audit findings, regulatory developments, emerging risks, or changes in business operations.",
        },
      ],
    },

    {
      id: "reporting-concerns",
      title: "13. Reporting Compliance Concerns",

      blocks: [
        {
          type: "paragraph",
          content:
            "We encourage Merchants, Partners, Customers, and other stakeholders to promptly report suspected fraud, financial crime, security vulnerabilities, policy violations, or other compliance concerns relating to the OCTOREQ Platform.",
        },

        {
          type: "paragraph",
          content:
            "Reports are reviewed by the appropriate internal personnel and, where necessary, investigated in accordance with applicable law, internal procedures, and our commitment to protecting the integrity of the Platform.",
        },
      ],
    },

    {
      id: "changes",
      title: "14. Changes to this Compliance Statement",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may update this Compliance Statement from time to time to reflect changes in applicable laws, regulatory expectations, Payment Provider requirements, industry standards, business operations, or the Services we provide.",
        },

        {
          type: "paragraph",
          content:
            "The revised version will be published on our website together with its updated effective date and last updated date. Continued use of the Services after any updates become effective constitutes acknowledgment of the revised Compliance Statement where permitted by applicable law.",
        },
      ],
    },

    {
      id: "contact",
      title: "15. Contact Information",

      blocks: [
        {
          type: "paragraph",
          content:
            "Questions regarding this Compliance Statement or OCTOREQ's compliance program may be submitted using the contact information published on OCTOREQ's official website.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ remains committed to maintaining a culture of integrity, transparency, accountability, and responsible innovation while supporting secure and compliant payment services for businesses around the world.",
        },
      ],
    },
  ],
};

export default compliance;