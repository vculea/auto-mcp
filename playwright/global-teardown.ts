import { test as base } from '@playwright/test';

// Extend the test fixture to automatically close page and context after each test
export const test = base.extend({
  context: async ({ context }, use) => {
    await use(context);
    await context.close();
  },
  page: async ({ page }, use) => {
    await use(page);
    await page.close();
  },
});

export { expect } from '@playwright/test';
