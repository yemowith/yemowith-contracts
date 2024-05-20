type DocumentItemKey = {
  address: string; // is key item
  name: string;
  data: any;
  type: any;
  status: "new" | "updated" | "draft" | "deleted";
};

type DocumentItem = {
  address: string; // is key item
  rows: Record<string, DocumentItemKey>;
  status: "new" | "updated" | "draft" | "deleted";
};

type Referral = {
  isChild: boolean;
  isRoot: boolean;
  parentKey: string | null;
  level: number;
  itemsLength: number;
  childs: Record<string, Item>;
};

type Item = {
  address: string; // is key item
  _selfDocument: DocumentItem;
  type: "Collect" | "Document";
  referral: Referral;
  keywords: string[]; // for indexing
};

type Index = {
  keyword: string;
  documentAddresses: string[];
};

type Indexes = Record<string, Index>;
type Items = Record<string, Item>;
