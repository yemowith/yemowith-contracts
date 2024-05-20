class BaseCollectorage {
  private indexes: Indexes = {};
  private items: Items = {};

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

  private createItem(
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

  attachMethods = (item: Item) => {
    const self = this;

    const createSubCollect = (
      address: string,
      keywords: string[],
      parentKey: string,
    ): Item => {
      return self.createSubCollect(address, keywords, parentKey);
    };

    const createDocument = (address: string, keywords: string[]): Item => {
      return self.createDocument(address, keywords);
    };

    const createSubDocument = (
      address: string,
      keywords: string[],
      parentKey: string,
    ): Item => {
      return self.createSubDocument(address, keywords, parentKey);
    };

    const searchByKeyword = (keyword: string): string[] => {
      return self.searchByKeyword(keyword);
    };

    const searchByParent = (parentKey: string): string[] => {
      return self.searchByParent(parentKey);
    };

    const searchByChild = (childKey: string): string | null => {
      return self.searchByChild(childKey);
    };

    return {
      ...item,
      createSubCollect,
      createDocument,
      createSubDocument,
      searchByKeyword,
      searchByParent,
      searchByChild,
    };
  };

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
