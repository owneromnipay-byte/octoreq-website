import { LegalDocument } from "@/types/legal";

const privacy: LegalDocument = {
  title: "Privacy Policy",
  description:
    "Learn how OCTOREQ collects, uses, shares, stores, and protects personal information when you use our Platform and Services.",
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
            "This Privacy Policy explains how OCTOREQ Technologies Limited (\"OCTOREQ,\" \"we,\" \"our,\" or \"us\") collects, uses, stores, shares, protects, and otherwise processes personal information when individuals, businesses, Merchants, developers, partners, Customers, and other authorized users (collectively, \"you\" or \"your\") access or use the OCTOREQ Platform, websites, APIs, Merchant Dashboard, Partner Portal, developer tools, documentation, communications, and all related products and services (collectively, the \"Services\").",
        },

        {
          type: "paragraph",
          content:
            "Protecting personal information is an important part of maintaining trust in the OCTOREQ Platform. We are committed to processing personal information responsibly, transparently, securely, and in accordance with applicable data protection and privacy laws, including the Nigeria Data Protection Act (NDPA), together with any other applicable privacy, cybersecurity, consumer protection, or financial services legislation.",
        },

        {
          type: "paragraph",
          content:
            "This Privacy Policy should be read together with our Terms of Service, Acceptable Use Policy, Cookie Policy, Merchant Agreement, Partner Agreement, Data Processing Agreement (where applicable), and any additional legal notices or policies made available through the Platform.",
        },

        {
          type: "paragraph",
          content:
            "By accessing or using the Services, you acknowledge that you have read and understood this Privacy Policy and that your personal information may be processed as described herein.",
        },
      ],
    },

    {
      id: "scope",
      title: "2. Scope of this Privacy Policy",

      blocks: [
        {
          type: "paragraph",
          content:
            "This Privacy Policy applies to personal information processed by OCTOREQ in connection with the operation of the Platform and the provision of the Services.",
        },

        {
          type: "paragraph",
          content:
            "It applies to information collected from or relating to:",
        },

        {
          type: "list",
          content: [
            "Merchants and prospective Merchants;",
            "authorized users of Merchant Accounts;",
            "developers integrating with OCTOREQ APIs;",
            "partners, affiliates, resellers, and referral participants;",
            "visitors to OCTOREQ websites;",
            "users of the Merchant Dashboard and Partner Portal;",
            "individuals who contact our support, compliance, sales, or legal teams;",
            "representatives of corporate customers;",
            "job applicants where applicable; and",
            "other individuals whose information is processed in connection with the Services.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Certain payment transactions processed through the Platform involve personal information belonging to Customers of our Merchants. In many of these circumstances, OCTOREQ processes such information on behalf of the Merchant as part of providing payment orchestration, infrastructure, reporting, fraud prevention, reconciliation, settlement coordination, and related technology services.",
        },

        {
          type: "paragraph",
          content:
            "Where OCTOREQ processes personal information solely on behalf of a Merchant, the Merchant generally remains responsible for determining the purposes and lawful basis of that processing, while OCTOREQ processes the information in accordance with applicable agreements, documented instructions, applicable law, and appropriate security safeguards.",
        },

        {
          type: "paragraph",
          content:
            "This Privacy Policy does not apply to third-party websites, payment gateways, financial institutions, Payment Providers, cloud providers, or other external services that maintain independent privacy policies. We encourage you to review their privacy practices before providing personal information directly to them.",
        },
      ],
    },

    {
      id: "personal-information-we-collect",
      title: "3. Personal Information We Collect",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ collects personal information that is necessary to establish business relationships, provide the Services, maintain the security and integrity of the Platform, comply with applicable legal and regulatory obligations, improve our products and services, and support our Merchants and authorized users.",
        },

        {
          type: "paragraph",
          content:
            "The categories of personal information we process depend on the nature of your relationship with OCTOREQ, the Services you use, your role within a Merchant organization, and applicable legal or regulatory requirements.",
        },
      ],
    },

    {
      id: "information-you-provide",
      title: "3.1 Information You Provide",

      blocks: [
        {
          type: "paragraph",
          content:
            "We may collect personal information that you voluntarily provide when creating an Account, onboarding as a Merchant or Partner, integrating with our APIs, communicating with us, requesting support, participating in events, subscribing to communications, or otherwise interacting with the Platform.",
        },

        {
          type: "paragraph",
          content:
            "Depending on the Services used, this information may include:",
        },

        {
          type: "list",
          content: [
            "full name;",
            "business or organization name;",
            "email address;",
            "telephone number;",
            "registered business address;",
            "billing address;",
            "country or jurisdiction;",
            "job title or position;",
            "government-issued identification where required;",
            "Know Your Customer (KYC) information;",
            "Know Your Business (KYB) information;",
            "beneficial ownership information;",
            "director or shareholder information;",
            "bank account or settlement account information;",
            "tax identification information;",
            "regulatory license information;",
            "identity verification documents;",
            "account credentials and authentication information;",
            "support requests and correspondence;",
            "feedback and survey responses; and",
            "any other information voluntarily submitted through the Services.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where certain information is required by law, Payment Provider requirements, or our onboarding procedures, failure to provide such information may prevent us from establishing or maintaining the requested business relationship or providing particular Services.",
        },
      ],
    },

    {
      id: "information-collected-automatically",
      title: "3.2 Information We Collect Automatically",

      blocks: [
        {
          type: "paragraph",
          content:
            "When you access or use the Platform, certain technical and usage information may be collected automatically through our systems, security infrastructure, analytics technologies, and operational monitoring tools.",
        },

        {
          type: "paragraph",
          content:
            "Automatically collected information may include:",
        },

        {
          type: "list",
          content: [
            "IP addresses;",
            "browser type and version;",
            "device identifiers;",
            "operating system;",
            "device type;",
            "language preferences;",
            "time zone;",
            "date and time of access;",
            "API request metadata;",
            "authentication logs;",
            "Merchant Dashboard activity;",
            "Partner Portal activity;",
            "API usage statistics;",
            "webhook delivery logs;",
            "session information;",
            "cookies and similar technologies;",
            "security event logs;",
            "error reports;",
            "performance metrics;",
            "network information;",
            "pages visited;",
            "referring URLs;",
            "interaction history; and",
            "other diagnostic information reasonably necessary for operating and securing the Platform.",
          ],
        },

        {
          type: "paragraph",
          content:
            "This information assists us in maintaining Platform security, detecting fraud, troubleshooting technical issues, monitoring performance, improving reliability, enforcing our legal agreements, and enhancing the overall user experience.",
        },
      ],
    },

    {
      id: "information-from-third-parties",
      title: "3.3 Information We Receive from Third Parties",

      blocks: [
        {
          type: "paragraph",
          content:
            "We may receive personal information from third parties where reasonably necessary to provide the Services, comply with legal obligations, prevent fraud, verify identities, or maintain the integrity of the Platform.",
        },

        {
          type: "paragraph",
          content:
            "Such information may be obtained from:",
        },

        {
          type: "list",
          content: [
            "licensed Payment Providers;",
            "banking partners;",
            "identity verification providers;",
            "credit reference agencies where permitted;",
            "fraud prevention services;",
            "sanctions screening providers;",
            "Know Your Customer (KYC) providers;",
            "Know Your Business (KYB) providers;",
            "government or regulatory databases where lawfully accessible;",
            "business registries;",
            "publicly available sources;",
            "our Merchants;",
            "our Partners;",
            "cloud infrastructure providers; and",
            "other service providers engaged in connection with the Services.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where we receive personal information from third parties, we process that information only for lawful purposes, in accordance with applicable agreements, this Privacy Policy, and applicable data protection laws.",
        },
      ],
    },

    {
      id: "how-we-use-personal-information",
      title: "4. How We Use Personal Information",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ processes personal information only where reasonably necessary to provide the Services, fulfill contractual obligations, comply with applicable law, protect the security and integrity of the Platform, improve our products and services, and support legitimate business operations.",
        },

        {
          type: "paragraph",
          content:
            "Depending on the nature of your relationship with OCTOREQ, we may process personal information for the following purposes:",
        },

        {
          type: "list",
          content: [
            "creating and managing Merchant Accounts;",
            "verifying identities and business information;",
            "conducting Know Your Customer (KYC) and Know Your Business (KYB) procedures;",
            "performing sanctions, fraud, anti-money laundering (AML), and compliance screening;",
            "providing payment orchestration services;",
            "facilitating API integrations;",
            "operating the Merchant Dashboard and Partner Portal;",
            "routing and monitoring payment transactions;",
            "coordinating settlements and payouts;",
            "providing reporting and analytics;",
            "responding to support requests;",
            "communicating service announcements and operational updates;",
            "investigating fraud, abuse, security incidents, disputes, or chargebacks;",
            "maintaining audit logs and compliance records;",
            "monitoring Platform performance and reliability;",
            "detecting, preventing, and mitigating cybersecurity threats;",
            "improving existing Services and developing new features;",
            "enforcing our legal agreements and Platform policies;",
            "complying with legal, regulatory, judicial, and contractual obligations;",
            "protecting the rights, safety, property, and legitimate interests of OCTOREQ, Merchants, Customers, Partners, Payment Providers, and other users; and",
            "any other purpose that is compatible with the original purpose for which the information was collected or otherwise permitted by applicable law.",
          ],
        },

        {
          type: "paragraph",
          content:
            "We do not sell personal information to third parties for their independent marketing purposes.",
        },
      ],
    },

    {
      id: "legal-bases-for-processing",
      title: "5. Legal Bases for Processing",

      blocks: [
        {
          type: "paragraph",
          content:
            "Where applicable data protection laws require a lawful basis for processing personal information, OCTOREQ relies on one or more recognized legal bases depending on the circumstances of the processing activity.",
        },

        {
          type: "paragraph",
          content:
            "These legal bases may include:",
        },

        {
          type: "list",
          content: [
            "performance of a contract or taking steps prior to entering into a contract;",
            "compliance with legal or regulatory obligations;",
            "protection of vital interests where permitted by law;",
            "performance of tasks carried out in the public interest where applicable;",
            "our legitimate business interests, provided such interests are not overridden by applicable privacy rights; and",
            "your consent, where consent is required by applicable law.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where processing is based on your consent, you may withdraw that consent at any time. Withdrawal of consent will not affect the lawfulness of processing carried out before the withdrawal became effective.",
        },

        {
          type: "paragraph",
          content:
            "Where OCTOREQ processes personal information on behalf of a Merchant, the Merchant generally determines the lawful basis for that processing, while OCTOREQ processes the information in accordance with applicable agreements, documented instructions, and applicable law.",
        },
      ],
    },

    {
      id: "cookies",
      title: "6. Cookies and Similar Technologies",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ uses cookies and similar technologies to operate the Platform, improve user experience, enhance security, remember preferences, analyze Platform usage, and support the functionality of our websites, Merchant Dashboard, Partner Portal, and developer resources.",
        },

        {
          type: "paragraph",
          content:
            "Cookies and similar technologies may be used to:",
        },

        {
          type: "list",
          content: [
            "maintain authenticated sessions;",
            "remember user preferences;",
            "improve website performance;",
            "analyze traffic and usage trends;",
            "identify technical issues;",
            "support fraud prevention;",
            "enhance Platform security;",
            "measure the effectiveness of communications;",
            "improve user experience; and",
            "support operational analytics.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Most web browsers allow users to manage or disable cookies through browser settings. Disabling certain cookies may affect the availability or functionality of portions of the Services.",
        },

        {
          type: "paragraph",
          content:
            "Additional information regarding our use of cookies may be provided in OCTOREQ's Cookie Policy where applicable.",
        },
      ],
    },

    {
      id: "sharing-information",
      title: "7. Sharing and Disclosure of Information",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ may share or disclose personal information where reasonably necessary to operate the Platform, provide the Services, comply with applicable law, protect our legitimate interests, or fulfill contractual obligations. We do not sell personal information to data brokers or third parties for their independent marketing purposes.",
        },

        {
          type: "paragraph",
          content:
            "Depending on the circumstances, personal information may be shared with the following categories of recipients:",
        },

        {
          type: "list",
          content: [
            "licensed Payment Providers integrated with the Platform;",
            "banking and settlement partners;",
            "identity verification providers;",
            "Know Your Customer (KYC) and Know Your Business (KYB) service providers;",
            "fraud detection and prevention providers;",
            "anti-money laundering (AML) and sanctions screening providers;",
            "cloud hosting and infrastructure providers;",
            "data storage and backup providers;",
            "security monitoring providers;",
            "analytics and monitoring providers;",
            "customer support service providers;",
            "professional advisers, including auditors, accountants, consultants, and legal counsel;",
            "insurance providers where appropriate;",
            "government authorities, regulators, law enforcement agencies, or courts where disclosure is required or permitted by law;",
            "our affiliates and subsidiaries where necessary to operate the Services; and",
            "other service providers engaged under appropriate contractual and confidentiality obligations.",
          ],
        },

        {
          type: "paragraph",
          content:
            "All third-party service providers that process personal information on our behalf are expected to implement appropriate technical and organizational measures to protect personal information and are permitted to process such information only for authorized purposes consistent with applicable agreements and applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Where OCTOREQ processes personal information solely on behalf of a Merchant, disclosures are generally made only in accordance with the Merchant's documented instructions, applicable agreements, or applicable legal obligations.",
        },

        {
          type: "paragraph",
          content:
            "We may also disclose personal information where we reasonably believe such disclosure is necessary to establish, exercise, or defend legal claims, investigate suspected fraud or unlawful activity, protect the safety or security of individuals, enforce our legal agreements, or protect the rights, property, or legitimate interests of OCTOREQ, our Merchants, our Partners, Payment Providers, Customers, or other users.",
        },

        {
          type: "paragraph",
          content:
            "If OCTOREQ is involved in a merger, acquisition, corporate restructuring, financing transaction, sale of assets, or similar business transaction, personal information may be transferred as part of that transaction, subject to applicable legal and confidentiality obligations.",
        },
      ],
    },

    {
      id: "international-transfers",
      title: "8. International Data Transfers",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may process or transfer personal information across national borders where necessary to provide the Services, support international business operations, utilize trusted service providers, comply with legal obligations, or facilitate cross-border payment infrastructure.",
        },

        {
          type: "paragraph",
          content:
            "Where personal information is transferred to another jurisdiction, we take reasonable steps to ensure that appropriate safeguards are implemented in accordance with applicable data protection laws. Such safeguards may include contractual commitments, organizational measures, technical protections, regulatory mechanisms, or other lawful transfer mechanisms recognized under applicable legislation.",
        },

        {
          type: "paragraph",
          content:
            "By using the Services where international processing is necessary, you acknowledge that personal information may be transferred to jurisdictions that may have different data protection laws than your country of residence. OCTOREQ will take reasonable measures to ensure that transferred information continues to receive an appropriate level of protection.",
        },
      ],
    },

    {
      id: "data-security",
      title: "9. Data Security",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ maintains a comprehensive information security program designed to protect personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, unauthorized access, misuse, or other unlawful forms of processing.",
        },

        {
          type: "paragraph",
          content:
            "Our security measures may include administrative, technical, organizational, and physical safeguards appropriate to the nature of the information being processed and the risks associated with such processing.",
        },

        {
          type: "paragraph",
          content:
            "Security measures may include:",
        },

        {
          type: "list",
          content: [
            "encryption of data in transit where appropriate;",
            "encryption or protection of sensitive data at rest where appropriate;",
            "access controls based on business need;",
            "multi-factor authentication for administrative access where applicable;",
            "network security monitoring;",
            "logging and audit trails;",
            "continuous vulnerability management;",
            "security assessments and testing;",
            "incident detection and response procedures;",
            "business continuity and disaster recovery planning;",
            "employee security awareness training; and",
            "vendor security due diligence where appropriate.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Although OCTOREQ implements reasonable safeguards to protect personal information, no method of transmission over the Internet or electronic storage system can be guaranteed to be completely secure. Accordingly, we cannot guarantee absolute security, and users share information with the Platform at their own risk to the extent permitted by applicable law.",
        },
      ],
    },

    {
      id: "data-retention",
      title: "10. Data Retention",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ retains personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, provide the Services, comply with applicable legal and regulatory obligations, resolve disputes, enforce our agreements, protect legitimate business interests, and maintain appropriate business and financial records.",
        },

        {
          type: "paragraph",
          content:
            "Retention periods vary depending on the nature of the information, the Services provided, applicable contractual obligations, legal requirements, regulatory expectations, and the operational needs of the Platform.",
        },

        {
          type: "paragraph",
          content:
            "When determining appropriate retention periods, we may consider:",
        },

        {
          type: "list",
          content: [
            "the purpose for which the information was collected;",
            "the duration of the business relationship;",
            "applicable statutory limitation periods;",
            "financial reporting requirements;",
            "tax obligations;",
            "anti-money laundering (AML) and counter-terrorist financing obligations where applicable;",
            "payment industry requirements;",
            "regulatory recordkeeping obligations;",
            "ongoing disputes or investigations;",
            "court orders or legal holds; and",
            "our legitimate business and security requirements.",
          ],
        },

        {
          type: "paragraph",
          content:
            "When personal information is no longer required for the purposes for which it was collected and there is no applicable legal or operational requirement to retain it, OCTOREQ will securely delete, anonymize, or otherwise dispose of the information using appropriate methods consistent with applicable law and our internal data management practices.",
        },
      ],
    },

    {
      id: "privacy-rights",
      title: "11. Your Privacy Rights",

      blocks: [
        {
          type: "paragraph",
          content:
            "Subject to applicable law, individuals may have certain rights regarding the personal information processed by OCTOREQ. The availability and scope of these rights may vary depending on the applicable jurisdiction and the nature of the processing activity.",
        },

        {
          type: "paragraph",
          content:
            "Where applicable, you may have the right to:",
        },

        {
          type: "list",
          content: [
            "request access to your personal information;",
            "request correction of inaccurate or incomplete information;",
            "request deletion of personal information where legally permissible;",
            "request restriction of certain processing activities;",
            "object to certain forms of processing where permitted by law;",
            "withdraw consent where processing is based on consent;",
            "request portability of personal information where applicable;",
            "request information regarding how your personal information is processed;",
            "lodge a complaint with an applicable data protection authority; and",
            "exercise any additional rights available under applicable data protection laws.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Requests relating to personal information should be submitted using the contact details provided in this Privacy Policy. We may request additional information to verify the identity of the requesting individual before responding to a request or disclosing personal information.",
        },

        {
          type: "paragraph",
          content:
            "Where OCTOREQ processes personal information solely on behalf of a Merchant, requests relating to such information should generally be directed to the relevant Merchant, unless applicable law requires otherwise.",
        },
      ],
    },

    {
      id: "children-privacy",
      title: "12. Children's Privacy",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Services are intended for businesses and individuals who are legally capable of entering into binding agreements. OCTOREQ does not knowingly collect personal information directly from children where doing so is prohibited by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "If we become aware that personal information has been collected from a child in violation of applicable law, we will take reasonable steps to delete or otherwise appropriately handle such information in accordance with our legal obligations.",
        },

        {
          type: "paragraph",
          content:
            "Parents, guardians, or other individuals who believe that a child has provided personal information to OCTOREQ inappropriately may contact us using the information provided below.",
        },
      ],
    },

    {
      id: "third-party-services",
      title: "13. Third-Party Services",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Services may integrate with or provide access to third-party products, payment providers, financial institutions, cloud platforms, developer tools, websites, software applications, and other external services that are not owned or controlled by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "These third parties operate independently and maintain their own privacy practices, terms, and security policies. OCTOREQ is not responsible for the privacy practices or content of third-party services, and users are encouraged to review the applicable privacy policies before interacting with such services or providing personal information directly to them.",
        },

        {
          type: "paragraph",
          content:
            "Integration with a third-party service does not constitute an endorsement, certification, or representation by OCTOREQ regarding the privacy or security practices of that third party.",
        },
      ],
    },

    {
      id: "changes",
      title: "14. Changes to this Privacy Policy",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may update or modify this Privacy Policy from time to time to reflect changes in applicable law, regulatory requirements, business practices, technology, security standards, or the Services we provide.",
        },

        {
          type: "paragraph",
          content:
            "When material changes are made, we may update the effective date, revise the version number, publish the updated Privacy Policy on the Platform, or provide additional notice where required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Your continued access to or use of the Services after an updated Privacy Policy becomes effective constitutes acknowledgment of the revised Privacy Policy to the extent permitted by applicable law.",
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
            "Questions, requests, complaints, or concerns regarding this Privacy Policy or OCTOREQ's processing of personal information may be directed to us using the contact information published on our official website.",
        },

        {
          type: "paragraph",
          content:
            "Where required by applicable law, privacy-related requests will be handled in accordance with applicable legal requirements and within the timeframes prescribed by law.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ remains committed to protecting personal information through responsible data governance, strong security practices, transparency, and continuous improvement of our privacy and information security programs.",
        },
      ],
    },
  ],
};

export default privacy;