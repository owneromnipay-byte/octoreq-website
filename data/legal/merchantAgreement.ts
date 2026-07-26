import { LegalDocument } from "@/types/legal";

const merchantAgreement: LegalDocument = {
  title: "Merchant Agreement",
  description:
    "This Merchant Agreement governs the relationship between OCTOREQ and Merchants using the OCTOREQ Platform to access payment orchestration and related Services.",
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
            "This Merchant Agreement (\"Agreement\") is entered into between OCTOREQ Technologies Limited (\"OCTOREQ,\" \"we,\" \"our,\" or \"us\") and the business entity or sole proprietor that registers for or uses the OCTOREQ Platform as a Merchant (\"Merchant,\" \"you,\" or \"your\"). This Agreement governs the Merchant's access to and use of OCTOREQ's payment orchestration platform, Merchant Dashboard, APIs, developer tools, settlement services, reporting features, Partner integrations, and all related products and services (collectively, the \"Services\").",
        },

        {
          type: "paragraph",
          content:
            "By completing onboarding, creating a Merchant Account, integrating with the Services, or otherwise using the Platform, the Merchant agrees to be legally bound by this Agreement, the Terms of Service, Privacy Policy, Acceptable Use Policy, Cookie Policy, and any other applicable policies or supplemental agreements published by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "This Agreement establishes the commercial relationship between OCTOREQ and the Merchant and defines the respective rights, responsibilities, operational requirements, and compliance obligations associated with the use of the Services.",
        },

        {
          type: "paragraph",
          content:
            "Nothing in this Agreement creates a partnership, joint venture, agency, fiduciary relationship, or employment relationship between OCTOREQ and the Merchant unless expressly agreed in writing.",
        },
      ],
    },

    {
      id: "merchant-eligibility",
      title: "2. Merchant Eligibility & Onboarding",

      blocks: [
        {
          type: "paragraph",
          content:
            "To access the Services as a Merchant, applicants must successfully complete OCTOREQ's onboarding process and satisfy all applicable eligibility, compliance, and verification requirements. Access to the Services is subject to OCTOREQ's approval and ongoing compliance with this Agreement.",
        },

        {
          type: "paragraph",
          content:
            "To be eligible for onboarding, a Merchant must:",
        },

        {
          type: "list",
          content: [
            "be legally established and authorized to conduct business in its jurisdiction;",
            "possess all licenses, permits, registrations, and regulatory approvals required for its business activities;",
            "provide accurate, complete, and current onboarding information;",
            "successfully complete applicable Know Your Customer (KYC) and Know Your Business (KYB) verification procedures;",
            "comply with applicable laws, Payment Provider requirements, and OCTOREQ policies;",
            "maintain an eligible settlement account where required;",
            "not engage in prohibited businesses or activities identified by OCTOREQ; and",
            "promptly notify OCTOREQ of any material changes affecting eligibility or compliance.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Submission of an application does not guarantee approval. OCTOREQ may approve, decline, suspend, or impose conditions on onboarding based on risk assessments, compliance requirements, operational considerations, Payment Provider requirements, or other legitimate business factors.",
        },
      ],
    },

    {
      id: "merchant-accounts",
      title: "3. Merchant Accounts",

      blocks: [
                {
          type: "paragraph",
          content:
            "Each Merchant is responsible for maintaining an active Merchant Account throughout its use of the Services. The Merchant Account serves as the primary interface for accessing the Merchant Dashboard, APIs, reporting tools, payment configurations, settlement information, and other authorized Platform functionality.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant shall ensure that all account information remains accurate, complete, and current throughout the duration of this Agreement.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant is responsible for:",
        },

        {
          type: "list",
          content: [
            "maintaining the confidentiality of account credentials;",
            "restricting access to authorized personnel only;",
            "implementing appropriate internal security controls;",
            "maintaining accurate contact information;",
            "promptly updating changes to business ownership or legal status;",
            "maintaining secure API credentials and webhook secrets;",
            "monitoring account activity for unauthorized access;",
            "promptly reporting suspected security incidents;",
            "maintaining appropriate access controls for employees and contractors; and",
            "remaining responsible for all activities conducted through the Merchant Account unless otherwise required by applicable law.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may establish role-based permissions that allow Merchants to authorize multiple users with varying levels of administrative or operational access. The Merchant remains responsible for managing such permissions appropriately.",
        },
      ],
    },

    {
      id: "verification",
      title: "4. Verification (KYC & KYB)",

      blocks: [
        {
          type: "paragraph",
          content:
            "To comply with applicable laws, regulatory requirements, Payment Provider obligations, and OCTOREQ's internal risk management procedures, Merchants must successfully complete all applicable Know Your Customer (KYC), Know Your Business (KYB), identity verification, and ongoing due diligence processes before accessing certain Services.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may request information or documentation including:",
        },

        {
          type: "list",
          content: [
            "business registration documents;",
            "certificate of incorporation or equivalent documentation;",
            "tax registration information;",
            "government-issued identification;",
            "proof of address;",
            "beneficial ownership information;",
            "director or shareholder information;",
            "authorized signatory information;",
            "bank account verification;",
            "business licenses or permits;",
            "financial information where reasonably required;",
            "website or business operation details; and",
            "any additional documentation reasonably necessary to satisfy compliance or regulatory obligations.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Verification is an ongoing process. OCTOREQ may request updated documentation, conduct periodic reviews, perform enhanced due diligence for higher-risk Merchants, or require additional information whenever reasonably necessary to comply with legal, regulatory, operational, or Payment Provider requirements.",
        },

        {
          type: "paragraph",
          content:
            "Failure to provide requested information within a reasonable period may result in delayed onboarding, restricted functionality, temporary suspension, delayed settlements, or termination of the Merchant Account in accordance with this Agreement.",
        },
      ],
    },

    {
      id: "payment-processing-services",
      title: "5. Payment Processing Services",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ provides a payment orchestration platform that enables Merchants to access payment acceptance capabilities through integrated Payment Providers. OCTOREQ coordinates payment routing, transaction management, reporting, reconciliation, settlement coordination, APIs, and related technology services designed to simplify payment operations.",
        },

        {
          type: "paragraph",
          content:
            "Unless expressly stated otherwise in a separate written agreement, OCTOREQ is not itself a bank, card issuer, acquiring bank, licensed payment network, or the underlying processor of payment transactions. Payment execution, authorization, clearing, settlement, and related regulated financial services may be performed by licensed third-party Payment Providers.",
        },

        {
          type: "paragraph",
          content:
            "Depending on the Services enabled for a Merchant, OCTOREQ may provide:",
        },

        {
          type: "list",
          content: [
            "payment orchestration;",
            "multi-provider payment routing;",
            "payment initiation interfaces;",
            "Merchant Dashboard services;",
            "API access;",
            "webhook services;",
            "transaction reporting;",
            "payment reconciliation;",
            "settlement coordination;",
            "wallet functionality where applicable;",
            "developer tools;",
            "analytics and operational reporting;",
            "Partner integrations; and",
            "other Services made available by OCTOREQ from time to time.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Availability of particular Services may vary depending on the Merchant's jurisdiction, business category, risk profile, technical integration, Payment Provider availability, regulatory requirements, and other operational considerations. OCTOREQ may introduce, modify, suspend, or discontinue specific Services in accordance with this Agreement and applicable law.",
        },
      ],
    },

    {
      id: "payment-providers",
      title: "6. Payment Providers & Third-Party Services",

      blocks: [
                {
          type: "paragraph",
          content:
            "The Services rely upon one or more independent Payment Providers, financial institutions, banking partners, infrastructure providers, and other third-party service providers that enable payment acceptance, authorization, settlement, identity verification, fraud prevention, compliance screening, and related payment services.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant acknowledges and agrees that certain Services are dependent upon the continued availability and operation of these third-party providers. OCTOREQ does not guarantee the uninterrupted availability, performance, or continued participation of any particular Payment Provider.",
        },

        {
          type: "paragraph",
          content:
            "Where required by a Payment Provider or applicable law, Merchants may be required to enter into separate agreements or comply with additional operating rules, technical requirements, compliance obligations, or eligibility standards imposed by those providers.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant agrees to comply with all applicable Payment Provider requirements that relate to its use of the Services, including any operating regulations, security standards, prohibited business requirements, dispute procedures, settlement requirements, and compliance obligations communicated by OCTOREQ or the applicable Payment Provider.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may add, remove, replace, or temporarily suspend Payment Providers at any time where reasonably necessary for operational, commercial, regulatory, security, or technical reasons. Where reasonably practicable, OCTOREQ will endeavor to minimize disruption to Merchant operations.",
        },
      ],
    },

    {
      id: "merchant-responsibilities",
      title: "7. Merchant Responsibilities",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant remains solely responsible for its business operations, products, services, customer relationships, and compliance with applicable law. The Merchant shall conduct its activities honestly, lawfully, professionally, and in a manner that protects the integrity of the OCTOREQ Platform and the broader payment ecosystem.",
        },

        {
          type: "paragraph",
          content:
            "Without limitation, the Merchant shall:",
        },

        {
          type: "list",
          content: [
            "comply with this Agreement and all applicable OCTOREQ policies;",
            "conduct business in accordance with applicable laws and regulatory requirements;",
            "maintain all licenses, permits, registrations, and approvals required for its business;",
            "provide accurate, complete, and current information to OCTOREQ;",
            "promptly notify OCTOREQ of material changes affecting its business or compliance status;",
            "maintain secure systems and reasonable cybersecurity practices;",
            "protect API credentials, account credentials, and authentication secrets;",
            "maintain appropriate internal controls to prevent fraud and unauthorized transactions;",
            "deliver the goods or services represented to Customers;",
            "maintain appropriate customer support processes;",
            "respond promptly to disputes, refunds, and chargeback requests;",
            "maintain adequate records relating to transactions processed through the Services;",
            "cooperate with reasonable compliance reviews and investigations;",
            "avoid activities prohibited by the Acceptable Use Policy;",
            "respect intellectual property and privacy rights;",
            "maintain accurate pricing and product information;",
            "promptly report suspected fraud, security incidents, or unauthorized access;",
            "pay all applicable fees and charges;",
            "comply with applicable tax obligations; and",
            "otherwise operate responsibly and in good faith while using the Services.",
          ],
        },

        {
          type: "paragraph",
          content:
            "The Merchant is solely responsible for the quality, safety, legality, pricing, fulfillment, delivery, warranties, advertising, customer support, and all other aspects of the goods or services offered to its Customers. OCTOREQ does not assume responsibility for the Merchant's commercial activities or contractual obligations to its Customers.",
        },
      ],
    },

    {
      id: "fees-pricing-taxes",
      title: "8. Fees, Pricing & Taxes",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant agrees to pay all fees, charges, and other amounts applicable to the Services. Applicable pricing may be established through published pricing schedules, customized commercial agreements, enterprise contracts, partner arrangements, or other written agreements between OCTOREQ and the Merchant.",
        },

        {
          type: "paragraph",
          content:
            "Unless otherwise agreed in writing, all fees become due in accordance with the applicable pricing arrangement and may be deducted from settlements, invoiced separately, charged through an approved payment method, or collected using any other payment mechanism authorized under this Agreement or applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Applicable fees may include:",
        },

        {
          type: "list",
          content: [
            "transaction processing fees;",
            "payment orchestration fees;",
            "subscription fees;",
            "platform access fees;",
            "API usage fees;",
            "settlement fees;",
            "currency conversion fees where applicable;",
            "chargeback or dispute handling fees;",
            "refund processing fees where applicable;",
            "premium feature fees;",
            "professional services fees;",
            "integration or implementation fees;",
            "Partner program fees where applicable; and",
            "other fees disclosed through applicable pricing documentation or commercial agreements.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Unless expressly stated otherwise, fees are exclusive of applicable taxes, duties, levies, or governmental charges. The Merchant remains responsible for determining, collecting, reporting, and remitting all taxes arising from its business activities, products, services, or transactions, except where OCTOREQ is required by applicable law to collect or remit taxes on its own behalf.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may revise pricing upon reasonable notice where permitted by applicable agreements. Continued use of the affected Services after revised pricing becomes effective constitutes acceptance of the updated pricing unless the Merchant terminates the affected Services in accordance with this Agreement.",
        },
      ],
    },

    {
      id: "settlements-payouts",
      title: "9. Settlements & Payouts",

      blocks: [
                {
          type: "paragraph",
          content:
            "Subject to applicable law, Payment Provider requirements, and this Agreement, OCTOREQ facilitates settlement coordination and payout services for eligible Merchants. Settlement schedules, payout timing, and fund availability may vary depending on the Payment Provider, payment method, transaction type, Merchant risk profile, jurisdiction, banking infrastructure, and other operational or regulatory factors.",
        },

        {
          type: "paragraph",
          content:
            "Settlement of funds is subject to successful payment authorization, clearing, fraud screening, compliance reviews, applicable reserve requirements, dispute activity, regulatory restrictions, and any other conditions reasonably necessary to protect the integrity of the Services.",
        },

        {
          type: "paragraph",
          content:
            "Unless otherwise agreed in writing, OCTOREQ may coordinate settlements by:",
        },

        {
          type: "list",
          content: [
            "transferring eligible funds to the Merchant's designated settlement account;",
            "crediting Merchant wallet balances where applicable;",
            "deducting applicable fees, refunds, chargebacks, reserves, taxes, or other authorized amounts;",
            "withholding settlements pending compliance or fraud reviews;",
            "offsetting outstanding obligations owed by the Merchant; and",
            "otherwise administering settlements in accordance with applicable Payment Provider requirements and this Agreement.",
          ],
        },

        {
          type: "paragraph",
          content:
            "The Merchant is solely responsible for ensuring that its designated settlement account information remains accurate, complete, and capable of receiving payments. OCTOREQ shall not be responsible for delays or failed settlements resulting from inaccurate banking information or circumstances outside OCTOREQ's reasonable control.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may temporarily delay or suspend settlements where reasonably necessary to investigate suspected fraud, comply with applicable law, satisfy Payment Provider requirements, resolve disputes, conduct compliance reviews, manage financial risk, or protect the security and integrity of the Platform.",
        },
      ],
    },

    {
      id: "refunds-chargebacks-disputes",
      title: "10. Refunds, Chargebacks & Disputes",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant remains solely responsible for managing its relationships with Customers, including handling refunds, product or service complaints, delivery issues, warranty obligations, and other commercial disputes arising from transactions processed through the Services.",
        },

        {
          type: "paragraph",
          content:
            "Where payment methods or Payment Providers support refunds or chargeback processes, the Merchant agrees to cooperate promptly with OCTOREQ and the applicable Payment Provider in responding to refund requests, chargebacks, retrieval requests, fraud investigations, and dispute resolution procedures.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant acknowledges that chargebacks, payment reversals, and transaction disputes may occur for various reasons, including unauthorized transactions, fraud, cardholder claims, processing errors, duplicate payments, or failure to deliver goods or services.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant shall:",
        },

        {
          type: "list",
          content: [
            "maintain records supporting each transaction;",
            "respond promptly to dispute requests;",
            "provide requested evidence within applicable deadlines;",
            "honor valid refund obligations;",
            "maintain commercially reasonable customer support procedures;",
            "take reasonable measures to reduce fraud and excessive chargebacks;",
            "cooperate with investigations conducted by OCTOREQ or Payment Providers;",
            "comply with applicable dispute resolution procedures; and",
            "remain responsible for losses arising from transactions attributable to the Merchant's conduct or business operations, except where otherwise required by applicable law.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may recover refunds, reversals, chargebacks, dispute fees, penalties, assessments, or other amounts payable by the Merchant through settlement deductions, reserve accounts, wallet balances, invoicing, offset, or any other lawful recovery mechanism available under this Agreement.",
        },
      ],
    },

    {
      id: "risk-management",
      title: "11. Risk Management & Reserve Accounts",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ maintains risk management procedures designed to protect the Platform, Merchants, Customers, Payment Providers, and the broader financial ecosystem. These procedures may include transaction monitoring, fraud detection, compliance screening, account reviews, reserve requirements, and other risk mitigation measures.",
        },

        {
          type: "paragraph",
          content:
            "Where reasonably necessary, OCTOREQ may establish, maintain, increase, reduce, or release reserve accounts or other financial safeguards based on the Merchant's business model, transaction volume, dispute history, fraud indicators, industry classification, regulatory obligations, or other relevant risk factors.",
        },

        {
          type: "paragraph",
          content:
            "Risk management measures may include:",
        },

        {
          type: "list",
          content: [
            "transaction monitoring;",
            "fraud detection and prevention reviews;",
            "enhanced due diligence procedures;",
            "temporary settlement holds;",
            "rolling or fixed reserve requirements;",
            "transaction limits;",
            "volume restrictions;",
            "additional documentation requests;",
            "compliance reviews;",
            "manual transaction reviews;",
            "temporary account restrictions;",
            "enhanced monitoring of higher-risk activities; and",
            "other reasonable measures necessary to manage operational, financial, legal, or regulatory risk.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ will exercise these measures in a commercially reasonable manner based on the information available at the relevant time. The implementation of any risk management measure does not constitute a representation that fraud, financial loss, regulatory action, or other risks can be completely eliminated.",
        },
      ],
    },

    {
      id: "compliance-obligations",
      title: "12. Compliance Obligations",

      blocks: [
                {
          type: "paragraph",
          content:
            "The Merchant shall comply at all times with applicable laws, regulations, industry standards, Payment Provider requirements, and OCTOREQ policies relating to the use of the Services. Compliance obligations continue throughout the duration of this Agreement and survive where required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Without limitation, the Merchant shall:",
        },

        {
          type: "list",
          content: [
            "maintain all required licenses, permits, and regulatory approvals;",
            "comply with applicable anti-money laundering (AML) and counter-terrorist financing (CTF) requirements where applicable;",
            "comply with applicable sanctions laws and export control regulations;",
            "maintain accurate business records;",
            "cooperate with lawful regulatory inquiries;",
            "comply with applicable consumer protection laws;",
            "maintain commercially reasonable cybersecurity practices;",
            "comply with applicable data protection and privacy laws;",
            "promptly notify OCTOREQ of any regulatory investigation or enforcement action that could materially affect the Merchant's use of the Services;",
            "provide information reasonably requested during compliance reviews; and",
            "take corrective action where compliance deficiencies are identified.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Nothing in this Agreement relieves the Merchant of its independent legal and regulatory responsibilities. The Merchant remains solely responsible for ensuring that its business operations comply with all applicable laws in every jurisdiction in which it operates.",
        },
      ],
    },

    {
      id: "intellectual-property",
      title: "13. Intellectual Property",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ and its licensors retain all right, title, and interest in and to the Services, including all software, APIs, documentation, trademarks, logos, trade names, copyrights, databases, user interfaces, designs, proprietary technology, and all related intellectual property rights.",
        },

        {
          type: "paragraph",
          content:
            "Subject to this Agreement, OCTOREQ grants the Merchant a limited, non-exclusive, non-transferable, non-sublicensable, and revocable right to access and use the Services solely for the Merchant's internal business purposes during the term of this Agreement.",
        },

        {
          type: "paragraph",
          content:
            "Except as expressly permitted under this Agreement or applicable law, the Merchant shall not:",
        },

        {
          type: "list",
          content: [
            "copy, reproduce, distribute, or commercially exploit the Services;",
            "modify or create derivative works of OCTOREQ technology;",
            "reverse engineer, decompile, or disassemble proprietary software except where such restrictions cannot lawfully be limited;",
            "remove proprietary notices;",
            "misuse OCTOREQ trademarks or branding;",
            "permit unauthorized third parties to access proprietary technology; or",
            "otherwise infringe OCTOREQ's intellectual property rights.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Nothing in this Agreement transfers ownership of any intellectual property rights from OCTOREQ to the Merchant.",
        },
      ],
    },

    {
      id: "confidentiality",
      title: "14. Confidentiality",

      blocks: [
        {
          type: "paragraph",
          content:
            "Each party may receive confidential or proprietary information from the other party during the course of the business relationship. Each party agrees to protect such information using reasonable care and to use it solely for purposes related to this Agreement.",
        },

        {
          type: "paragraph",
          content:
            "Confidential Information may include:",
        },

        {
          type: "list",
          content: [
            "technical documentation;",
            "software and APIs;",
            "pricing information;",
            "business strategies;",
            "security procedures;",
            "transaction information;",
            "customer information;",
            "financial information;",
            "compliance documentation;",
            "commercial terms; and",
            "other information identified as confidential or that should reasonably be understood to be confidential.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Confidential Information does not include information that is publicly available without breach of this Agreement, independently developed without use of confidential information, lawfully obtained from another source without confidentiality obligations, or required to be disclosed by applicable law or court order.",
        },
      ],
    },

    {
      id: "data-protection",
      title: "15. Data Protection",

      blocks: [
        {
          type: "paragraph",
          content:
            "Each party shall comply with applicable data protection and privacy laws in connection with the collection, use, disclosure, storage, transfer, and other processing of personal information under this Agreement.",
        },

        {
          type: "paragraph",
          content:
            "Where OCTOREQ processes personal information on behalf of the Merchant, such processing shall be governed by this Agreement, OCTOREQ's Privacy Policy, any applicable Data Processing Agreement, and applicable law.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant shall ensure that it has obtained all necessary rights, notices, and lawful bases required to provide personal information to OCTOREQ for processing in connection with the Services.",
        },
      ],
    },

    {
      id: "suspension-termination",
      title: "16. Suspension & Termination",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may suspend, restrict, or terminate all or part of the Services immediately where reasonably necessary to comply with applicable law, satisfy Payment Provider requirements, protect the security or integrity of the Platform, investigate suspected fraud, mitigate operational risk, enforce this Agreement, or protect the rights and legitimate interests of OCTOREQ, its users, or third parties.",
        },

        {
          type: "paragraph",
          content:
            "Grounds for suspension or termination may include:",
        },

        {
          type: "list",
          content: [
            "material breach of this Agreement;",
            "failure to complete compliance or verification requirements;",
            "fraud or suspected fraudulent activity;",
            "excessive disputes or chargebacks;",
            "prohibited business activities;",
            "misuse of the Services;",
            "failure to pay applicable fees;",
            "regulatory or legal requirements;",
            "security incidents; or",
            "other circumstances presenting unacceptable legal, operational, financial, or reputational risk.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Termination of this Agreement does not affect accrued rights or obligations, including obligations relating to fees, settlements, confidentiality, indemnification, limitation of liability, dispute resolution, record retention, or any provisions intended by their nature to survive termination.",
        },
      ],
    },

    {
      id: "limitation-of-liability",
      title: "17. Limitation of Liability",

      blocks: [
        {
          type: "paragraph",
          content:
            "To the fullest extent permitted by applicable law, OCTOREQ shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, including loss of profits, revenue, goodwill, business opportunities, anticipated savings, or data, arising out of or relating to this Agreement or the use of the Services.",
        },

        {
          type: "paragraph",
          content:
            "Nothing in this Agreement excludes or limits liability where such exclusion or limitation is prohibited by applicable law.",
        },
      ],
    },

    {
      id: "indemnification",
      title: "18. Indemnification",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant agrees to defend, indemnify, and hold harmless OCTOREQ, its affiliates, directors, officers, employees, contractors, licensors, and service providers from and against claims, liabilities, damages, losses, penalties, fines, costs, and expenses (including reasonable legal fees) arising out of or relating to the Merchant's breach of this Agreement, violation of applicable law, negligent or wrongful conduct, products or services, customer disputes, or infringement of third-party rights, except to the extent caused by OCTOREQ's own gross negligence, willful misconduct, or other liability that cannot lawfully be excluded.",
        },
      ],
    },

    {
      id: "governing-law",
      title: "19. Governing Law & Dispute Resolution",

      blocks: [
        {
          type: "paragraph",
          content:
            "This Agreement shall be governed by and construed in accordance with the laws specified in the OCTOREQ Terms of Service, unless otherwise expressly agreed in writing or required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "The parties shall first seek to resolve disputes through good-faith negotiations. Where a dispute cannot be resolved through negotiation, it shall be resolved in accordance with the dispute resolution provisions contained in the Terms of Service or as otherwise required by applicable law.",
        },
      ],
    },

    {
      id: "changes",
      title: "20. Changes to this Agreement",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may amend or update this Merchant Agreement from time to time to reflect changes in applicable law, regulatory requirements, business operations, Payment Provider requirements, security practices, technology, or the Services. Material changes may be communicated through the Platform or by other reasonable means where required by applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Continued use of the Services after an updated Agreement becomes effective constitutes acceptance of the revised Agreement to the extent permitted by applicable law.",
        },
      ],
    },

    {
      id: "contact",
      title: "21. Contact Information",

      blocks: [
        {
          type: "paragraph",
          content:
            "Questions, notices, or requests relating to this Merchant Agreement may be submitted using the contact information published on OCTOREQ's official website.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ is committed to maintaining a secure, transparent, and reliable commercial relationship with its Merchants through responsible governance, regulatory compliance, and continuous improvement of the Services.",
        },
      ],
    },
  ],
};

export default merchantAgreement;