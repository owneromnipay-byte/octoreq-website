import { LegalDocument } from "@/types/legal";

const apiTerms: LegalDocument = {
  title: "API Terms of Use",
  description:
    "These API Terms of Use govern access to and use of the OCTOREQ APIs, SDKs, webhooks, developer tools, and related technical services.",
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
            "These API Terms of Use (\"API Terms\") govern access to and use of the OCTOREQ application programming interfaces (APIs), software development kits (SDKs), webhooks, developer portal, technical documentation, sandbox environments, and related developer services (collectively, the \"Developer Services\").",
        },

        {
          type: "paragraph",
          content:
            "By accessing or using any OCTOREQ Developer Services, you agree to be bound by these API Terms, the OCTOREQ Terms of Service, Privacy Policy, Acceptable Use Policy, Merchant Agreement where applicable, and any additional documentation or technical requirements published by OCTOREQ from time to time.",
        },

        {
          type: "paragraph",
          content:
            "These API Terms apply to every individual, business, merchant, partner, contractor, or organization that develops, integrates, tests, maintains, or operates applications or services using the OCTOREQ platform.",
        },

        {
          type: "paragraph",
          content:
            "If you do not agree to these API Terms, you must not access or use the Developer Services.",
        },
      ],
    },

    {
      id: "eligibility-registration",
      title: "2. Eligibility & Registration",

      blocks: [
        {
          type: "paragraph",
          content:
            "Access to OCTOREQ Developer Services is available only to eligible individuals and organizations that satisfy applicable registration, verification, and compliance requirements established by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "To obtain API access, developers may be required to create a Developer or Merchant account, provide accurate registration information, complete identity or business verification where applicable, and comply with all applicable laws and OCTOREQ policies.",
        },

        {
          type: "paragraph",
          content:
            "Developers are responsible for ensuring that all registration information remains complete, accurate, and up to date throughout their use of the Developer Services.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ reserves the right to approve, deny, suspend, restrict, or revoke Developer Service access where reasonably necessary to protect the platform, comply with legal or regulatory obligations, satisfy Payment Provider requirements, or address security, operational, or compliance risks.",
        },

        {
          type: "paragraph",
          content:
            "Developer accounts are intended for legitimate business, testing, and software development purposes. Access may not be obtained through false identities, fraudulent information, unauthorized account sharing, or any attempt to circumvent OCTOREQ's registration or security controls.",
        },
      ],
    },

    {
      id: "api-access-license",
      title: "3. API Access & License",

      blocks: [
        {
          type: "paragraph",
          content:
            "Subject to these API Terms, OCTOREQ grants you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to access and use the Developer Services solely for the purpose of integrating your applications or systems with the OCTOREQ platform in accordance with our documentation and applicable agreements.",
        },

        {
          type: "paragraph",
          content:
            "This license grants only the rights expressly described in these API Terms. All rights not expressly granted remain reserved by OCTOREQ and its licensors.",
        },

        {
          type: "paragraph",
          content:
            "Your use of the Developer Services must remain consistent with the intended functionality of the APIs and technical documentation. You may not access or use the Developer Services in any manner that exceeds authorized permissions or violates applicable agreements.",
        },

        {
          type: "paragraph",
          content:
            "Except as expressly permitted by applicable law or these API Terms, you shall not:",
        },

        {
          type: "list",
          content: [
            "license, sublicense, sell, lease, or redistribute access to the Developer Services;",
            "copy, modify, or create unauthorized derivative works of OCTOREQ APIs, SDKs, or technical documentation;",
            "reverse engineer, decompile, or attempt to discover non-public components of the Developer Services except where such restrictions are prohibited by applicable law;",
            "remove proprietary notices or attribution contained within the Developer Services;",
            "use the Developer Services for unlawful, fraudulent, or deceptive purposes;",
            "attempt to access systems, endpoints, or resources that have not been made available to you;",
            "circumvent authentication, authorization, rate limiting, or security controls; or",
            "use the Developer Services in a manner that could reasonably interfere with the operation, security, or reliability of the OCTOREQ platform.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Access to the Developer Services does not transfer ownership of any OCTOREQ intellectual property, software, documentation, APIs, trademarks, or proprietary technology.",
        },
      ],
    },
        {
      id: "api-keys-authentication",
      title: "4. API Keys & Authentication",

      blocks: [
        {
          type: "paragraph",
          content:
            "Access to OCTOREQ APIs requires valid authentication credentials issued by OCTOREQ. API credentials are intended to identify authorized applications and help protect the integrity, confidentiality, and security of the Developer Services.",
        },

        {
          type: "paragraph",
          content:
            "Developers are solely responsible for safeguarding API keys, access tokens, client secrets, webhook signing secrets, and other authentication credentials issued for their accounts. Credentials must be treated as confidential information and protected against unauthorized access or disclosure.",
        },

        {
          type: "paragraph",
          content:
            "Developers shall:",
        },

        {
          type: "list",
          content: [
            "store API credentials securely using appropriate secrets management practices;",
            "avoid embedding credentials in publicly accessible source code or client-side applications where inappropriate;",
            "implement appropriate access controls for development and production environments;",
            "rotate credentials periodically or whenever compromise is reasonably suspected;",
            "immediately notify OCTOREQ if credentials are lost, exposed, or believed to be compromised;",
            "use separate credentials where appropriate for testing and production environments;",
            "limit internal access to authorized personnel with legitimate business needs; and",
            "comply with all authentication requirements described in OCTOREQ's technical documentation.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may suspend, rotate, revoke, or replace API credentials where reasonably necessary to protect platform security, investigate suspected abuse, comply with legal obligations, or respond to security incidents.",
        },
      ],
    },

    {
      id: "acceptable-api-use",
      title: "5. Acceptable API Use",

      blocks: [
        {
          type: "paragraph",
          content:
            "Developers shall use the Developer Services only for lawful purposes and in accordance with these API Terms, applicable laws, the OCTOREQ Acceptable Use Policy, and any technical requirements published by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "Developers must not use the Developer Services to engage in activities that compromise platform security, interfere with service availability, or violate the rights of OCTOREQ, its merchants, customers, partners, or third parties.",
        },

        {
          type: "paragraph",
          content:
            "Without limitation, Developers shall not:",
        },

        {
          type: "list",
          content: [
            "access APIs using unauthorized or compromised credentials;",
            "attempt to bypass authentication, authorization, or security controls;",
            "reverse engineer, probe, scan, or exploit non-public API functionality;",
            "perform vulnerability scanning or penetration testing without prior written authorization from OCTOREQ;",
            "introduce malware, malicious code, ransomware, spyware, or other harmful software;",
            "interfere with or disrupt the availability, integrity, or performance of the Developer Services;",
            "use automated systems to generate abusive or excessive API traffic;",
            "scrape, harvest, or collect information beyond authorized API functionality;",
            "use the APIs to facilitate unlawful, fraudulent, deceptive, or abusive activities;",
            "misrepresent API responses, transaction statuses, or payment results;",
            "circumvent payment processing rules or compliance controls; or",
            "otherwise use the Developer Services in a manner that could reasonably harm OCTOREQ, its users, or the broader payment ecosystem.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Developers remain responsible for all activity performed using their API credentials, including actions performed by employees, contractors, service providers, or integrated systems acting on their behalf.",
        },
      ],
    },

    {
      id: "rate-limits-fair-usage",
      title: "6. Rate Limits & Fair Usage",

      blocks: [
        {
          type: "paragraph",
          content:
            "To promote platform stability, reliability, and equitable access for all users, OCTOREQ may apply rate limits, request quotas, concurrency limits, bandwidth restrictions, or other technical controls to the Developer Services.",
        },

        {
          type: "paragraph",
          content:
            "Applicable limits may vary based on account type, integration environment, service tier, operational requirements, risk assessments, or other factors determined by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may temporarily throttle, delay, reject, or otherwise limit API requests where reasonably necessary to protect platform availability, investigate suspected abuse, respond to security events, perform maintenance, or preserve service reliability.",
        },

        {
          type: "paragraph",
          content:
            "Developers are expected to design integrations that use the APIs responsibly and efficiently. Recommended practices include:",
        },

        {
          type: "list",
          content: [
            "respecting published rate limits and technical guidance;",
            "implementing exponential backoff and retry logic where appropriate;",
            "avoiding unnecessary polling through efficient use of webhooks where available;",
            "handling API errors gracefully without generating excessive retry traffic;",
            "testing integrations responsibly within supported sandbox environments; and",
            "promptly addressing integration issues that generate abnormal or excessive request volumes.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Temporary enforcement of rate limits or other fair usage controls does not constitute a breach of these API Terms and may occur without prior notice where reasonably necessary to protect the Developer Services.",
        },
      ],
    },
        {
      id: "webhooks",
      title: "7. Webhooks",

      blocks: [
        {
          type: "paragraph",
          content:
            "Certain OCTOREQ services utilize webhooks to notify Developers of payment events, account updates, settlement activities, and other platform events. Developers are responsible for implementing webhook endpoints securely and processing webhook events in accordance with OCTOREQ's technical documentation.",
        },

        {
          type: "paragraph",
          content:
            "To help maintain the integrity of webhook communications, Developers should implement appropriate verification and security controls before accepting or processing webhook requests.",
        },

        {
          type: "paragraph",
          content:
            "Developers are expected to:",
        },

        {
          type: "list",
          content: [
            "serve webhook endpoints over HTTPS;",
            "validate webhook signatures or authentication mechanisms where supported;",
            "verify the authenticity and integrity of received webhook events;",
            "implement idempotent processing to safely handle duplicate event deliveries;",
            "respond to webhook requests within recommended timeframes;",
            "securely store webhook signing secrets and authentication credentials;",
            "maintain reasonable availability of webhook endpoints;",
            "properly handle retry attempts from OCTOREQ where applicable; and",
            "protect webhook endpoints from unauthorized access or abuse.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ is not responsible for failed webhook processing resulting from unavailable endpoints, incorrect implementations, configuration errors, expired credentials, or failures within systems operated by the Developer or third parties.",
        },
      ],
    },

    {
      id: "api-availability",
      title: "8. API Availability & Changes",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ continuously improves its Developer Services to enhance functionality, performance, security, and reliability. As part of this process, APIs, SDKs, documentation, and related technical services may be updated, modified, replaced, or discontinued from time to time.",
        },

        {
          type: "paragraph",
          content:
            "While OCTOREQ strives to provide reliable and stable Developer Services, uninterrupted availability cannot be guaranteed. Temporary interruptions may occur as a result of scheduled maintenance, emergency maintenance, security events, infrastructure failures, third-party service disruptions, regulatory requirements, or circumstances beyond OCTOREQ's reasonable control.",
        },

        {
          type: "paragraph",
          content:
            "Where reasonably practicable, OCTOREQ may provide advance notice of material API changes, version deprecations, or planned maintenance that could significantly affect Developer integrations.",
        },

        {
          type: "paragraph",
          content:
            "Developers are responsible for:",
        },

        {
          type: "list",
          content: [
            "maintaining compatibility with supported API versions;",
            "reviewing updated technical documentation and release notes;",
            "testing integrations before deploying significant changes to production;",
            "promptly migrating from deprecated API versions within announced timelines where applicable;",
            "maintaining appropriate monitoring for production integrations; and",
            "ensuring their applications continue to comply with current OCTOREQ technical requirements.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may discontinue unsupported API versions after providing any notice required by applicable law, contractual obligations, or published developer policies.",
        },
      ],
    },

    {
      id: "security-requirements",
      title: "9. Security Requirements",

      blocks: [
        {
          type: "paragraph",
          content:
            "Developers are responsible for implementing reasonable security measures to protect applications, systems, credentials, and customer information that interact with the OCTOREQ platform. Secure integration practices contribute to the overall safety and reliability of the payment ecosystem.",
        },

        {
          type: "paragraph",
          content:
            "Security expectations may include:",
        },

        {
          type: "list",
          content: [
            "using HTTPS for all communications involving OCTOREQ APIs;",
            "encrypting sensitive data where appropriate during transmission and storage;",
            "protecting API credentials from unauthorized access or disclosure;",
            "implementing appropriate authentication and authorization controls within integrated applications;",
            "maintaining secure software development and deployment practices;",
            "monitoring applications for suspicious or unauthorized activity;",
            "maintaining appropriate logging for security investigations and operational troubleshooting;",
            "promptly applying security updates to systems interacting with OCTOREQ APIs;",
            "reporting suspected security incidents that may affect OCTOREQ or its users without unreasonable delay; and",
            "cooperating with reasonable security investigations relating to Developer integrations where appropriate.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Developers remain responsible for securing their own infrastructure, applications, networks, personnel, and operational environments. OCTOREQ's security controls do not replace the Developer's independent security responsibilities.",
        },
      ],
    },
        {
      id: "monitoring-enforcement",
      title: "10. Monitoring & Enforcement",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may monitor use of the Developer Services to protect the security, integrity, reliability, and lawful operation of the platform. Monitoring activities are intended to detect abuse, security threats, operational issues, compliance concerns, and other activities that could adversely affect OCTOREQ, its merchants, customers, partners, or third parties.",
        },

        {
          type: "paragraph",
          content:
            "Monitoring and enforcement activities may include:",
        },

        {
          type: "list",
          content: [
            "analysis of API request patterns and operational metrics;",
            "review of authentication and access activity;",
            "detection of excessive, abusive, or anomalous API usage;",
            "security investigations relating to suspected fraud or unauthorized access;",
            "verification of compliance with these API Terms and other applicable agreements;",
            "temporary rate limiting or access restrictions where reasonably necessary;",
            "rotation or revocation of API credentials following suspected compromise;",
            "collection and retention of operational logs for security, auditing, and compliance purposes; and",
            "cooperation with lawful requests from competent regulatory or governmental authorities where required by applicable law.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where appropriate, OCTOREQ may notify Developers regarding identified issues and provide an opportunity to remediate non-compliant activity before taking enforcement action. However, OCTOREQ may immediately restrict or suspend access where reasonably necessary to protect the platform or comply with applicable legal or regulatory obligations.",
        },
      ],
    },

    {
      id: "intellectual-property",
      title: "11. Intellectual Property",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Developer Services, including APIs, SDKs, technical documentation, software, sample code, trademarks, logos, website content, developer tools, and related materials, are owned by OCTOREQ or its licensors and are protected by applicable intellectual property laws.",
        },

        {
          type: "paragraph",
          content:
            "Except for the limited license expressly granted under these API Terms, no ownership rights or intellectual property interests are transferred to Developers through access to or use of the Developer Services.",
        },

        {
          type: "paragraph",
          content:
            "Developers shall not:",
        },

        {
          type: "list",
          content: [
            "copy or distribute proprietary Developer Services except as expressly permitted;",
            "modify or create unauthorized derivative works based upon OCTOREQ intellectual property;",
            "remove or alter proprietary notices or copyright information;",
            "use OCTOREQ trademarks without prior authorization except as permitted under applicable brand guidelines;",
            "misrepresent affiliation with OCTOREQ;",
            "register confusingly similar trademarks, domains, or identifiers; or",
            "otherwise infringe or misappropriate OCTOREQ's intellectual property rights.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Feedback, suggestions, enhancement requests, or other recommendations voluntarily provided to OCTOREQ regarding the Developer Services may be used by OCTOREQ without restriction or obligation, unless otherwise agreed in writing.",
        },
      ],
    },

    {
      id: "disclaimer-limitation",
      title: "12. Disclaimer & Limitation of Liability",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Developer Services are provided on an 'as available' and 'as is' basis, subject to applicable law. While OCTOREQ seeks to provide reliable, secure, and high-quality Developer Services, uninterrupted availability, continuous compatibility, or error-free operation cannot be guaranteed.",
        },

        {
          type: "paragraph",
          content:
            "To the fullest extent permitted by applicable law, OCTOREQ shall not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages, including loss of profits, revenue, goodwill, business opportunities, anticipated savings, or data arising from or relating to the use of the Developer Services.",
        },

        {
          type: "paragraph",
          content:
            "Nothing in these API Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.",
        },
      ],
    },

    {
      id: "suspension-termination",
      title: "13. Suspension & Termination",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may suspend, restrict, revoke, or terminate access to the Developer Services where reasonably necessary to protect platform security, investigate suspected abuse, comply with applicable law, satisfy Payment Provider requirements, or enforce these API Terms and other applicable agreements.",
        },

        {
          type: "paragraph",
          content:
            "Grounds for suspension or termination may include:",
        },

        {
          type: "list",
          content: [
            "breach of these API Terms;",
            "misuse of API credentials;",
            "fraudulent or unlawful activity;",
            "security incidents or compromised credentials;",
            "excessive or abusive API usage;",
            "failure to comply with applicable technical requirements;",
            "violation of OCTOREQ policies or applicable law;",
            "failure to remediate material security issues within a reasonable timeframe where applicable; or",
            "other conduct presenting unacceptable legal, regulatory, operational, or reputational risk.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Termination of API access does not affect obligations that by their nature survive termination, including obligations relating to confidentiality, intellectual property, indemnification, limitation of liability, dispute resolution, and compliance with applicable law.",
        },
      ],
    },

    {
      id: "changes",
      title: "14. Changes to these API Terms",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may modify these API Terms from time to time to reflect changes in the Developer Services, security practices, applicable laws, technical standards, regulatory requirements, or business operations. Updated versions will become effective upon publication or as otherwise communicated where required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Continued use of the Developer Services after updated API Terms become effective constitutes acceptance of the revised terms to the extent permitted by applicable law.",
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
            "Questions regarding these API Terms, Developer Services, API integrations, security matters, or technical compliance may be submitted using the contact information published on OCTOREQ's official website or through the Developer Portal.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to providing secure, reliable, and well-documented Developer Services that enable merchants, partners, and developers to build innovative payment experiences while maintaining high standards of security, compliance, and operational excellence.",
        },
      ],
    },
  ],
};

export default apiTerms;