import { LegalDocument } from "@/types/legal";

const sla: LegalDocument = {
  title: "Service Level Agreement",
  description:
    "This Service Level Agreement describes OCTOREQ's operational objectives, service availability commitments, support processes, maintenance practices, and service management principles for the OCTOREQ platform.",
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
            "This Service Level Agreement (\"SLA\") describes OCTOREQ's operational objectives, service management practices, support processes, maintenance procedures, and availability goals for the services provided through the OCTOREQ platform. This SLA is intended to promote transparency regarding the operation and management of the platform and should be read together with the OCTOREQ Terms of Service, Merchant Agreement, API Terms of Use, and other applicable legal documentation.",
        },

        {
          type: "paragraph",
          content:
            "This SLA applies to merchants, partners, developers, and other authorized users who access OCTOREQ's production services. Certain enterprise customers may operate under separately negotiated service commitments, which will prevail over this SLA to the extent of any inconsistency.",
        },

        {
          type: "paragraph",
          content:
            "The availability objectives described in this SLA represent operational targets rather than guarantees. While OCTOREQ is committed to maintaining reliable and resilient services, uninterrupted availability cannot be guaranteed due to maintenance activities, third-party dependencies, regulatory requirements, security events, or circumstances beyond OCTOREQ's reasonable control.",
        },

        {
          type: "paragraph",
          content:
            "Nothing in this SLA creates additional contractual warranties beyond those expressly provided under applicable agreements or required by law.",
        },
      ],
    },

    {
      id: "covered-services",
      title: "2. Covered Services",

      blocks: [
        {
          type: "paragraph",
          content:
            "This SLA applies to the core production services operated and managed by OCTOREQ. Service availability objectives and operational practices are intended to support the reliable delivery of payment infrastructure while recognizing the role of third-party financial institutions, payment providers, and telecommunications networks.",
        },

        {
          type: "paragraph",
          content:
            "Covered services may include:",
        },

        {
          type: "list",
          content: [
            "Payment orchestration APIs;",
            "Merchant Dashboard;",
            "Partner Portal;",
            "Developer Portal;",
            "Wallet and balance management services;",
            "Payment routing and processing services;",
            "Settlement management services;",
            "Webhook delivery services;",
            "Reporting and transaction history services;",
            "Sandbox and testing environments, where available; and",
            "Other production services identified by OCTOREQ as covered under this SLA.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Certain experimental features, beta services, pilot programs, third-party integrations, or services identified as preview releases may be subject to different operational objectives and may not be covered by this SLA unless expressly stated otherwise.",
        },
      ],
    },

    {
      id: "service-availability",
      title: "3. Service Availability",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to operating a highly available payment infrastructure and continuously improving the reliability of its services. Subject to the exclusions described in this SLA, OCTOREQ targets a monthly service availability objective of up to 99.9% for core production services.",
        },

        {
          type: "paragraph",
          content:
            "Service availability objectives are operational goals designed to guide infrastructure planning, monitoring, redundancy, and continuous improvement. They are not guarantees of uninterrupted or error-free service.",
        },

        {
          type: "paragraph",
          content:
            "Availability calculations may exclude periods affected by:",
        },

        {
          type: "list",
          content: [
            "scheduled maintenance windows;",
            "emergency maintenance required to protect security or platform stability;",
            "failures of third-party payment providers, banks, telecommunications providers, internet service providers, cloud infrastructure providers, or other external dependencies;",
            "customer systems, networks, software, or configuration issues;",
            "force majeure events;",
            "governmental or regulatory actions affecting payment services; and",
            "other exclusions expressly described in this SLA.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ continually invests in redundancy, monitoring, automated recovery, capacity planning, and operational resilience to improve platform availability and minimize service disruptions whenever reasonably practicable.",
        },
      ],
    },
        {
      id: "planned-maintenance",
      title: "4. Planned Maintenance",

      blocks: [
        {
          type: "paragraph",
          content:
            "To maintain the security, reliability, performance, and scalability of the OCTOREQ platform, OCTOREQ periodically performs planned maintenance activities. These activities may include infrastructure upgrades, software deployments, database maintenance, security updates, performance optimizations, and other operational improvements.",
        },

        {
          type: "paragraph",
          content:
            "Where reasonably practicable, OCTOREQ will provide advance notice of planned maintenance that is expected to materially affect production services. Maintenance notifications may be communicated through the Merchant Dashboard, Partner Portal, Developer Portal, official website, email, or other appropriate communication channels.",
        },

        {
          type: "paragraph",
          content:
            "Planned maintenance may involve temporary service interruptions, reduced functionality, or degraded performance. OCTOREQ seeks to schedule maintenance during periods of lower platform activity whenever reasonably feasible in order to minimize operational impact.",
        },

        {
          type: "paragraph",
          content:
            "Emergency maintenance may be performed without prior notice where immediate action is reasonably necessary to address security vulnerabilities, infrastructure failures, regulatory requirements, fraud prevention, or other circumstances that could significantly affect the integrity, availability, or security of the platform.",
        },

        {
          type: "paragraph",
          content:
            "Following maintenance activities, OCTOREQ will work diligently to verify service stability and restore normal operations as quickly as reasonably practicable.",
        },
      ],
    },

    {
      id: "incident-management",
      title: "5. Incident Management",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ maintains operational procedures for identifying, assessing, responding to, and resolving incidents that may affect the availability, integrity, performance, or security of the platform. Incident management processes are designed to minimize disruption while supporting timely restoration of affected services.",
        },

        {
          type: "paragraph",
          content:
            "Incident response activities may include:",
        },

        {
          type: "list",
          content: [
            "continuous monitoring for service disruptions and abnormal activity;",
            "classification and prioritization of incidents based on severity and operational impact;",
            "technical investigation to determine the underlying cause of an incident;",
            "implementation of mitigation measures to reduce customer impact;",
            "coordination among engineering, operations, security, compliance, and support teams where appropriate;",
            "service restoration and verification before returning affected systems to normal operation;",
            "communication with affected users when appropriate; and",
            "post-incident reviews to identify opportunities for operational improvements and future prevention.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Response and resolution times may vary depending on the complexity, scope, severity, external dependencies, regulatory considerations, and technical characteristics of the incident.",
        },
      ],
    },

    {
      id: "support-services",
      title: "6. Support Services",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ provides support services to assist merchants, partners, developers, and authorized users with questions relating to platform usage, technical integrations, operational issues, and service-related inquiries. Support is intended to facilitate the effective use of OCTOREQ services but does not replace the customer's responsibility for managing its own systems and integrations.",
        },

        {
          type: "paragraph",
          content:
            "Support requests may be submitted through communication channels designated by OCTOREQ, including the Merchant Dashboard, Partner Portal, Developer Portal, email, or other officially published support channels.",
        },

        {
          type: "paragraph",
          content:
            "To facilitate efficient investigation and resolution, support requests should include sufficient information where available, including:",
        },

        {
          type: "list",
          content: [
            "merchant or account identification;",
            "transaction or reference identifiers where applicable;",
            "date and time of the issue;",
            "a clear description of the problem;",
            "relevant API request or response details where applicable;",
            "error messages or logs that may assist troubleshooting; and",
            "steps already taken to investigate or reproduce the issue.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ seeks to acknowledge and respond to support requests within commercially reasonable timeframes based on the nature, severity, and priority of the reported issue. Enterprise customers may receive additional support commitments where expressly provided under separate written agreements.",
        },
      ],
    },
        {
      id: "customer-responsibilities",
      title: "7. Customer Responsibilities",

      blocks: [
        {
          type: "paragraph",
          content:
            "Merchants, partners, developers, and other authorized users play an important role in maintaining the secure and reliable operation of their integrations with the OCTOREQ platform. Compliance with applicable documentation, security practices, and operational requirements helps minimize service disruptions and supports efficient incident resolution.",
        },

        {
          type: "paragraph",
          content:
            "Customers are responsible for:",
        },

        {
          type: "list",
          content: [
            "implementing integrations in accordance with OCTOREQ's technical documentation;",
            "protecting API credentials, authentication tokens, webhook secrets, and account access credentials;",
            "maintaining the security of systems, networks, applications, and infrastructure under their control;",
            "testing integrations before deploying significant production changes;",
            "monitoring their applications for failures, abnormal behavior, or security incidents;",
            "promptly reporting suspected platform issues, security concerns, or service disruptions to OCTOREQ;",
            "maintaining accurate account and contact information;",
            "complying with applicable laws, regulations, payment network requirements, and OCTOREQ policies; and",
            "cooperating with reasonable requests during operational investigations or incident response activities.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Failure to fulfill these responsibilities may affect OCTOREQ's ability to investigate incidents, restore services efficiently, or provide technical support within expected response objectives.",
        },
      ],
    },

    {
      id: "performance-monitoring",
      title: "8. Performance & Monitoring",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ continuously monitors the health, availability, performance, and operational status of its production services to promote a reliable payment infrastructure. Monitoring activities support proactive detection of service degradation, infrastructure failures, abnormal transaction patterns, and security-related events.",
        },

        {
          type: "paragraph",
          content:
            "Operational monitoring may include:",
        },

        {
          type: "list",
          content: [
            "infrastructure and application health monitoring;",
            "API performance monitoring;",
            "payment processing performance analysis;",
            "capacity planning and resource utilization monitoring;",
            "security event detection and alerting;",
            "system logging and operational analytics;",
            "availability monitoring across critical platform components;",
            "automated alerting for operational anomalies; and",
            "continuous performance optimization and reliability improvements.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Monitoring data may be used to improve service reliability, support operational investigations, enhance security controls, identify performance bottlenecks, and guide future infrastructure investments. Monitoring activities are conducted in accordance with applicable privacy obligations and OCTOREQ's Privacy Policy.",
        },
      ],
    },

    {
      id: "service-exclusions",
      title: "9. Service Exclusions",

      blocks: [
        {
          type: "paragraph",
          content:
            "This SLA does not apply to service interruptions, degraded performance, or operational issues arising from circumstances outside OCTOREQ's reasonable control or otherwise excluded under applicable agreements.",
        },

        {
          type: "paragraph",
          content:
            "Examples of excluded events include:",
        },

        {
          type: "list",
          content: [
            "scheduled or emergency maintenance;",
            "failures of banks, payment providers, telecommunications providers, cloud infrastructure providers, internet service providers, or other third-party services;",
            "customer-owned hardware, software, infrastructure, or network failures;",
            "customer configuration errors or implementation defects;",
            "unauthorized modifications to supported integrations;",
            "misuse of OCTOREQ services or violations of applicable agreements;",
            "security incidents originating within customer-controlled environments;",
            "distributed denial-of-service (DDoS) attacks or other malicious activities directed at customer infrastructure;",
            "governmental actions, regulatory restrictions, or legal requirements affecting payment operations;",
            "natural disasters, public utility failures, labor disputes, armed conflict, pandemics, or other force majeure events; and",
            "any other circumstance beyond OCTOREQ's reasonable control.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Service interruptions resulting from these exclusions are generally not included when evaluating OCTOREQ's operational availability objectives under this SLA.",
        },
      ],
    },
        {
      id: "service-credits",
      title: "10. Service Credits",

      blocks: [
        {
          type: "paragraph",
          content:
            "Unless expressly agreed in a separate written Enterprise Service Agreement, this SLA does not provide automatic financial compensation, refunds, service credits, or other monetary remedies for temporary service interruptions, degraded performance, or failure to achieve operational availability objectives.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may, at its sole discretion and where appropriate, provide goodwill accommodations or commercial remedies in response to significant service events. Any such accommodation shall not constitute a waiver of OCTOREQ's rights or establish an ongoing obligation to provide similar remedies in future circumstances.",
        },

        {
          type: "paragraph",
          content:
            "Enterprise customers operating under separately negotiated agreements may receive customized service commitments, support objectives, reporting obligations, or service credit provisions as expressly set forth in those agreements. Where a separately negotiated agreement conflicts with this SLA, the negotiated agreement shall prevail to the extent of the inconsistency.",
        },
      ],
    },

    {
      id: "changes",
      title: "11. Changes to this Service Level Agreement",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may update or revise this Service Level Agreement from time to time to reflect changes in technology, operational practices, service offerings, regulatory requirements, security standards, or business operations.",
        },

        {
          type: "paragraph",
          content:
            "Updated versions of this SLA will become effective upon publication on the OCTOREQ website or as otherwise communicated through official communication channels, unless a different effective date is specified or required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Continued use of OCTOREQ services following the effective date of an updated SLA constitutes acceptance of the revised terms to the extent permitted by applicable law.",
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
            "Questions regarding this Service Level Agreement, operational performance, service availability, maintenance activities, incident management, or technical support may be directed through the official OCTOREQ support channels published on the Merchant Dashboard, Partner Portal, Developer Portal, or the OCTOREQ website.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to operating secure, resilient, and scalable payment infrastructure while continuously improving platform reliability, transparency, customer support, and operational excellence through ongoing investment in technology, security, and service management practices.",
        },
      ],
    },
  ],
};

export default sla;