import { test, expect } from '../playwright/global-teardown';
import { login } from './helpers/auth';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    await login(page);
  });
});
