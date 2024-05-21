"use strict";
class CollectorageHelper {
    constructor(baseCollectorage) {
        this.baseCollectorage = baseCollectorage;
    }
    createCollect(address, keywords) {
        return this.baseCollectorage.createItem(address, keywords, "Collect");
    }
    createSubCollect(address, keywords, parentKey) {
        const parentItem = this.baseCollectorage.items[parentKey];
        if (parentItem &&
            parentItem.type === "Collect" &&
            parentItem.referral.isRoot) {
            return this.baseCollectorage.createItem(address, keywords, "Collect", parentKey);
        }
        throw new Error("Only root collects can create sub-collects.");
    }
    createDocument(address, keywords) {
        return this.baseCollectorage.createItem(address, keywords, "Document");
    }
    createSubDocument(address, keywords, parentKey) {
        return this.baseCollectorage.createItem(address, keywords, "Document", parentKey);
    }
    searchByKeyword(keyword) {
        return this.baseCollectorage.searchByKeyword(keyword);
    }
    searchByParent(parentKey) {
        return this.baseCollectorage.searchByParent(parentKey);
    }
    searchByChild(childKey) {
        return this.baseCollectorage.searchByChild(childKey);
    }
}
