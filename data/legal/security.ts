import { LegalDocument } from "@/types/legal";

const security: LegalDocument = {
  title: "Security",
  description:
    "Learn how OCTOREQ protects its platform, merchants, partners, and payment data through industry-standard security practices, monitoring, encryption, and operational controls.",
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
            "Security is a foundational principle of OCTOREQ's platform. We are committed to protecting the confidentiality, integrity, and availability of our systems, payment infrastructure, merchant information, and customer data through a comprehensive and continuously evolving security program.",
        },

        {
          type: "paragraph",
          content:
            "As a payment orchestration platform, OCTOREQ recognizes the critical importance of maintaining a secure environment for merchants, partners, payment providers, and other stakeholders. Our security practices are designed to reduce risk, support regulatory compliance, and help maintain the reliability of our services while adapting to emerging threats and evolving industry standards.",
        },

        {
          type: "paragraph",
          content:
            "Security at OCTOREQ is implemented through multiple layers of technical, administrative, and operational safeguards. Rather than relying on a single control, we apply a defense-in-depth approach that incorporates preventive, detective, and responsive measures across our infrastructure, applications, personnel, and operational processes.",
        },

        {
          type: "paragraph",
          content:
            "This Security Overview describes the principles and practices that guide OCTOREQ's security program. It is intended to provide transparency regarding our security approach and does not create contractual guarantees, certifications, or commitments beyond those expressly stated in applicable agreements.",
        },
      ],
    },

    {
      id: "security-principles",
      title: "2. Security Principles",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ's security program is guided by established security principles that influence how we design, develop, deploy, and operate our platform. These principles support consistent decision-making and promote a proactive approach to managing security risks throughout the organization.",
        },

        {
          type: "paragraph",
          content:
            "Our security philosophy is built upon the following core principles:",
        },

        {
          type: "list",
          content: [
            "defense in depth through multiple complementary security controls;",
            "least privilege by limiting access to only what is necessary for authorized responsibilities;",
            "secure-by-design development practices that incorporate security throughout the software lifecycle;",
            "privacy by design when handling personal and business information;",
            "continuous monitoring and ongoing improvement of security controls;",
            "risk-based decision making that prioritizes the protection of critical assets;",
            "accountability through documented security policies, procedures, and auditability;",
            "operational resilience to support reliable service delivery during security events; and",
            "continuous adaptation to evolving threats, technologies, and regulatory expectations.",
          ],
        },

        {
          type: "paragraph",
          content:
            "These principles are regularly reviewed and refined as OCTOREQ's platform, products, regulatory obligations, and threat landscape continue to evolve.",
        },
      ],
    },

    {
      id: "infrastructure-security",
      title: "3. Infrastructure Security",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ employs multiple layers of infrastructure security designed to protect the systems that power our platform. Our infrastructure is built using modern cloud technologies and security best practices intended to support availability, resilience, and protection against unauthorized access.",
        },

        {
          type: "paragraph",
          content:
            "Infrastructure security measures may include:",
        },

        {
          type: "list",
          content: [
            "network segmentation and isolation of critical services;",
            "firewalls and controlled network access;",
            "encrypted communications between internal and external services;",
            "secure configuration standards for servers and cloud resources;",
            "continuous infrastructure monitoring and health checks;",
            "distributed denial-of-service (DDoS) mitigation capabilities provided through trusted infrastructure providers where applicable;",
            "redundant infrastructure components designed to improve service resilience;",
            "secure domain, DNS, and network management practices;",
            "controlled administrative access to production environments; and",
            "regular review of infrastructure configurations to identify opportunities for security improvement.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Infrastructure security controls are periodically evaluated and enhanced to address changes in technology, operational requirements, and emerging security threats.",
        },
      ],
    },
        {
      id: "encryption-data-protection",
      title: "4. Encryption & Data Protection",

      blocks: [
        {
          type: "paragraph",
          content:
            "Protecting sensitive information is a core component of OCTOREQ's security program. We implement technical and organizational measures designed to safeguard payment data, merchant information, personal data, authentication credentials, and other confidential information throughout its lifecycle.",
        },

        {
          type: "paragraph",
          content:
            "Our data protection strategy incorporates industry-standard encryption technologies, secure storage practices, controlled access mechanisms, and data minimization principles to reduce the risk of unauthorized disclosure, alteration, or loss of information.",
        },

        {
          type: "paragraph",
          content:
            "Security measures may include:",
        },

        {
          type: "list",
          content: [
            "encryption of data transmitted across public networks using modern Transport Layer Security (TLS) protocols;",
            "encryption of sensitive information stored within supported production environments where appropriate;",
            "secure management of cryptographic keys and secrets;",
            "password protection using strong one-way hashing algorithms rather than storing plaintext passwords;",
            "restricted access to encryption keys and sensitive credentials;",
            "secure storage and handling of application secrets, API credentials, and authentication tokens;",
            "data minimization practices that limit the collection and retention of unnecessary information;",
            "controlled backup procedures designed to preserve data integrity and availability; and",
            "periodic review of encryption and data protection practices to align with evolving security standards.",
          ],
        },

        {
          type: "paragraph",
          content:
            "While OCTOREQ employs reasonable security safeguards, no method of electronic transmission or storage can be guaranteed to be completely secure. Security controls are therefore continuously reviewed and strengthened as technologies and threats evolve.",
        },
      ],
    },

    {
      id: "identity-access-management",
      title: "5. Identity & Access Management",

      blocks: [
        {
          type: "paragraph",
          content:
            "Access to OCTOREQ systems and operational environments is managed through layered identity and access management controls designed to ensure that only authorized individuals are granted access to systems and information necessary for their responsibilities.",
        },

        {
          type: "paragraph",
          content:
            "Access management practices may include:",
        },

        {
          type: "list",
          content: [
            "role-based access control (RBAC) aligned with operational responsibilities;",
            "application of the principle of least privilege for administrative and operational access;",
            "multi-factor authentication (MFA) for privileged accounts where supported;",
            "strong password and credential management requirements;",
            "controlled onboarding, modification, and removal of user access;",
            "periodic access reviews and permission validation;",
            "secure session management and authentication controls;",
            "monitoring of privileged account activity;",
            "credential rotation and secure management of administrative accounts; and",
            "immediate revocation of access where operationally appropriate following changes in authorization status.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Administrative access to production systems is limited to authorized personnel with legitimate business requirements, and access activities may be logged for security monitoring, auditing, and incident investigation purposes.",
        },
      ],
    },

    {
      id: "application-security",
      title: "6. Application Security",

      blocks: [
        {
          type: "paragraph",
          content:
            "Security is integrated throughout the software development lifecycle at OCTOREQ. We seek to identify, evaluate, and address security risks during the design, development, testing, deployment, and maintenance of our applications and services.",
        },

        {
          type: "paragraph",
          content:
            "Application security practices may include:",
        },

        {
          type: "list",
          content: [
            "secure software development lifecycle (Secure SDLC) practices;",
            "peer code reviews prior to deployment where appropriate;",
            "dependency and third-party package management;",
            "timely remediation of identified security vulnerabilities based on risk;",
            "security-focused testing before production deployment;",
            "application logging and audit capabilities;",
            "secure API authentication and authorization mechanisms;",
            "input validation and output encoding to reduce common web application risks;",
            "adherence to recognized secure coding principles, including guidance from the OWASP community where appropriate;",
            "secure handling of application configuration and secrets; and",
            "ongoing maintenance and security improvements following deployment.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Application security is treated as a continuous process rather than a one-time activity. Security assessments, improvements, and maintenance efforts are performed on an ongoing basis to support the reliability and resilience of the OCTOREQ platform.",
        },
      ],
    },
 {
      id: "monitoring-threat-detection",
      title: "7. Monitoring & Threat Detection",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ maintains monitoring and security detection capabilities designed to identify operational issues, suspicious activity, unauthorized access attempts, and other events that may affect the confidentiality, integrity, or availability of our platform. Continuous visibility into our systems supports timely investigation and response to potential security incidents.",
        },

        {
          type: "paragraph",
          content:
            "Monitoring and threat detection practices may include:",
        },

        {
          type: "list",
          content: [
            "centralized collection and analysis of security and operational logs;",
            "continuous monitoring of infrastructure and application health;",
            "real-time alerting for critical security events where appropriate;",
            "audit logging of significant administrative and operational activities;",
            "fraud detection and transaction monitoring controls;",
            "monitoring for abnormal authentication or access patterns;",
            "performance monitoring to identify operational anomalies;",
            "security analytics to support threat identification and investigation;",
            "retention of relevant logs in accordance with operational and legal requirements; and",
            "ongoing refinement of monitoring capabilities based on evolving threats and operational experience.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Monitoring activities are designed to improve operational resilience, support incident investigations, and strengthen the overall security posture of the OCTOREQ platform.",
        },
      ],
    },

    {
      id: "incident-response",
      title: "8. Incident Response",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ maintains incident response procedures designed to identify, assess, contain, investigate, and remediate security incidents in a structured and timely manner. Our objective is to minimize operational disruption, protect affected systems, and reduce the potential impact of security events.",
        },

        {
          type: "paragraph",
          content:
            "Incident response activities may include:",
        },

        {
          type: "list",
          content: [
            "identification and validation of suspected security incidents;",
            "containment measures to limit the scope and impact of an incident;",
            "investigation and root cause analysis;",
            "eradication of identified threats where appropriate;",
            "restoration of affected services through controlled recovery procedures;",
            "preservation of relevant evidence to support investigation and compliance obligations;",
            "internal coordination among technical, operational, legal, and compliance personnel as appropriate;",
            "notification to affected parties or regulatory authorities where required by applicable law or contractual obligations; and",
            "post-incident reviews to identify lessons learned and opportunities for continuous improvement.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Security incidents are evaluated based on their nature, scope, potential impact, and applicable legal or regulatory requirements. Response procedures are periodically reviewed and refined to improve organizational preparedness.",
        },
      ],
    },

    {
      id: "business-continuity",
      title: "9. Business Continuity & Disaster Recovery",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ recognizes the importance of maintaining service availability and operational resilience. Our business continuity and disaster recovery practices are designed to support the restoration of critical services following disruptive events while protecting the integrity of systems and data.",
        },

        {
          type: "paragraph",
          content:
            "Business continuity measures may include:",
        },

        {
          type: "list",
          content: [
            "regular backup of critical systems and operational data;",
            "redundant infrastructure where appropriate to improve service availability;",
            "documented disaster recovery procedures;",
            "defined recovery priorities for critical services;",
            "secure storage of backup data;",
            "periodic validation of backup and recovery processes;",
            "business continuity planning for essential operational functions;",
            "procedures for responding to significant service disruptions; and",
            "continuous review and improvement of resilience strategies as operational requirements evolve.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Although OCTOREQ implements measures intended to improve resilience and service continuity, no technology environment can guarantee uninterrupted availability under all circumstances, including events beyond reasonable operational control.",
        },
      ],
    },

    {
      id: "third-party-security",
      title: "10. Third-Party Security",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ works with carefully selected third-party service providers, including cloud infrastructure providers, payment providers, communication services, and other technology partners that support the delivery of our platform. We recognize that third-party relationships form an important part of our overall security posture.",
        },

        {
          type: "paragraph",
          content:
            "Third-party security practices may include:",
        },

        {
          type: "list",
          content: [
            "security and risk assessments during vendor selection where appropriate;",
            "evaluation of provider reliability and operational capabilities;",
            "review of contractual security obligations where applicable;",
            "ongoing assessment of material third-party relationships;",
            "limiting third-party access to only the systems and information necessary for authorized services;",
            "monitoring significant provider performance and security developments;",
            "maintaining contingency planning for critical service dependencies; and",
            "periodic reassessment of third-party risks as business operations evolve.",
          ],
        },

        {
          type: "paragraph",
          content:
            "While OCTOREQ carefully evaluates its service providers, each provider maintains responsibility for securing its own infrastructure and services in accordance with applicable agreements and industry practices.",
        },
      ],
    },

    {
      id: "responsible-disclosure",
      title: "11. Responsible Disclosure",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ encourages security researchers, customers, merchants, partners, and members of the security community to responsibly report potential security vulnerabilities affecting our platform. Responsible disclosure helps us identify, investigate, and remediate security issues in a timely and coordinated manner.",
        },

        {
          type: "paragraph",
          content:
            "Individuals submitting security reports are encouraged to act in good faith and avoid activities that could disrupt services, compromise user privacy, access data without authorization, or violate applicable laws.",
        },

        {
          type: "paragraph",
          content:
            "When reporting a potential vulnerability, we encourage providing sufficient information to help our security team reproduce, assess, and investigate the issue effectively.",
        },

        {
          type: "list",
          content: [
            "a clear description of the suspected vulnerability;",
            "steps required to reproduce the issue where applicable;",
            "the affected system, application, or endpoint;",
            "supporting screenshots, logs, or technical evidence where appropriate; and",
            "contact information for follow-up communication if desired.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ reviews responsible vulnerability reports in good faith and seeks to investigate credible submissions as resources and operational priorities permit. Public disclosure of unresolved vulnerabilities prior to remediation is discouraged to help protect merchants, customers, and the platform.",
        },
      ],
    },

    {
      id: "security-updates",
      title: "12. Security Updates",

      blocks: [
        {
          type: "paragraph",
          content:
            "Security is an ongoing process. OCTOREQ continually evaluates its security practices, technologies, operational procedures, and risk management strategies to address evolving threats, regulatory developments, and changes to our platform.",
        },

        {
          type: "paragraph",
          content:
            "This Security Overview may be updated periodically to reflect improvements to our security program, changes in infrastructure, operational practices, legal requirements, or industry standards. The most current version will be published through OCTOREQ's official website.",
        },
      ],
    },

    {
      id: "contact",
      title: "13. Contact Information",

      blocks: [
        {
          type: "paragraph",
          content:
            "Questions regarding OCTOREQ's security practices, responsible disclosure, or other security-related matters may be submitted using the contact information published on OCTOREQ's official website.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ remains committed to maintaining a secure, resilient, and trustworthy payment orchestration platform through continuous improvement, responsible governance, and collaboration with merchants, partners, payment providers, and the broader security community.",
        },
      ],
    },
  ],
};

export default security;