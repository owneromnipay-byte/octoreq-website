import { LegalDocument } from "@/types/legal";

const acceptableUse: LegalDocument = {
  title: "Acceptable Use Policy",
  description:
    "This Acceptable Use Policy describes the standards governing the use of the OCTOREQ Platform, Services, APIs, Merchant Dashboard, Partner Portal, and related technologies.",
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
            "This Acceptable Use Policy (\"Policy\") establishes the rules, standards, and expectations governing access to and use of the OCTOREQ Platform, websites, APIs, Merchant Dashboard, Partner Portal, developer tools, documentation, and all related products and services (collectively, the \"Services\").",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ Technologies Limited (\"OCTOREQ,\" \"we,\" \"our,\" or \"us\") is committed to maintaining a secure, reliable, lawful, and trustworthy payment orchestration ecosystem for Merchants, Partners, developers, Payment Providers, Customers, and other authorized users.",
        },

        {
          type: "paragraph",
          content:
            "This Policy forms an integral part of the OCTOREQ Terms of Service and applies to every individual and organization accessing or using the Services. Any violation of this Policy may result in suspension, restriction, termination of access, reporting to relevant authorities, or any other action permitted under applicable law or our legal agreements.",
        },

        {
          type: "paragraph",
          content:
            "Users are responsible for ensuring that all activities conducted through the Services comply with this Policy, applicable laws, industry standards, Payment Provider requirements, regulatory obligations, and all other applicable OCTOREQ policies.",
        },
      ],
    },

    {
      id: "scope",
      title: "2. Scope",

      blocks: [
        {
          type: "paragraph",
          content:
            "This Policy applies to every individual, business, Merchant, Partner, developer, Customer, contractor, employee, representative, or other authorized user who accesses or uses the Services, regardless of location or method of access.",
        },

        {
          type: "paragraph",
          content:
            "Without limitation, this Policy applies to the use of:",
        },

        {
          type: "list",
          content: [
            "Merchant Accounts;",
            "Partner Accounts;",
            "Merchant Dashboard;",
            "Partner Portal;",
            "Developer Portal;",
            "REST APIs;",
            "Webhooks;",
            "SDKs and integration libraries;",
            "payment routing services;",
            "settlement services;",
            "reporting and analytics;",
            "wallet services;",
            "documentation;",
            "support services;",
            "websites operated by OCTOREQ; and",
            "all other products or services made available by OCTOREQ.",
          ],
        },

        {
          type: "paragraph",
          content:
            "This Policy applies whether activities are performed directly by an Account holder or indirectly through employees, contractors, representatives, agents, affiliates, integrated software, automated systems, or third-party applications acting on behalf of the Account holder.",
        },
      ],
    },

    {
      id: "permitted-use",
      title: "3. Permitted Use",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ authorizes use of the Services solely for legitimate business purposes and in accordance with applicable law, this Policy, the Terms of Service, Payment Provider requirements, and all other applicable OCTOREQ agreements.",
        },

        {
          type: "paragraph",
          content:
            "Users are expected to act responsibly, honestly, and in good faith when accessing or using the Services. The integrity, stability, and security of the OCTOREQ Platform depend upon every user complying with these standards.",
        },

        {
          type: "paragraph",
          content:
            "Permitted use of the Services includes activities such as:",
        },

        {
          type: "list",
          content: [
            "accepting lawful payments for legitimate goods or services;",
            "integrating OCTOREQ APIs in accordance with our documentation;",
            "using the Merchant Dashboard and Partner Portal for authorized business activities;",
            "managing payment routing, reconciliation, settlements, and reporting;",
            "testing integrations within approved sandbox environments;",
            "using developer tools for authorized software development;",
            "participating in approved partnership and referral programs;",
            "communicating with OCTOREQ support regarding legitimate operational matters; and",
            "any other lawful activity expressly authorized by OCTOREQ.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Authorization to use the Services is conditional upon continuous compliance with this Policy. No provision of this Policy should be interpreted as permitting any activity that is unlawful, fraudulent, deceptive, harmful, or inconsistent with the purposes for which the Services are provided.",
        },
      ],
    },

    {
      id: "prohibited-activities",
      title: "4. Prohibited Activities",

      blocks: [
        {
          type: "paragraph",
          content:
            "Users must not use, attempt to use, or permit others to use the Services for any unlawful, fraudulent, abusive, deceptive, harmful, or unauthorized purpose. The following activities are prohibited regardless of whether they result in financial loss or other harm.",
        },

        {
          type: "paragraph",
          content:
            "Without limitation, users must not:",
        },

        {
          type: "list",
          content: [
            "violate any applicable law, regulation, court order, or regulatory requirement;",
            "engage in fraud, attempted fraud, or fraudulent payment activity;",
            "submit false, misleading, or inaccurate information to OCTOREQ or any Payment Provider;",
            "impersonate another individual, organization, or government authority;",
            "misrepresent business identity, ownership, licensing, or authorization;",
            "use another person's account or credentials without authorization;",
            "circumvent account restrictions or enforcement actions;",
            "attempt to conceal the true nature of transactions;",
            "process transactions on behalf of undisclosed third parties without authorization;",
            "engage in money laundering, terrorist financing, sanctions evasion, or other financial crime;",
            "knowingly facilitate illegal financial activity;",
            "use the Services to evade taxes or regulatory obligations;",
            "interfere with investigations conducted by OCTOREQ or Payment Providers;",
            "submit forged, altered, or fraudulent documentation;",
            "attempt to manipulate transaction routing or settlement processes;",
            "abuse refund, reversal, dispute, or chargeback mechanisms;",
            "create multiple accounts to bypass operational limits or enforcement measures;",
            "engage in phishing, spoofing, social engineering, or identity theft;",
            "transmit malware, ransomware, spyware, viruses, worms, trojan horses, or other malicious code;",
            "attempt unauthorized access to systems, accounts, APIs, databases, or networks;",
            "probe, scan, or test vulnerabilities without prior written authorization;",
            "interfere with the availability, integrity, or security of the Platform;",
            "launch denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks;",
            "introduce automated systems that negatively impact Platform stability;",
            "scrape, harvest, or extract Platform data except where expressly authorized;",
            "reverse engineer, decompile, disassemble, or otherwise attempt to derive source code except where prohibited from restriction by applicable law;",
            "remove or circumvent security mechanisms or access controls;",
            "misuse APIs beyond documented rate limits or technical restrictions;",
            "interfere with the use of the Services by other users;",
            "engage in deceptive, abusive, threatening, discriminatory, or harassing conduct toward OCTOREQ personnel, Merchants, Partners, Customers, or other users;",
            "upload or distribute unlawful, defamatory, infringing, obscene, or otherwise prohibited content;",
            "infringe the intellectual property rights or privacy rights of any person;",
            "collect personal information without appropriate legal authority;",
            "use the Services for purposes inconsistent with this Policy or the Terms of Service; or",
            "assist, encourage, facilitate, or enable any other person to engage in prohibited activities.",
          ],
        },

        {
          type: "paragraph",
          content:
            "The examples above are illustrative rather than exhaustive. OCTOREQ reserves the right to determine, acting reasonably and in good faith, whether particular conduct is inconsistent with this Policy, threatens the security or integrity of the Platform, or otherwise presents unacceptable operational, legal, regulatory, or reputational risk.",
        },
      ],
    },

    {
      id: "prohibited-businesses",
      title: "5. Prohibited Businesses",

      blocks: [
                {
          type: "paragraph",
          content:
            "To protect the integrity of the Platform, comply with applicable laws, satisfy Payment Provider requirements, and manage financial crime risk, OCTOREQ may prohibit certain industries, products, services, business models, or activities from accessing or using the Services.",
        },

        {
          type: "paragraph",
          content:
            "The categories listed below are illustrative and may be updated from time to time in response to changes in law, regulatory expectations, Payment Provider requirements, industry standards, or OCTOREQ's internal risk assessments.",
        },

        {
          type: "paragraph",
          content:
            "Unless expressly approved in writing by OCTOREQ, users must not use the Services in connection with businesses or activities involving:",
        },

        {
          type: "list",
          content: [
            "illegal goods or services;",
            "counterfeit products;",
            "stolen property;",
            "money laundering or terrorist financing;",
            "fraudulent investment or financial schemes;",
            
            "unauthorized money transmission or payment processing;",
            "unlicensed financial services;",
            "shell banks or prohibited financial institutions;",
            "sanctioned persons, entities, or jurisdictions where prohibited by applicable law;",
            "human trafficking, forced labor, or exploitation;",
            "child exploitation or child sexual abuse material;",
            "unauthorized lotteries or games of chance;",
            "the sale or distribution of illegal drugs or controlled substances;",
            "illegal pharmaceuticals or counterfeit medicines;",
            "weapons or other regulated items where prohibited by law;",
            "wildlife trafficking or trade in protected species;",
            "environmental crimes or illegal natural resource extraction;",
            "the sale of stolen digital assets or compromised accounts;",
            "cybercrime services, malware distribution, ransomware operations, or hacking services;",
            "identity theft or document forgery;",
            "activities that facilitate tax evasion or financial crime;",
            "activities prohibited by applicable Payment Providers; or",
            "any other business or activity that OCTOREQ reasonably determines presents unacceptable legal, regulatory, financial, operational, reputational, or security risk.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may require additional information, licensing documentation, regulatory approvals, enhanced due diligence, or ongoing compliance reviews before permitting certain regulated or higher-risk businesses to access specific Services.",
        },

        {
          type: "paragraph",
          content:
            "Approval of a Merchant, Partner, or business category at onboarding does not constitute a continuing guarantee of eligibility. OCTOREQ may suspend, restrict, or terminate access to the Services if a business subsequently becomes prohibited or presents unacceptable risk under this Policy or applicable law.",
        },
      ],
    },

    {
      id: "payment-integrity",
      title: "6. Payment Integrity",

      blocks: [
        {
          type: "paragraph",
          content:
            "Users must conduct payment activities honestly, transparently, and in accordance with applicable law, Payment Provider requirements, and OCTOREQ's operational standards. All payment activity must accurately reflect legitimate commercial transactions and must not be used to disguise, facilitate, or support unlawful conduct.",
        },

        {
          type: "paragraph",
          content:
            "Users must not:",
        },

        {
          type: "list",
          content: [
            "submit fictitious or fabricated transactions;",
            "artificially inflate payment volumes;",
            "process transactions unrelated to legitimate goods or services;",
            "split transactions to circumvent limits or monitoring controls;",
            "process payments on behalf of undisclosed third parties without authorization;",
            "misrepresent the nature, value, origin, or destination of funds;",
            "attempt to manipulate settlement timing or payment routing;",
            "knowingly submit transactions likely to result in excessive disputes or chargebacks;",
            "circumvent fraud prevention or risk management controls;",
            "use the Services to conceal the movement or ownership of funds; or",
            "engage in any activity intended to undermine the integrity, transparency, or reliability of the payment ecosystem.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ reserves the right to delay, review, reject, suspend, or report transactions where reasonably necessary to investigate suspected fraud, comply with legal or regulatory obligations, satisfy Payment Provider requirements, protect users, or preserve the integrity of the Platform.",
        },
      ],
    },

    {
      id: "api-platform-security",
      title: "7. API & Platform Security",

      blocks: [
                {
          type: "paragraph",
          content:
            "The security of the OCTOREQ Platform depends upon the responsible use of our APIs, infrastructure, authentication systems, developer tools, and related technologies. Users are responsible for implementing appropriate security measures when integrating with or accessing the Services.",
        },

        {
          type: "paragraph",
          content:
            "Users accessing the Platform through APIs, SDKs, webhooks, or other technical integrations must comply with OCTOREQ's technical documentation, security requirements, authentication standards, and applicable integration guidelines.",
        },

        {
          type: "paragraph",
          content:
            "Users must not:",
        },

        {
          type: "list",
          content: [
            "share API credentials, authentication tokens, or access keys with unauthorized persons;",
            "attempt to bypass authentication or authorization mechanisms;",
            "circumvent API rate limits or security controls;",
            "use automated systems to interfere with Platform performance;",
            "exploit vulnerabilities for unauthorized purposes;",
            "attempt to gain access to systems, networks, databases, or resources beyond those expressly authorized;",
            "intercept, modify, or tamper with communications between OCTOREQ systems and authorized users;",
            "disable, remove, or interfere with Platform security features;",
            "use compromised credentials or unauthorized access methods;",
            "introduce malicious code or insecure software into Platform integrations;",
            "misrepresent API requests or transaction data;",
            "perform unauthorized penetration testing or vulnerability scanning;",
            "reverse engineer proprietary APIs except where such restrictions cannot lawfully be limited; or",
            "use the Platform in any manner that could reasonably compromise its confidentiality, integrity, availability, or security.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Users are responsible for maintaining the confidentiality of account credentials, API keys, webhook secrets, encryption keys, authentication tokens, and all other security credentials issued by OCTOREQ. Any actual or suspected compromise must be reported to OCTOREQ without undue delay.",
        },
      ],
    },

    {
      id: "intellectual-property",
      title: "8. Intellectual Property & Content",

      blocks: [
        {
          type: "paragraph",
          content:
            "Users must respect the intellectual property rights, proprietary technologies, confidential information, and other legal rights of OCTOREQ and third parties when accessing or using the Services.",
        },

        {
          type: "paragraph",
          content:
            "Users must not:",
        },

        {
          type: "list",
          content: [
            "copy, reproduce, distribute, or commercially exploit OCTOREQ materials except as expressly authorized;",
            "remove or alter copyright, trademark, or proprietary notices;",
            "upload or distribute content that infringes the intellectual property rights of another person;",
            "misrepresent ownership of content, software, documentation, or technology;",
            "submit confidential information belonging to another party without authorization;",
            "use OCTOREQ trademarks, branding, logos, or marketing materials without prior written permission except where expressly permitted;",
            "publish false or misleading statements regarding OCTOREQ or its Services;",
            "use the Services to distribute unlawful, defamatory, abusive, fraudulent, or infringing content; or",
            "otherwise violate the intellectual property, privacy, publicity, or proprietary rights of any individual or organization.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Users remain responsible for ensuring that all content submitted through the Services is lawful, accurate, appropriately authorized, and does not infringe the rights of any third party.",
        },
      ],
    },

    {
      id: "monitoring-enforcement",
      title: "9. Monitoring & Enforcement",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may monitor use of the Services, investigate suspected violations of this Policy, and take appropriate action where reasonably necessary to protect the Platform, comply with legal obligations, satisfy Payment Provider requirements, or safeguard the interests of Merchants, Partners, Customers, and other users.",
        },

        {
          type: "paragraph",
          content:
            "Where permitted by applicable law, OCTOREQ may:",
        },

        {
          type: "list",
          content: [
            "request additional information or documentation;",
            "conduct compliance or security reviews;",
            "temporarily suspend access to all or part of the Services;",
            "restrict specific Platform functionality;",
            "delay or reject transactions pending investigation;",
            "remove or disable content;",
            "require corrective actions before restoring access;",
            "terminate Accounts or business relationships;",
            "report suspected unlawful activity to Payment Providers, regulators, law enforcement agencies, or other competent authorities;",
            "cooperate with lawful investigations;",
            "recover losses arising from violations where permitted by law; and",
            "exercise any additional rights available under applicable agreements or law.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Nothing in this Policy limits any rights or remedies available to OCTOREQ under the Terms of Service, applicable agreements, or applicable law.",
        },
      ],
    },

    {
      id: "reporting-violations",
      title: "10. Reporting Violations",

      blocks: [
        {
          type: "paragraph",
          content:
            "Users are encouraged to promptly report suspected violations of this Policy, security concerns, fraudulent activity, abuse, or other conduct that may threaten the integrity of the Platform or the safety of its users.",
        },

        {
          type: "paragraph",
          content:
            "Reports should include sufficient information to enable OCTOREQ to investigate the matter effectively. Where appropriate, reports may be submitted confidentially, and OCTOREQ will handle them in accordance with applicable law and its internal compliance procedures.",
        },
      ],
    },

    {
      id: "changes",
      title: "11. Changes to this Policy",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may modify or update this Acceptable Use Policy from time to time to reflect changes in applicable law, regulatory requirements, industry standards, security practices, Payment Provider requirements, business operations, or the Services.",
        },

        {
          type: "paragraph",
          content:
            "When material changes are made, OCTOREQ may update the effective date and version number, publish the revised Policy on the Platform, or provide additional notice where required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Continued access to or use of the Services after an updated Policy becomes effective constitutes acknowledgment of the revised Policy to the extent permitted by applicable law.",
        },
      ],
    },

    {
      id: "contact",
      title: "12. Contact Information",

      blocks: [
        {
          type: "paragraph",
          content:
            "Questions, concerns, or reports relating to this Acceptable Use Policy may be submitted using the contact information published on OCTOREQ's official website.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to maintaining a secure, compliant, reliable, and trustworthy payment ecosystem through responsible governance, effective risk management, and consistent enforcement of this Policy.",
        },
      ],
    },
  ],
};

export default acceptableUse;