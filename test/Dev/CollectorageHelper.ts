class CollectorageHelper {
  private baseCollectorage: BaseCollectorage;

  constructor(baseCollectorage: BaseCollectorage) {
    this.baseCollectorage = baseCollectorage;
  }

  public createCollect(address: string, keywords: string[]): Item {
    return this.baseCollectorage.createItem(address, keywords, "Collect");
  }

  public createSubCollect(
    address: string,
    keywords: string[],
    parentKey: string,
  ): Item {
    const parentItem = this.baseCollectorage.items[parentKey];
    if (
      parentItem &&
      parentItem.type === "Collect" &&
      parentItem.referral.isRoot
    ) {
      return this.baseCollectorage.createItem(
        address,
        keywords,
        "Collect",
        parentKey,
      );
    }
    throw new Error("Only root collects can create sub-collects.");
  }

  public createDocument(address: string, keywords: string[]): Item {
    return this.baseCollectorage.createItem(address, keywords, "Document");
  }

  public createSubDocument(
    address: string,
    keywords: string[],
    parentKey: string,
  ): Item {
    return this.baseCollectorage.createItem(
      address,
      keywords,
      "Document",
      parentKey,
    );
  }

  public searchByKeyword(keyword: string): string[] {
    return this.baseCollectorage.searchByKeyword(keyword);
  }

  public searchByParent(parentKey: string): string[] {
    return this.baseCollectorage.searchByParent(parentKey);
  }

  public searchByChild(childKey: string): string | null {
    return this.baseCollectorage.searchByChild(childKey);
  }
}
