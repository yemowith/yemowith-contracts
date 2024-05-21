"use strict";
class BaseCollectorage {
    constructor() {
        this.indexes = {};
        this.items = {};
        this.helper = new CollectorageHelper(this);
    }
    addToIndex(item) {
        item.keywords.forEach((keyword) => {
            if (!this.indexes[keyword]) {
                this.indexes[keyword] = { keyword, documentAddresses: [] };
            }
            this.indexes[keyword].documentAddresses.push(item.address);
        });
    }
    addItem(item) {
        this.items[item.address] = item;
        this.addToIndex(item);
    }
    createItem(address, keywords, type, parentKey = null) {
        const newItem = {
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
    attachMethods(item) {
        const self = this;
        const createCollect = (address, keywords) => {
            return self.helper.createCollect(address, keywords);
        };
        const createSubCollect = (address, keywords, parentKey) => {
            return self.helper.createSubCollect(address, keywords, parentKey);
        };
        const createDocument = (address, keywords) => {
            return self.helper.createDocument(address, keywords);
        };
        const createSubDocument = (address, keywords, parentKey) => {
            return self.helper.createSubDocument(address, keywords, parentKey);
        };
        const searchByKeyword = (keyword) => {
            return self.helper.searchByKeyword(keyword);
        };
        const searchByParent = (parentKey) => {
            return self.helper.searchByParent(parentKey);
        };
        const searchByChild = (childKey) => {
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
    createCollect(address, keywords) {
        return this.createItem(address, keywords, "Collect");
    }
    createSubCollect(address, keywords, parentKey) {
        return this.createItem(address, keywords, "Collect", parentKey);
    }
    createDocument(address, keywords) {
        return this.createItem(address, keywords, "Document");
    }
    createSubDocument(address, keywords, parentKey) {
        return this.createItem(address, keywords, "Document", parentKey);
    }
    searchByKeyword(keyword) {
        return this.indexes[keyword]?.documentAddresses || [];
    }
    searchByParent(parentKey) {
        return Object.keys(this.items[parentKey]?.referral.childs || {});
    }
    searchByChild(childKey) {
        return this.items[childKey]?.referral.parentKey || null;
    }
}
