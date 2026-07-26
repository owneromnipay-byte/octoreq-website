import { LegalDocument } from "@/types/legal";

const terms: LegalDocument = {
  title: "Terms of Service",

  description:
    "These Terms govern your access to and use of the OCTOREQ Platform, including its payment orchestration services, APIs, merchant tools, partner programs, and related products and services.",

  version: "1.0",

  effectiveDate: "August 2026",

  lastUpdated: "July 2026",

  sections: [
    {
      id: "introduction",
      title: "1. Introduction",

      blocks: [
        {
          type: "paragraph",
          content: "Welcome to OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            'These Terms of Service ("Terms") constitute a legally binding agreement between OCTOREQ Technologies Limited ("OCTOREQ," "we," "our," or "us") and every individual, business, organization, developer, partner, or other legal entity ("Merchant," "User," or "you") that accesses or uses the OCTOREQ Platform or any related Services.',
        },

        {
          type: "paragraph",
          content:
            'These Terms govern your access to and use of OCTOREQ\'s websites, merchant dashboards, APIs, developer tools, software, applications, integrations, documentation, communications, and all related products and services (collectively, the "Services").',
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ provides a payment orchestration and commerce infrastructure platform that enables businesses to connect with, manage, monitor, and intelligently route payment transactions through one or more licensed third-party Payment Providers using a unified API, dashboard, and supporting technology infrastructure.",
        },

        {
          type: "paragraph",
          content:
            "Unless expressly stated otherwise, OCTOREQ is a technology platform and infrastructure provider.",
        },

        {
          type: "paragraph",
          content:
            "Except where applicable law expressly provides otherwise, OCTOREQ does not:",
        },

        {
          type: "list",
          content: [
            "operate as a bank;",
            "accept customer deposits;",
            "issue electronic money;",
            "operate payment accounts;",
            "provide banking services;",
            "provide licensed payment processing services in its own name;",
            "act as the Merchant of Record;",
            "hold customer funds as a financial institution; or",
            "perform regulated financial services requiring licensing except to the extent expressly authorized by applicable law.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Payment authorization, payment processing, settlement, acquiring, card processing, banking services, and movement of funds are performed by licensed third-party Payment Providers integrated with the Platform.",
        },

        {
          type: "paragraph",
          content:
            "By creating an Account, integrating with the APIs, accessing the Merchant Dashboard, clicking to accept these Terms, or otherwise using the Services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms together with all policies expressly incorporated by reference, including the Privacy Policy, Acceptable Use Policy, and any other applicable Platform policies.",
        },

        {
          type: "paragraph",
          content:
            "If you do not agree to these Terms, you must immediately discontinue use of the Services.",
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
            "For purposes of these Terms:",
        },

        {
          type: "paragraph",
          content:
            "Account means a Merchant account approved by OCTOREQ for access to the Platform.",
        },

        {
          type: "paragraph",
          content:
            "API means the application programming interfaces made available by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "API Credentials include API Keys, client secrets, access tokens, certificates, authentication credentials, and any other credentials used to access the Platform.",
        },

        {
          type: "paragraph",
          content:
            "API Key means authentication credentials issued by OCTOREQ for accessing the APIs.",
        },

        {
          type: "paragraph",
          content:
            "Chargeback means any reversal, dispute, retrieval request, or recovery initiated by a card issuer, Payment Provider, financial institution, or other authorized entity.",
        },

        {
          type: "paragraph",
          content:
            "Customer means any individual or organization making a payment to a Merchant.",
        },

        {
          type: "paragraph",
          content:
            "Documentation means OCTOREQ's published technical documentation, API references, SDKs, integration guides, manuals, implementation requirements, developer resources, and related materials.",
        },

        {
          type: "paragraph",
          content:
            "Merchant means any business, organization, institution, developer, or other legal entity approved to use the Platform.",
        },

        {
          type: "paragraph",
          content:
            "Merchant Dashboard means the online administrative interface provided by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "Merchant Wallet means an internal accounting ledger maintained solely for bookkeeping, reconciliation, settlement calculations, fee allocation, adjustments, reporting, payout coordination, and related operational purposes.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant Wallet is not:",
        },

        {
          type: "list",
          content: [
            "a bank account;",
            "a deposit account;",
            "an electronic money account;",
            "a payment account;",
            "an investment account;",
            "a stored-value account;",
            "a trust account; or",
            "a custodial account.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Balances displayed within the Merchant Wallet are accounting records only and do not represent deposits held by OCTOREQ on behalf of the Merchant.",
        },

        {
          type: "paragraph",
          content:
            "Partner means an approved participant in an OCTOREQ partner, reseller, referral, affiliate, or distribution program.",
        },

        {
          type: "paragraph",
          content:
            "Payment means any payment request, authorization, capture, collection, transfer request, refund, reversal, payout request, or other financial event initiated through the Platform.",
        },

        {
          type: "paragraph",
          content:
            "Payment Provider means any licensed or otherwise legally authorized payment gateway, acquiring institution, payment processor, financial institution, banking partner, switching provider, or other regulated financial service provider integrated with the Platform.",
        },

        {
          type: "paragraph",
          content:
            "Platform means all OCTOREQ websites, APIs, dashboards, software, applications, infrastructure, developer tools, documentation, integrations, systems, and related technology.",
        },

        {
          type: "paragraph",
          content:
            "Payout means the transfer of eligible settlement proceeds to a Merchant's approved settlement account where payout functionality is available.",
        },

        {
          type: "paragraph",
          content:
            "Services means all software, APIs, dashboards, developer tools, orchestration services, reporting tools, integrations, support services, communications, and related functionality provided by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "Settlement means the accounting process through which transaction proceeds confirmed by the applicable Payment Provider become eligible for payout following reconciliation, compliance reviews, fraud screening, operational processing, and any applicable holding periods.",
        },

        {
          type: "paragraph",
          content:
            "Transaction means any payment request, authorization, capture, refund, reversal, settlement event, payout, chargeback, adjustment, or other financial event processed through the Platform.",
        },

        {
          type: "paragraph",
          content:
            "User means any employee, director, contractor, representative, administrator, agent, developer, or other individual authorized by a Merchant to access an Account.",
        },

        {
          type: "paragraph",
          content:
            "Webhook means an automated notification generated by OCTOREQ and delivered to a Merchant's systems regarding Platform events.",
        },
      ],
    },

    {
      id: "eligibility",
      title: "3.1 Eligibility",

      blocks: [
        {
          type: "paragraph",
          content:
            "To use the Services, you must possess the legal capacity to enter into binding contracts.",
        },

        {
          type: "paragraph",
          content:
            "Where you access the Services on behalf of a business or organization, you represent and warrant that you possess full authority to legally bind that entity to these Terms.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may reject any application, suspend onboarding, or refuse access to the Platform at its sole discretion where reasonably necessary for legal, regulatory, compliance, operational, or commercial reasons.",
        },
      ],
    },

    {
      id: "account-verification",
      title: "3.2 Account Verification",

      blocks: [
                {
          type: "paragraph",
          content:
            "Before approving or maintaining an Account, OCTOREQ may require documentation including:",
        },

        {
          type: "list",
          content: [
            "business registration records;",
            "certificates of incorporation;",
            "beneficial ownership information;",
            "director or shareholder information;",
            "government-issued identification;",
            "tax information;",
            "bank account verification;",
            "proof of address;",
            "regulatory licenses;",
            "sanctions screening information;",
            "Know Your Customer (KYC);",
            "Know Your Business (KYB);",
            "Anti-Money Laundering (AML);",
            "Counter-Terrorist Financing (CTF); and",
            "any additional information reasonably necessary to comply with applicable laws, contractual obligations, or internal risk management procedures.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may conduct ongoing verification, enhanced due diligence, transaction monitoring, sanctions screening, and periodic compliance reviews throughout the duration of the Merchant relationship.",
        },

        {
          type: "paragraph",
          content:
            "Failure to provide requested information may result in delayed onboarding, suspension, settlement delays, payout restrictions, or termination of the Account.",
        },
      ],
    },

    {
      id: "accuracy-of-information",
      title: "3.3 Accuracy of Information",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant represents and warrants that all information submitted to OCTOREQ:",
        },

        {
          type: "list",
          content: [
            "is accurate;",
            "is complete;",
            "is not misleading;",
            "remains current throughout the relationship.",
          ],
        },

        {
          type: "paragraph",
          content:
            "The Merchant shall promptly notify OCTOREQ of any material changes, including changes to:",
        },

        {
          type: "list",
          content: [
            "ownership;",
            "directors;",
            "beneficial owners;",
            "registered address;",
            "settlement accounts;",
            "regulatory status;",
            "legal name;",
            "contact information; or",
            "business activities.",
          ],
        },
      ],
    },

    {
      id: "account-security",
      title: "3.4 Account Security",

      blocks: [
                {
          type: "paragraph",
          content:
            "The Merchant is solely responsible for maintaining the confidentiality and security of:",
        },

        {
          type: "list",
          content: [
            "usernames;",
            "passwords;",
            "API Credentials;",
            "authentication tokens;",
            "devices;",
            "administrator accounts; and",
            "any other authentication methods used to access the Platform.",
          ],
        },

        {
          type: "paragraph",
          content:
            "The Merchant remains responsible for all actions performed through its Account by its employees, officers, directors, contractors, developers, representatives, agents, administrators, and authorized users.",
        },

        {
          type: "paragraph",
          content:
            "API Credentials remain the exclusive property of OCTOREQ and may be suspended, revoked, rotated, regenerated, or replaced at any time where reasonably necessary for security, compliance, operational, or technical reasons.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant shall immediately notify OCTOREQ of any suspected unauthorized access or credential compromise.",
        },
      ],
    },

    {
      id: "nature-of-services",
      title: "3.5 Nature of the Services",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ provides technology infrastructure that enables Merchants to integrate with multiple licensed Payment Providers through a unified API and management platform.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may facilitate payment orchestration, transaction routing, reporting, settlement coordination, analytics, developer tools, operational workflows, webhook delivery, monitoring, and related technology services.",
        },

        {
          type: "paragraph",
          content:
            "The underlying authorization, acquiring, banking, settlement, payment processing, and movement of funds remain the responsibility of the applicable licensed Payment Provider.",
        },

        {
          type: "paragraph",
          content:
            "Nothing in these Terms shall be interpreted as creating a banking relationship, fiduciary relationship, trustee relationship, custodial relationship, or financial advisory relationship between OCTOREQ and any Merchant.",
        },
      ],
    },

    {
      id: "merchant-responsibilities",
      title: "3.6 Merchant Responsibilities",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant remains solely responsible for:",
        },

        {
          type: "list",
          content: [
            "its products and services;",
            "pricing;",
            "marketing;",
            "taxes;",
            "customer support;",
            "refunds;",
            "legal compliance;",
            "business operations;",
            "contractual relationships with Customers;",
            "obtaining all necessary governmental approvals;",
            "maintaining required licenses;",
            "complying with applicable Payment Provider rules; and",
            "ensuring that all Transactions submitted through the Platform are lawful and authorized.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ is not responsible for disputes between Merchants and their Customers relating to product quality, delivery, warranties, representations, pricing, or contractual obligations.",
        },
      ],
    },

    {
      id: "merchant-warranties",
      title: "3.7 Merchant Warranties",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant represents, warrants, and undertakes that:",
        },

        {
          type: "list",
          content: [
            "it has full legal authority to enter into these Terms;",
            "it lawfully operates its business;",
            "all Transactions submitted through the Platform are genuine and properly authorized;",
            "it owns or possesses all rights necessary to sell its products or services;",
            "it will not knowingly process fraudulent, fictitious, or unauthorized Transactions;",
            "it will not knowingly use stolen payment credentials;",
            "it will comply with applicable laws and Payment Provider requirements; and",
            "its use of the Platform will not infringe the rights of any third party.",
          ],
        },
      ],
    },

    {
      id: "compliance-with-laws",
      title: "3.8 Compliance with Laws",

      blocks: [
                {
          type: "paragraph",
          content:
            "The Merchant shall comply with all applicable laws, regulations, regulatory directives, sanctions requirements, Payment Provider rules, and industry standards applicable to its business and use of the Services, including laws relating to:",
        },

        {
          type: "list",
          content: [
            "anti-money laundering;",
            "counter-terrorist financing;",
            "sanctions compliance;",
            "consumer protection;",
            "taxation;",
            "anti-bribery and corruption;",
            "electronic commerce;",
            "privacy and data protection;",
            "financial crime prevention; and",
            "cybersecurity.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where reasonably necessary to comply with applicable law, contractual obligations, regulatory expectations, or risk management procedures, OCTOREQ may request additional documentation, delay or refuse Transactions, restrict settlements, suspend Services, or terminate the Merchant relationship.",
        },
      ],
    },

    {
      id: "security-responsibilities",
      title: "3.9 Security Responsibilities",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant shall maintain commercially reasonable administrative, technical, organizational, and physical safeguards designed to protect its systems, applications, infrastructure, credentials, and Customer information.",
        },

        {
          type: "paragraph",
          content:
            "This includes implementing appropriate security measures such as:",
        },

        {
          type: "list",
          content: [
            "secure infrastructure;",
            "access controls;",
            "credential management;",
            "encryption where appropriate;",
            "API authentication;",
            "webhook verification;",
            "monitoring for suspicious activity;",
            "regular software updates; and",
            "incident response procedures.",
          ],
        },

        {
          type: "paragraph",
          content:
            "The Merchant remains solely responsible for security incidents arising from its own systems, personnel, infrastructure, or integrations, except to the extent directly caused by OCTOREQ's breach of these Terms or failure to exercise reasonable care.",
        },
      ],
    },

    {
      id: "compliance-investigations",
      title: "3.10 Cooperation with Compliance Investigations",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant agrees to cooperate promptly and in good faith with OCTOREQ, Payment Providers, regulators, financial institutions, and competent authorities in connection with fraud investigations, chargebacks, compliance reviews, legal requests, security incidents, or other matters reasonably relating to the Services.",
        },

        {
          type: "paragraph",
          content:
            "Failure to provide requested information or reasonable cooperation may result in temporary restrictions, settlement delays, suspension, or termination of the Account where reasonably necessary.",
        },
      ],
    },

    {
      id: "merchant-wallet",
      title: "4.1 Merchant Wallet",

      blocks: [
                {
          type: "paragraph",
          content:
            "Where available, OCTOREQ may provide each approved Merchant with a Merchant Wallet to facilitate the recording of transaction proceeds, settlements, adjustments, reserves, fees, refunds, chargebacks, payouts, reconciliations, and other accounting entries associated with the Services.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant Wallet is an internal accounting ledger maintained exclusively for bookkeeping, reconciliation, settlement calculations, reporting, payout coordination, operational processing, and related administrative purposes.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant Wallet is not:",
        },

        {
          type: "list",
          content: [
            "a bank account;",
            "an electronic money account;",
            "a payment account;",
            "a deposit account;",
            "a savings account;",
            "a stored-value account;",
            "a trust account;",
            "an escrow account; or",
            "a custodial account.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Balances displayed within the Merchant Wallet represent internal accounting records maintained by OCTOREQ and remain subject to reconciliation, Payment Provider confirmations, operational adjustments, compliance reviews, legal obligations, reserve requirements, and applicable regulatory requirements.",
        },

        {
          type: "paragraph",
          content:
            "Nothing contained in these Terms creates any banker-customer relationship, fiduciary relationship, trustee relationship, debtor-creditor relationship, custodial relationship, or financial advisory relationship between OCTOREQ and the Merchant except where expressly required by applicable law.",
        },
      ],
    },

    {
      id: "settlement-of-funds",
      title: "4.2 Settlement of Funds",

      blocks: [
        {
          type: "paragraph",
          content:
            "Successful payment authorization or transaction approval does not automatically entitle a Merchant to immediate settlement or payout.",
        },

        {
          type: "paragraph",
          content:
            "Settlement remains subject to:",
        },

        {
          type: "list",
          content: [
            "confirmation by the applicable Payment Provider;",
            "fraud detection and fraud prevention procedures;",
            "reconciliation processes;",
            "compliance reviews;",
            "sanctions screening;",
            "anti-money laundering reviews;",
            "dispute resolution processes;",
            "operational processing;",
            "applicable reserve requirements;",
            "regulatory requirements; and",
            "any applicable holding periods.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Settlement timelines may vary depending on factors including:",
        },

        {
          type: "list",
          content: [
            "Payment Provider;",
            "payment method;",
            "transaction type;",
            "banking infrastructure;",
            "currency;",
            "Merchant risk profile;",
            "jurisdiction;",
            "regulatory obligations;",
            "fraud investigations;",
            "chargeback exposure;",
            "operational circumstances; and",
            "force majeure events.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Any settlement timeframe communicated by OCTOREQ is an estimate only and shall not constitute a guarantee or legally binding commitment unless expressly agreed in writing.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may delay, suspend, adjust, or withhold settlement where reasonably necessary to:",
        },

        {
          type: "list",
          content: [
            "comply with applicable law;",
            "comply with regulatory directives;",
            "comply with Payment Provider requirements;",
            "comply with lawful court orders;",
            "comply with lawful requests from competent authorities;",
            "investigate fraud;",
            "manage operational or financial risk;",
            "protect Customers;",
            "protect Payment Providers;",
            "protect Merchants; or",
            "protect the integrity of the Platform.",
          ],
        },
      ],
    },

    {
      id: "payouts",
      title: "4.3 Payouts",

      blocks: [
        {
          type: "paragraph",
          content:
            "Where payout functionality is available, eligible settlement proceeds may be transferred to the Merchant's approved settlement account.",
        },

        {
          type: "paragraph",
          content:
            "Payouts shall only be made to bank accounts or financial accounts verified and approved by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant remains solely responsible for ensuring that settlement account information remains complete, accurate, current, and legally owned or controlled by the Merchant.",
        },

        {
          type: "paragraph",
          content:
            "Where funds have been successfully transferred using settlement information supplied by the Merchant, OCTOREQ shall not be responsible for recovering or replacing such funds solely because incorrect banking information was provided.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may suspend or refuse payouts where reasonably necessary to:",
        },

        {
          type: "list",
          content: [
            "complete compliance reviews;",
            "investigate suspicious activity;",
            "resolve disputes;",
            "manage fraud risks;",
            "comply with legal obligations;",
            "satisfy Payment Provider requirements; or",
            "recover outstanding amounts owed by the Merchant.",
          ],
        },
      ],
    },

    {
      id: "adjustments-holds-reserves",
      title: "4.4 Adjustments, Holds, Reserves and Negative Balances",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ may apply credits, debits, reversals, adjustments, corrections, offsets, or accounting modifications to Merchant Wallet balances where reasonably necessary to address:",
        },

        {
          type: "list",
          content: [
            "accounting errors;",
            "duplicate transactions;",
            "provider corrections;",
            "failed settlements;",
            "reconciliation discrepancies;",
            "refunds;",
            "chargebacks;",
            "transaction reversals;",
            "suspected fraud;",
            "regulatory requirements;",
            "reserve releases;",
            "operational inaccuracies; or",
            "other legitimate business or compliance purposes.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where reasonably necessary to manage operational, financial, legal, regulatory, fraud, or chargeback risk, OCTOREQ may establish rolling reserves, fixed reserves, delayed settlement arrangements, or other commercially reasonable reserve mechanisms.",
        },

        {
          type: "paragraph",
          content:
            "Reserve amounts may be reviewed periodically and adjusted based on changing risk profiles.",
        },

        {
          type: "paragraph",
          content:
            "Where deductions exceed available balances, the Merchant Wallet may display a negative balance.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant remains fully responsible for repaying all outstanding balances owed to OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may recover outstanding amounts by:",
        },

        {
          type: "list",
          content: [
            "offsetting future settlements;",
            "deducting future transaction proceeds;",
            "applying available reserves;",
            "charging an approved payment method;",
            "issuing invoices;",
            "requesting direct payment; or",
            "exercising any other lawful remedy available under these Terms or applicable law.",
          ],
        },
      ],
    },

    {
      id: "fees-billing",
      title: "4.5 Fees and Billing",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant agrees to pay all fees applicable to its use of the Services.",
        },

        {
          type: "paragraph",
          content:
            "Applicable fees may include:",
        },

        {
          type: "list",
          content: [
            "payment orchestration fees;",
            "transaction fees;",
            "subscription fees;",
            "API usage fees;",
            "payout fees;",
            "settlement coordination fees;",
            "foreign exchange or currency conversion fees where applicable;",
            "chargeback administration fees;",
            "dispute handling fees;",
            "premium feature fees;",
            "onboarding fees;",
            "support fees; and",
            "any other fees communicated by OCTOREQ.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Unless otherwise agreed in writing, OCTOREQ may collect fees by:",
        },

        {
          type: "list",
          content: [
            "deducting settlement balances;",
            "deducting Merchant Wallet balances;",
            "charging an approved payment method;",
            "offsetting future settlements; or",
            "issuing invoices payable by the Merchant.",
          ],
        },

        {
          type: "paragraph",
          content:
            "All fees are exclusive of applicable taxes unless expressly stated otherwise.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant remains responsible for all taxes, levies, duties, governmental assessments, or similar charges arising from its use of the Services, except taxes imposed on OCTOREQ's own income.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may revise pricing where reasonably necessary to reflect:",
        },

        {
          type: "list",
          content: [
            "changes in infrastructure costs;",
            "Payment Provider pricing;",
            "operational expenses;",
            "regulatory requirements;",
            "technological developments;",
            "inflation;",
            "security enhancements; or",
            "new Services.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where practicable, OCTOREQ will provide reasonable advance notice before material pricing changes become effective.",
        },

        {
          type: "paragraph",
          content:
            "Except where required by applicable law or expressly agreed otherwise, all fees paid to OCTOREQ are non-refundable.",
        },
      ],
    },

    {
      id: "api-access",
      title: "4.6 API Access",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ provides APIs to enable Merchants and authorized Developers to integrate applications and systems with the Platform.",
        },

        {
          type: "paragraph",
          content:
            "API access is granted solely as a limited, revocable, non-exclusive, non-transferable, non-sublicensable license for the purpose of using the Services in accordance with these Terms and the Documentation.",
        },

        {
          type: "paragraph",
          content:
            "All API Credentials remain the exclusive property of OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may revoke, suspend, rotate, regenerate, replace, restrict, or otherwise modify API Credentials at any time where reasonably necessary for:",
        },

        {
          type: "list",
          content: [
            "security;",
            "operational integrity;",
            "technical maintenance;",
            "fraud prevention;",
            "legal compliance; or",
            "regulatory obligations.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Merchants remain responsible for all activity performed using their API Credentials.",
        },

        {
          type: "paragraph",
          content:
            "Compromised credentials shall be revoked immediately where possible, and OCTOREQ shall be notified without unreasonable delay.",
        },
      ],
    },

    {
      id: "integration-requirements",
      title: "4.7 Integration Requirements",

      blocks: [
                {
          type: "paragraph",
          content:
            "Merchants shall integrate with the Platform strictly in accordance with OCTOREQ's Documentation and accepted industry security standards.",
        },

        {
          type: "paragraph",
          content:
            "Where applicable, Merchants shall:",
        },

        {
          type: "list",
          content: [
            "use HTTPS or other approved secure communication protocols;",
            "validate all API requests and responses;",
            "verify webhook authenticity;",
            "implement idempotency for retryable requests;",
            "securely store authentication credentials;",
            "validate submitted data;",
            "test integration updates before production deployment;",
            "maintain secure infrastructure;",
            "promptly update deprecated API versions; and",
            "monitor integrations for abnormal activity.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Merchants remain solely responsible for maintaining compatibility between their systems and supported API versions.",
        },
      ],
    },

    {
      id: "api-availability",
      title: "4.8 API Availability",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ will use commercially reasonable efforts to maintain reliable Platform availability.",
        },

        {
          type: "paragraph",
          content:
            "However, uninterrupted availability cannot be guaranteed.",
        },

        {
          type: "paragraph",
          content:
            "The Services may be interrupted due to:",
        },

        {
          type: "list",
          content: [
            "scheduled maintenance;",
            "emergency maintenance;",
            "infrastructure failures;",
            "Payment Provider outages;",
            "cloud service disruptions;",
            "cybersecurity incidents;",
            "internet failures;",
            "regulatory actions;",
            "force majeure events; or",
            "circumstances beyond OCTOREQ's reasonable control.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Unless expressly agreed in a separate written Service Level Agreement (SLA), OCTOREQ does not guarantee any minimum uptime, availability percentage, response time, recovery objective, or uninterrupted access to the Services.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may introduce new API versions, retire deprecated functionality, modify authentication requirements, implement new security controls, adjust rate limits, or introduce new technical requirements where reasonably necessary.",
        },
      ],
    },

    {
      id: "prohibited-technical-activities",
      title: "4.9 Prohibited Technical Activities",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant shall not, directly or indirectly:",
        },

        {
          type: "list",
          content: [
            "circumvent authentication mechanisms;",
            "share API Credentials with unauthorized persons;",
            "reverse engineer proprietary Platform components except where expressly permitted by applicable law;",
            "probe, scan, or test Platform vulnerabilities without prior written authorization;",
            "introduce malicious software;",
            "deploy malware or ransomware;",
            "scrape Platform data without authorization;",
            "publish Platform benchmark testing without OCTOREQ's written consent;",
            "develop competing services using proprietary Platform resources;",
            "bypass security controls;",
            "generate excessive automated traffic intended to disrupt the Platform;",
            "access another Merchant's information without authorization; or",
            "misuse the APIs contrary to these Terms or the Documentation.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Violation of this section may result in immediate suspension or termination of Platform access.",
        },
      ],
    },

    {
      id: "security",
      title: "4.10 Security",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ maintains commercially reasonable administrative, technical, organizational, and physical safeguards designed to protect the confidentiality, integrity, and availability of the Platform.",
        },

        {
          type: "paragraph",
          content:
            "While OCTOREQ continuously improves its security practices, no internet-based service can be guaranteed to be completely secure or immune from unauthorized access, cyberattacks, service disruptions, or other security incidents.",
        },

        {
          type: "paragraph",
          content:
            "Security is a shared responsibility.",
        },

        {
          type: "paragraph",
          content:
            "Merchants remain responsible for protecting:",
        },

        {
          type: "list",
          content: [
            "their systems;",
            "devices;",
            "credentials;",
            "employees;",
            "contractors;",
            "integrations;",
            "applications;",
            "infrastructure; and",
            "authorized users.",
          ],
        },

        {
          type: "paragraph",
          content:
            "The Merchant shall immediately notify OCTOREQ upon becoming aware of:",
        },

        {
          type: "list",
          content: [
            "unauthorized Account access;",
            "credential compromise;",
            "suspected fraud;",
            "malware infections affecting Platform integrations;",
            "cybersecurity incidents;",
            "unauthorized API activity; or",
            "any event reasonably likely to impact the integrity or security of the Services.",
          ],
        },
      ],
    },

    {
      id: "privacy-data-protection",
      title: "4.11 Privacy and Data Protection",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ processes personal information in accordance with its Privacy Policy and applicable data protection laws, including the Nigeria Data Protection Act (NDPA), where applicable.",
        },

        {
          type: "paragraph",
          content:
            "Each party remains independently responsible for complying with all privacy and data protection obligations applicable to its own processing activities.",
        },

        {
          type: "paragraph",
          content:
            "Where OCTOREQ processes personal information on behalf of a Merchant, such processing shall be limited to what is reasonably necessary to provide, maintain, secure, improve, and support the Services or otherwise comply with applicable law.",
        },

        {
          type: "paragraph",
          content:
            "Where required by applicable law or agreed between the parties, OCTOREQ and the Merchant may enter into a separate Data Processing Agreement (DPA).",
        },

        {
          type: "paragraph",
          content:
            "Merchants remain solely responsible for obtaining all notices, consents, permissions, authorizations, and lawful bases required for collecting and processing Customer information.",
        },
      ],
    },

    {
      id: "confidential-information",
      title: "4.12 Confidential Information",

      blocks: [
        {
          type: "paragraph",
          content:
            "During the course of the relationship, either party may receive confidential, proprietary, technical, commercial, financial, or business information belonging to the other.",
        },

        {
          type: "paragraph",
          content:
            "Each party agrees to:",
        },

        {
          type: "list",
          content: [
            "protect such information using at least reasonable care;",
            "use such information solely for purposes related to these Terms; and",
            "restrict disclosure to personnel or professional advisers with a legitimate need to know and who are bound by appropriate confidentiality obligations.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Confidentiality obligations shall not apply to information that:",
        },

        {
          type: "list",
          content: [
            "becomes publicly available without breach of these Terms;",
            "was lawfully received from an independent third party;",
            "was independently developed without reference to confidential information; or",
            "must be disclosed pursuant to applicable law, court order, or regulatory requirement.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Upon termination of these Terms, each party shall, upon request and subject to applicable law and legitimate record-retention obligations, return or securely destroy the other party's confidential information.",
        },

        {
          type: "paragraph",
          content:
            "The confidentiality obligations contained in this section shall survive termination of these Terms.",
        },
      ],
    },

    {
      id: "acceptable-use",
      title: "5.1 Acceptable Use",

      blocks: [
                {
          type: "paragraph",
          content:
            "The Merchant shall use the Services solely for lawful business purposes and in accordance with these Terms, applicable laws, Payment Provider requirements, OCTOREQ's Documentation, the Acceptable Use Policy, and all other applicable Platform policies.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant shall not use the Platform to:",
        },

        {
          type: "list",
          content: [
            "process payments for illegal, prohibited, or unauthorized goods or services;",
            "engage in fraud, money laundering, terrorist financing, sanctions evasion, or any other financial crime;",
            "facilitate scams, deceptive business practices, phishing, impersonation, or unauthorized transactions;",
            "infringe intellectual property or proprietary rights;",
            "violate applicable consumer protection, competition, privacy, or cybersecurity laws;",
            "circumvent legal, regulatory, contractual, or technical requirements;",
            "interfere with the operation, security, availability, or integrity of the Platform;",
            "introduce malware, ransomware, viruses, spyware, or malicious software;",
            "use stolen payment instruments or compromised accounts;",
            "submit fraudulent or fictitious transactions;",
            "process transactions on behalf of undisclosed third parties without OCTOREQ's prior written approval;",
            "use the Services in a manner that may expose OCTOREQ, Payment Providers, Customers, or other Merchants to legal, financial, operational, or reputational risk; or",
            "engage in any activity prohibited under OCTOREQ's Acceptable Use Policy.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ reserves the right to investigate suspected violations and take any action reasonably necessary to protect the Platform, including suspension, restriction, termination, transaction rejection, settlement delays, reporting to competent authorities where required by law, or any other lawful action.",
        },
      ],
    },

    {
      id: "third-party-services",
      title: "5.2 Third-Party Services and Payment Providers",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Platform integrates with licensed or otherwise authorized third-party Payment Providers, financial institutions, banking partners, cloud infrastructure providers, identity verification providers, communication providers, analytics platforms, and other third-party technologies.",
        },

        {
          type: "paragraph",
          content:
            "Certain Services may therefore be subject to additional contractual terms, operational requirements, or policies imposed by those third parties.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ does not own, control, or operate third-party services and does not warrant or guarantee their:",
        },

        {
          type: "list",
          content: [
            "availability;",
            "performance;",
            "security;",
            "accuracy;",
            "reliability; or",
            "continued operation.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Delays, interruptions, failures, restrictions, suspensions, or service outages attributable to third-party providers shall not, by themselves, constitute a breach of these Terms by OCTOREQ.",
        },

        {
          type: "paragraph",
          content:
            "Where a Payment Provider rejects, suspends, terminates, restricts, or otherwise limits a Merchant, Customer, Account, payout, settlement, or Transaction, OCTOREQ may take corresponding action where reasonably necessary to comply with contractual obligations, regulatory requirements, or risk management procedures.",
        },
      ],
    },

    {
      id: "suspension-termination",
      title: "5.3 Suspension and Termination",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may suspend, restrict, disable, or terminate access to all or part of the Services immediately where reasonably necessary to:",
        },

        {
          type: "list",
          content: [
            "protect the security, availability, or integrity of the Platform;",
            "investigate suspected fraud, financial crime, or illegal activity;",
            "comply with applicable law, regulatory directives, or court orders;",
            "comply with Payment Provider requirements;",
            "respond to lawful requests from competent authorities;",
            "enforce these Terms or other Platform policies;",
            "prevent financial loss;",
            "protect Customers, Payment Providers, Merchants, or OCTOREQ from harm;",
            "manage operational, legal, or reputational risk; or",
            "address material breaches of these Terms.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Where reasonably practicable and appropriate, OCTOREQ will use reasonable efforts to notify the Merchant and provide an opportunity to remedy the issue before terminating the Account.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant may terminate its Account by providing notice through the Merchant Dashboard or by contacting OCTOREQ, subject to:",
        },

        {
          type: "list",
          content: [
            "completion of pending settlements;",
            "outstanding investigations;",
            "applicable legal or regulatory obligations;",
            "unresolved disputes;",
            "outstanding fees; and",
            "unpaid balances.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Termination shall not affect rights or obligations that by their nature survive termination, including provisions relating to:",
        },

        {
          type: "list",
          content: [
            "payment obligations;",
            "reserves;",
            "settlements;",
            "confidentiality;",
            "intellectual property;",
            "indemnification;",
            "limitation of liability;",
            "dispute resolution;",
            "audit rights;",
            "record retention; and",
            "governing law.",
          ],
        },
      ],
    },

    {
      id: "intellectual-property",
      title: "5.4 Intellectual Property",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Platform, including its software, APIs, source code, databases, user interfaces, algorithms, workflows, documentation, trademarks, trade names, logos, graphics, designs, compilations, business methods, proprietary technology, and all related intellectual property rights are owned by OCTOREQ or its licensors and are protected under applicable intellectual property laws.",
        },

        {
          type: "paragraph",
          content:
            "Except for the limited rights expressly granted under these Terms, no ownership rights, licenses, or interests are transferred to the Merchant.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant shall not, except where expressly permitted by applicable law or OCTOREQ's prior written consent:",
        },

        {
          type: "list",
          content: [
            "copy;",
            "reproduce;",
            "modify;",
            "distribute;",
            "sublicense;",
            "sell;",
            "lease;",
            "create derivative works;",
            "decompile;",
            "disassemble;",
            "reverse engineer; or",
            "commercially exploit any part of the Platform.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Merchants retain ownership of their own business names, trademarks, branding, content, databases, and other intellectual property submitted to the Platform.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant grants OCTOREQ a limited, worldwide, non-exclusive, royalty-free, revocable license to use such materials solely to:",
        },

        {
          type: "list",
          content: [
            "provide the Services;",
            "operate the Platform;",
            "facilitate integrations;",
            "process transactions;",
            "improve functionality;",
            "provide customer support;",
            "maintain security;",
            "comply with legal obligations; and",
            "perform obligations under these Terms.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Nothing in these Terms grants the Merchant the right to use OCTOREQ's trademarks, trade names, logos, or branding without prior written consent.",
        },
      ],
    },

    {
      id: "disclaimers",
      title: "5.5 Disclaimers",

      blocks: [
                {
          type: "paragraph",
          content:
            'The Services are provided on an "AS IS" and "AS AVAILABLE" basis.',
        },

        {
          type: "paragraph",
          content:
            "To the fullest extent permitted by applicable law, OCTOREQ disclaims all warranties, representations, guarantees, and conditions, whether express, implied, statutory, or otherwise, including warranties of:",
        },

        {
          type: "list",
          content: [
            "merchantability;",
            "fitness for a particular purpose;",
            "non-infringement;",
            "uninterrupted availability;",
            "accuracy;",
            "reliability;",
            "security;",
            "compatibility; and",
            "error-free operation.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ does not warrant that:",
        },

        {
          type: "list",
          content: [
            "every payment will be successfully processed;",
            "every Transaction will be authorized;",
            "third-party Payment Providers will remain continuously available;",
            "the Platform will operate without interruption;",
            "fraud will always be detected or prevented;",
            "security incidents will never occur; or",
            "the Services will satisfy every Merchant's individual requirements.",
          ],
        },

        {
          type: "paragraph",
          content:
            "Nothing in this section excludes warranties or rights that cannot lawfully be excluded under applicable law.",
        },
      ],
    },

    {
      id: "limitation-of-liability",
      title: "5.6 Limitation of Liability",

      blocks: [
        {
          type: "paragraph",
          content:
            "To the fullest extent permitted by applicable law, OCTOREQ, its affiliates, directors, officers, employees, contractors, licensors, service providers, and agents shall not be liable for any indirect, incidental, consequential, exemplary, punitive, special, or speculative damages, including:",
        },

        {
          type: "list",
          content: [
            "loss of profits;",
            "loss of revenue;",
            "loss of goodwill;",
            "business interruption;",
            "loss of anticipated savings;",
            "reputational harm;",
            "loss of Customers;",
            "loss of business opportunities; or",
            "loss of data,",
          ],
        },

        {
          type: "paragraph",
          content:
            "arising out of or relating to the Services or these Terms, even if advised of the possibility of such damages.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ shall not be liable for losses arising from:",
        },

        {
          type: "list",
          content: [
            "Payment Provider failures;",
            "banking delays;",
            "telecommunications failures;",
            "internet outages;",
            "cloud infrastructure failures;",
            "cyberattacks by third parties;",
            "fraudulent activity committed by Customers or Merchants;",
            "inaccurate information supplied by the Merchant;",
            "unauthorized access resulting from the Merchant's failure to protect credentials;",
            "governmental actions;",
            "regulatory actions affecting third-party providers; or",
            "force majeure events.",
          ],
        },

        {
          type: "paragraph",
          content:
            "To the maximum extent permitted by applicable law, OCTOREQ's aggregate liability arising out of or relating to these Terms shall not exceed the total fees actually paid by the Merchant to OCTOREQ during the twelve (12) months immediately preceding the event giving rise to the claim.",
        },

        {
          type: "paragraph",
          content:
            "Nothing in these Terms limits liability to the extent such limitation is prohibited by applicable law.",
        },
      ],
    },

    {
      id: "indemnification",
      title: "5.7 Indemnification",

      blocks: [
        {
          type: "paragraph",
          content:
            "The Merchant agrees to defend, indemnify, and hold harmless OCTOREQ, its affiliates, directors, officers, employees, contractors, licensors, service providers, successors, assigns, and agents from and against any claims, actions, proceedings, liabilities, damages, losses, penalties, judgments, fines, costs, expenses, or reasonable legal fees arising out of or relating to:",
        },

        {
          type: "list",
          content: [
            "the Merchant's breach of these Terms;",
            "the Merchant's business activities;",
            "products or services supplied by the Merchant;",
            "violations of applicable law;",
            "infringement of intellectual property rights;",
            "Customer disputes;",
            "fraudulent, negligent, or unauthorized activities;",
            "regulatory investigations relating to the Merchant's business; or",
            "acts or omissions of the Merchant's employees, contractors, agents, or authorized users.",
          ],
        },
      ],
    },

    {
      id: "changes-to-services",
      title: "5.8 Changes to the Services and Terms",

      blocks: [
        {
          type: "paragraph",
          content:
            "OCTOREQ may modify, improve, expand, replace, suspend, discontinue, or update any part of the Services where reasonably necessary to:",
        },

        {
          type: "list",
          content: [
            "improve functionality;",
            "strengthen security;",
            "comply with applicable law;",
            "satisfy Payment Provider requirements;",
            "respond to technological developments;",
            "improve operational efficiency; or",
            "address legitimate business needs.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may amend these Terms from time to time.",
        },

        {
          type: "paragraph",
          content:
            "Where amendments materially affect Merchant rights or obligations, OCTOREQ will use reasonable efforts to provide advance notice through the Platform, email, or other appropriate communication channels.",
        },

        {
          type: "paragraph",
          content:
            "Continued access to or use of the Services after updated Terms become effective constitutes acceptance of the revised Terms.",
        },
      ],
    },

    {
      id: "force-majeure",
      title: "5.9 Force Majeure",

      blocks: [
                {
          type: "paragraph",
          content:
            "OCTOREQ shall not be liable for any delay, interruption, suspension, failure, or inability to perform its obligations where such delay or failure results from events beyond its reasonable control.",
        },

        {
          type: "paragraph",
          content:
            "Force majeure events may include:",
        },

        {
          type: "list",
          content: [
            "natural disasters;",
            "acts of God;",
            "fires;",
            "floods;",
            "earthquakes;",
            "epidemics or pandemics;",
            "war;",
            "terrorism;",
            "civil unrest;",
            "labor disputes;",
            "government actions;",
            "changes in applicable law;",
            "telecommunications failures;",
            "internet disruptions;",
            "cloud infrastructure failures;",
            "Payment Provider outages;",
            "banking system failures;",
            "cyberattacks by third parties; or",
            "other events beyond OCTOREQ's reasonable control.",
          ],
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ shall resume performance as soon as reasonably practicable after the force majeure event has ended.",
        },
      ],
    },

    {
      id: "governing-law-dispute-resolution",
      title: "5.10 Governing Law and Dispute Resolution",

      blocks: [
        {
          type: "paragraph",
          content:
            "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to conflict of law principles.",
        },

        {
          type: "paragraph",
          content:
            "The parties shall use reasonable efforts to resolve disputes through good-faith negotiations before commencing formal legal proceedings.",
        },

        {
          type: "paragraph",
          content:
            "Where a dispute cannot be resolved through negotiation, the dispute shall be submitted to the courts of competent jurisdiction in Nigeria, unless applicable law requires otherwise or the parties agree in writing to an alternative dispute resolution mechanism.",
        },
      ],
    },

    {
      id: "general-provisions",
      title: "5.11 General Provisions",

      blocks: [
        {
          type: "paragraph",
          content:
            "If any provision of these Terms is determined to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.",
        },

        {
          type: "paragraph",
          content:
            "Failure by OCTOREQ to enforce any right or provision under these Terms shall not constitute a waiver of that right or provision.",
        },

        {
          type: "paragraph",
          content:
            "The Merchant may not assign or transfer any rights or obligations under these Terms without OCTOREQ's prior written consent.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may assign or transfer its rights or obligations under these Terms as part of a merger, acquisition, corporate restructuring, sale of assets, or other legitimate business transaction.",
        },

        {
          type: "paragraph",
          content:
            "These Terms, together with any policies, Documentation, agreements, or notices expressly incorporated by reference, constitute the entire agreement between the parties concerning the Services and supersede all prior or contemporaneous understandings relating to their subject matter.",
        },
      ],
    },

    {
      id: "contact-information",
      title: "5.12 Contact Information",

      blocks: [
        {
          type: "paragraph",
          content:
            "Questions regarding these Terms, legal notices, compliance matters, or other enquiries relating to the Services may be directed to OCTOREQ through the official contact channels published on the Platform or the OCTOREQ website.",
        },

        {
          type: "paragraph",
          content:
            "OCTOREQ may update its contact information from time to time without amending these Terms, provided that current contact details remain publicly available through its official communication channels.",
        },
      ],
    },
  ],
};

export default terms;