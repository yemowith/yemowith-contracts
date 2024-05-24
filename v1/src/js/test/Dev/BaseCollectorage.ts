class BaseCollectorage {
  private indexes: Indexes = {};
  private items: Items = {};
  private helper: CollectorageHelper;

  constructor() {
    this.helper = new CollectorageHelper(this);
  }

  private addToIndex(item: Item) {
    item.keywords.forEach((keyword) => {
      if (!this.indexes[keyword]) {
        this.indexes[keyword] = { keyword, documentAddresses: [] };
      }
      this.indexes[keyword].documentAddresses.push(item.address);
    });
  }

  private addItem(item: Item) {
    this.items[item.address] = item;
    this.addToIndex(item);
  }

  public createItem(
    address: string,
    keywords: string[],
    type: "Collect" | "Document",
    parentKey: string | null = null,
  ): Item {
    const newItem: Item = {
      address,
      _selfDocument: {
        address,
        rows: {},
        status: "new",
      },
      type,
      referral: {
        isChild: !!parentKey,
        isRoot: !parentKey,
        parentKey,
        level: parentKey ? this.items[parentKey].referral.level + 1 : 0,
        itemsLength: 0,
        childs: {},
      },
      keywords,
    };

    if (parentKey) {
      this.items[parentKey].referral.childs[address] = newItem;
      this.items[parentKey].referral.itemsLength += 1;
    }

    this.addItem(newItem);
    return this.attachMethods(newItem);
  }

  private attachMethods(item: Item): Item {
    const self = this;

    const createCollect = (address: string, keywords: string[]): Item => {
      return self.helper.createCollect(address, keywords);
    };

    const createSubCollect = (
      address: string,
      keywords: string[],
      parentKey: string,
    ): Item => {
      return self.helper.createSubCollect(address, keywords, parentKey);
    };

    const createDocument = (address: string, keywords: string[]): Item => {
      return self.helper.createDocument(address, keywords);
    };

    const createSubDocument = (
      address: string,
      keywords: string[],
      parentKey: string,
    ): Item => {
      return self.helper.createSubDocument(address, keywords, parentKey);
    };

    const searchByKeyword = (keyword: string): string[] => {
      return self.helper.searchByKeyword(keyword);
    };

    const searchByParent = (parentKey: string): string[] => {
      return self.helper.searchByParent(parentKey);
    };

    const searchByChild = (childKey: string): string | null => {
      return self.helper.searchByChild(childKey);
    };

    return {
      ...item,
      createCollect,
      createSubCollect,
      createDocument,
      createSubDocument,
      searchByKeyword,
      searchByParent,
      searchByChild,
    };
  }

  public createCollect(address: string, keywords: string[]): Item {
    return this.createItem(address, keywords, "Collect");
  }

  public createSubCollect(
    address: string,
    keywords: string[],
    parentKey: string,
  ): Item {
    return this.createItem(address, keywords, "Collect", parentKey);
  }

  public createDocument(address: string, keywords: string[]): Item {
    return this.createItem(address, keywords, "Document");
  }

  public createSubDocument(
    address: string,
    keywords: string[],
    parentKey: string,
  ): Item {
    return this.createItem(address, keywords, "Document", parentKey);
  }

  public searchByKeyword(keyword: string): string[] {
    return this.indexes[keyword]?.documentAddresses || [];
  }

  public searchByParent(parentKey: string): string[] {
    return Object.keys(this.items[parentKey]?.referral.childs || {});
  }

  public searchByChild(childKey: string): string | null {
    return this.items[childKey]?.referral.parentKey || null;
  }
}
