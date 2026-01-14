import { test, expect } from '../../playwright/global-teardown';
import { login } from '../helpers/auth';

test.describe('Login group', () => {
  test('Login', async ({ page, context }) => {
    await login(page);
  });
});
