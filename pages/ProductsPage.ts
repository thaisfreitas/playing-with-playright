import { Page, expect } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly productTitleListLocator = ".inventory_item_name";

    constructor(page: Page) {
        this.page = page;
    }

    async verifyProductTitlesStartWith(prefix: string) {
        const titleListLocator = this.page.locator(this.productTitleListLocator);
        const productTitleList = await titleListLocator.allTextContents();

        for (const title of productTitleList) {
            expect(title.startsWith(prefix)).toBeTruthy();
        }
    }
}