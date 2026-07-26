export interface LegalContentBlock {
  type: "paragraph" | "list";
  title?: string;
  content: string | string[];
}

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalContentBlock[];
}

export interface LegalDocument {
  title: string;
  description: string;

  version: string;
  effectiveDate: string;
  lastUpdated: string;

  sections: LegalSection[];
}