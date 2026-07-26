import { LegalDocument } from "@/types/legal";

const dpa: LegalDocument = {
  title: "Data Processing Agreement",
  description:
    "This Data Processing Agreement governs the processing of Personal Data by OCTOREQ on behalf of its customers in connection with the provision of the OCTOREQ Services.",
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
            "This Data Processing Agreement (\"DPA\") governs the processing of Personal Data by OCTOREQ on behalf of its customers in connection with the provision of the OCTOREQ Services. This DPA forms part of and supplements the OCTOREQ Terms of Service, Merchant Agreement, API Terms of Use, Privacy Policy, and any other applicable agreements between OCTOREQ and the Customer.",
        },

        {
          type: "paragraph",
          content:
            "This DPA applies whenever OCTOREQ processes Personal Data on behalf of a Customer while providing payment orchestration services, payment processing infrastructure, merchant management services, developer tools, partner services, or other services offered through the OCTOREQ platform.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to processing Personal Data lawfully, fairly, transparently, and securely in accordance with applicable data protection laws and recognized industry standards. Both Parties agree to fulfill their respective obligations relating to the protection of Personal Data under this DPA.",
        },

        {
          type: "paragraph",
          content:
            "Nothing in this DPA limits or replaces any mandatory rights or obligations imposed by applicable data protection laws. Where such laws require additional protections, those requirements shall prevail to the extent of any inconsistency with this DPA.",
        },
      ],
    },

    {
      id: "definitions",
      title: "2. Definitions",

      blocks: [
        {
          type: "paragraph",
          content:
            "For purposes of this Data Processing Agreement, the following terms shall have the meanings set out below unless the context requires otherwise.",
        },

        {
          type: "list",
          content: [
            "\"Applicable Data Protection Laws\" means all laws and regulations governing the collection, use, disclosure, storage, transfer, or other processing of Personal Data that apply to the Parties or the Services.",
            "\"Controller\" means the natural or legal person that determines the purposes and means of processing Personal Data, or any equivalent term recognized under applicable data protection laws.",
            "\"Processor\" means the natural or legal person that processes Personal Data on behalf of a Controller, or any equivalent term recognized under applicable data protection laws.",
            "\"Personal Data\" means any information relating to an identified or identifiable natural person, or any equivalent concept recognized under applicable data protection laws.",
            "\"Processing\" means any operation or set of operations performed on Personal Data, whether by automated or non-automated means, including collection, recording, organization, storage, use, disclosure, transmission, retrieval, consultation, combination, restriction, deletion, or destruction.",
            "\"Data Subject\" means an identified or identifiable individual whose Personal Data is processed.",
            "\"Sub-processor\" means any third party engaged by OCTOREQ to process Personal Data on behalf of the Customer in connection with the Services.",
            "\"Security Incident\" means an actual or reasonably suspected unauthorized access to, acquisition of, disclosure of, alteration of, loss of, or destruction of Personal Data, or any event compromising the confidentiality, integrity, or availability of Personal Data.",
            "\"Customer\" means the merchant, partner, developer, business, organization, or other entity receiving the Services under the applicable agreement with OCTOREQ.",
            "\"Services\" means the payment infrastructure, APIs, software, dashboards, developer services, settlement services, reporting tools, and other products or services provided by OCTOREQ under the applicable agreement.",
          ],
        },
      ],
    },

    {
      id: "scope",
      title: "3. Scope",

      blocks: [
        {
          type: "paragraph",
          content:
            "This DPA applies solely to the extent that OCTOREQ processes Personal Data on behalf of the Customer while providing the Services. The processing activities covered by this DPA are limited to those reasonably necessary for the performance, operation, security, support, compliance, and improvement of the Services, as permitted by applicable law and the governing agreement between the Parties.",
        },

        {
          type: "paragraph",
          content:
            "The Services covered by this DPA may include payment processing, payment orchestration, merchant onboarding, transaction management, settlement services, wallet functionality, API integrations, webhook processing, fraud prevention, customer support, reporting, analytics, and other related operational activities provided by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "This DPA applies to Personal Data processed in production, testing, support, operational, and backup environments where such processing is necessary for the delivery, maintenance, security, or lawful operation of the Services.",
        },

        {
          type: "paragraph",
          content:
            "This DPA does not apply where OCTOREQ independently determines the purposes and means of processing Personal Data pursuant to its own legal obligations or legitimate business operations, except to the extent required by applicable data protection laws.",
        },
      ],
    },
        {
      id: "roles-of-the-parties",
      title: "4. Roles of the Parties",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Parties acknowledge that their respective roles with respect to the Processing of Personal Data depend on the nature of the Services provided and the applicable data protection laws governing such Processing.",
        },

        {
          type: "paragraph",
          content:
            "Except where applicable law requires otherwise, the Customer acts as the Controller of the Personal Data submitted to or processed through the Services, while OCTOREQ acts as the Processor, processing Personal Data solely on behalf of and in accordance with the Customer's documented instructions as reflected in the applicable agreements and this DPA.",
        },

        {
          type: "paragraph",
          content:
            "In certain circumstances, OCTOREQ may independently determine the purposes and means of Processing Personal Data where required to comply with applicable laws, regulatory obligations, fraud prevention requirements, anti-money laundering obligations, sanctions screening, payment network rules, financial reporting obligations, security investigations, or other legitimate legal responsibilities. In such circumstances, OCTOREQ shall act as an independent Controller only to the extent required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Each Party remains independently responsible for complying with the legal obligations applicable to its respective role under applicable data protection laws.",
        },
      ],
    },

    {
      id: "processing-of-personal-data",
      title: "5. Processing of Personal Data",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ shall Process Personal Data only as necessary to provide the Services, fulfill the applicable agreement with the Customer, comply with documented instructions provided by the Customer, or satisfy applicable legal and regulatory obligations.",
        },

        {
          type: "paragraph",
          content:
            "The nature, purpose, and duration of Processing depend upon the Services utilized by the Customer and may include payment processing, payment orchestration, merchant onboarding, transaction management, fraud detection, settlement processing, customer support, technical support, reporting, analytics, security monitoring, webhook processing, API operations, and related administrative activities necessary to operate the Services.",
        },

        {
          type: "paragraph",
          content:
            "Categories of Personal Data processed under this DPA may include, where applicable:",
        },

        {
          type: "list",
          content: [
            "customer identification information;",
            "merchant account information;",
            "business contact information;",
            "payment transaction information;",
            "device and technical information;",
            "authentication and security information;",
            "communications relating to support requests;",
            "regulatory and compliance information where legally required; and",
            "other Personal Data submitted by or on behalf of the Customer through the Services.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ shall ensure that personnel authorized to Process Personal Data are subject to appropriate confidentiality obligations and receive appropriate training regarding the protection of Personal Data consistent with their responsibilities.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ shall not sell Personal Data entrusted to it by Customers or Process such Personal Data for purposes inconsistent with this DPA or applicable law unless otherwise authorized or required by law.",
        },
      ],
    },

    {
      id: "security-measures",
      title: "6. Security Measures",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ maintains administrative, technical, and organizational safeguards designed to protect Personal Data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, unauthorized access, or other forms of unlawful Processing, taking into account the nature of the Services, the risks presented by the Processing, available technologies, and applicable legal requirements.",
        },

        {
          type: "paragraph",
          content:
            "Security measures implemented by OCTOREQ may include:",
        },

        {
          type: "list",
          content: [
            "encryption of Personal Data during transmission using industry-standard protocols where appropriate;",
            "encryption or other appropriate protection of stored Personal Data where applicable;",
            "role-based access controls and least-privilege access management;",
            "multi-factor authentication for privileged administrative access where appropriate;",
            "security monitoring, logging, and audit capabilities;",
            "secure software development and deployment practices;",
            "vulnerability management and timely application of security updates;",
            "network security controls designed to protect production environments;",
            "business continuity and disaster recovery planning;",
            "personnel security and confidentiality obligations;",
            "periodic security assessments and operational reviews; and",
            "continuous improvement of security practices based on evolving risks, technologies, and regulatory expectations.",
          ],
        },

        {
          type: "paragraph",
          content:
            "No security program can guarantee absolute protection against every threat. OCTOREQ continuously evaluates and enhances its security controls to maintain a level of protection appropriate to the risks associated with the Processing of Personal Data.",
        },
      ],
    },
        {
      id: "sub-processors",
      title: "7. Sub-processors",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Customer acknowledges that OCTOREQ may engage qualified third-party service providers ('Sub-processors') to Process Personal Data on its behalf where reasonably necessary to deliver, maintain, secure, support, or improve the Services. OCTOREQ remains responsible for the performance of its Sub-processors to the extent required by applicable law and the agreements governing such Processing.",
        },

        {
          type: "paragraph",
          content:
            "Sub-processors may include providers of cloud infrastructure, payment processing, banking connectivity, communications, fraud prevention, identity verification, monitoring, customer support, data storage, analytics, security, and other operational services necessary for the delivery of the Services.",
        },

        {
          type: "paragraph",
          content:
            "Before engaging a Sub-processor, OCTOREQ shall take reasonable steps to assess the Sub-processor's ability to implement appropriate technical and organizational measures for the protection of Personal Data, taking into account the nature of the Processing and associated risks.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ shall ensure that Sub-processors are subject to written contractual obligations requiring them to protect Personal Data in a manner consistent with applicable data protection laws and the obligations imposed upon OCTOREQ under this DPA.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may replace, remove, or engage additional Sub-processors as business, technical, security, legal, or operational requirements evolve, provided that appropriate safeguards continue to be maintained where required by applicable law.",
        },
      ],
    },

    {
      id: "international-data-transfers",
      title: "8. International Data Transfers",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Customer acknowledges that Personal Data may be Processed, stored, transmitted, or accessed in jurisdictions outside the country in which the Personal Data was originally collected where such Processing is necessary to provide the Services or support OCTOREQ's business operations.",
        },

        {
          type: "paragraph",
          content:
            "Where applicable data protection laws impose restrictions on cross-border transfers of Personal Data, OCTOREQ shall implement appropriate safeguards designed to support lawful international transfers, taking into account the applicable legal requirements and the nature of the Processing.",
        },

        {
          type: "paragraph",
          content:
            "Such safeguards may include contractual commitments, recognized transfer mechanisms, technical protections, organizational controls, or other lawful measures recognized under applicable data protection laws.",
        },

        {
          type: "paragraph",
          content:
            "Nothing in this DPA requires OCTOREQ to transfer Personal Data internationally where doing so would violate applicable law or regulatory requirements.",
        },
      ],
    },

    {
      id: "data-subject-rights",
      title: "9. Data Subject Rights",

      blocks: [
        {
          type: "paragraph",
          content:
            "To the extent required by applicable data protection laws, OCTOREQ shall provide reasonable assistance to the Customer in responding to requests from Data Subjects relating to the exercise of their legal rights, taking into account the nature of the Processing and the information available to OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "Such requests may relate to rights including:",
        },

        {
          type: "list",
          content: [
            "access to Personal Data;",
            "correction or rectification of inaccurate Personal Data;",
            "erasure or deletion of Personal Data where legally applicable;",
            "restriction of Processing;",
            "objection to certain Processing activities where permitted by law;",
            "data portability where applicable;",
            "withdrawal of consent where Processing is based on consent; and",
            "other rights available under applicable data protection laws.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Unless prohibited by applicable law or otherwise instructed by the Customer, OCTOREQ may refer requests received directly from a Data Subject to the relevant Customer where the Customer acts as the Controller of the Personal Data.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ's obligation to assist with Data Subject requests shall be limited to the extent reasonably practicable and consistent with applicable law, technical feasibility, security considerations, and the nature of the Services provided.",
        },
      ],
    },
        {
      id: "data-breach-notification",
      title: "10. Data Breach Notification",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ maintains incident response procedures designed to identify, investigate, contain, remediate, and recover from Security Incidents affecting Personal Data. These procedures are intended to minimize risk, preserve system integrity, and support compliance with applicable data protection laws.",
        },

        {
          type: "paragraph",
          content:
            "Upon becoming aware of a confirmed Security Incident affecting Personal Data Processed on behalf of the Customer, OCTOREQ shall notify the Customer without undue delay where notification is required by applicable law and where the incident is reasonably likely to affect the Customer's Personal Data.",
        },

        {
          type: "paragraph",
          content:
            "Subject to the information reasonably available at the time, such notification may include:",
        },

        {
          type: "list",
          content: [
            "the nature of the Security Incident;",
            "the categories of Personal Data affected, where known;",
            "the likely consequences of the incident, where reasonably ascertainable;",
            "the measures taken or proposed to contain, investigate, mitigate, and remediate the incident;",
            "recommended actions the Customer may consider taking where appropriate; and",
            "available contact information for further coordination.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ shall cooperate with the Customer by providing reasonable information necessary to support the Customer's compliance with applicable legal obligations relating to the Security Incident, taking into account confidentiality obligations, legal restrictions, and the information reasonably available to OCTOREQ.",
        },
      ],
    },

    {
      id: "data-retention-deletion",
      title: "11. Data Retention & Deletion",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ shall retain Personal Data only for as long as reasonably necessary to provide the Services, comply with applicable legal, regulatory, accounting, audit, fraud prevention, dispute resolution, tax, and operational requirements, or as otherwise permitted or required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Upon termination of the applicable Services or upon the Customer's lawful request, OCTOREQ shall, where reasonably practicable and subject to applicable legal obligations, securely delete or anonymize Personal Data that is no longer required for the purposes described in this DPA.",
        },

        {
          type: "paragraph",
          content:
            "Certain Personal Data may continue to be retained where necessary to comply with legal obligations, enforce contractual rights, resolve disputes, maintain audit records, preserve evidence, prevent fraud, or protect the security and integrity of the Services.",
        },

        {
          type: "paragraph",
          content:
            "Personal Data contained within secure backup systems may remain until such backups are overwritten or securely destroyed in accordance with OCTOREQ's backup retention and disaster recovery procedures, provided that appropriate safeguards continue to apply throughout the retention period.",
        },
      ],
    },

    {
      id: "audit-compliance",
      title: "12. Audit & Compliance",

      blocks: [
        {
          type: "paragraph",
          content:
            "Upon reasonable written request and subject to appropriate confidentiality, security, and operational safeguards, OCTOREQ shall make available information reasonably necessary to demonstrate compliance with this DPA where required by applicable data protection laws.",
        },

        {
          type: "paragraph",
          content:
            "Where applicable law grants audit rights, any audit shall be conducted in a manner that minimizes disruption to OCTOREQ's operations, protects confidential information, safeguards the Personal Data of other customers, and preserves the security of the Services.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may satisfy reasonable compliance requests by providing relevant certifications, independent audit reports, security assessments, compliance documentation, questionnaires, or other appropriate evidence where such documentation adequately demonstrates compliance.",
        },

        {
          type: "paragraph",
          content:
            "Each Party shall cooperate in good faith to support compliance with applicable data protection laws while balancing security, confidentiality, proportionality, and operational practicality.",
        },
      ],
    },

    {
      id: "liability",
      title: "13. Liability",

      blocks: [
        {
          type: "paragraph",
          content:
            "The liability of each Party arising under or in connection with this DPA shall be governed by the applicable agreement between the Parties, including any limitations of liability contained therein, unless otherwise required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Nothing in this DPA excludes or limits liability to the extent that such exclusion or limitation is prohibited by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Each Party remains responsible for its own compliance with applicable data protection laws and for the acts and omissions of its personnel and authorized representatives within the scope of their respective legal responsibilities.",
        },
      ],
    },

    {
      id: "changes",
      title: "14. Changes to this Data Processing Agreement",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may update or modify this Data Processing Agreement from time to time to reflect changes in applicable data protection laws, regulatory guidance, technology, security practices, business operations, or the Services provided through the platform.",
        },

        {
          type: "paragraph",
          content:
            "Updated versions of this DPA shall become effective upon publication or as otherwise communicated by OCTOREQ where required by applicable law. Continued use of the Services following the effective date of an updated DPA constitutes acceptance of the revised terms to the extent permitted by applicable law.",
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
            "Questions regarding this Data Processing Agreement, privacy practices, data protection compliance, Security Incidents, or the Processing of Personal Data may be directed through the official OCTOREQ privacy, compliance, or support contact channels published on the OCTOREQ website.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to maintaining responsible data governance, protecting Personal Data through appropriate technical and organizational measures, and continuously strengthening its privacy and security practices in support of merchants, partners, developers, and customers worldwide.",
        },
      ],
    },
  ],
};

export default dpa;