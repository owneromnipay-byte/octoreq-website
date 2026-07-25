export interface LegalSection {
  id: string;
  title: string;
  content: string[];
}

export interface LegalDocument {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}