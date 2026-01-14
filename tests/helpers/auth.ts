import { test, expect, Page } from '@playwright/test';
import { credentials } from './credentials';

export async function login(page: Page) {
  await page.goto('https://eu.dev-cloud.trados.com/lc/', { waitUntil: 'networkidle' });
  await page.getByLabel('Email').fill(credentials.lc.email);
  await page.getByLabel('Password').fill(credentials.lc.password);
  await page.getByRole('button', { name: 'Log In' }).click();
  
  // Wait for successful login - Dashboard should appear
  await expect(page.getByText('Dashboard')).toBeVisible({ timeout: 10000 });
}

export async function logout(page: Page) {
  await page.locator('.dap-btn-user-avatar').click();
  await page.getByRole('menuitem', { name: 'Sign out' }).click();
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
}

export async function openCombobox(page: Page) {
  await page.locator('.x-field .x-form-arrow-trigger').click();
}

export async function selectComboboxOption(page: Page, option: string) {
  await page.getByRole('combobox').fill(option);
  await page.getByRole('option', { name: option }).waitFor({ state: 'visible' });
  await page.getByRole('option', { name: option }).click();
}

export async function verifyComboboxSelection(page: Page, option: string) {
  await expect(page.getByRole('combobox')).toHaveValue(option);
}

export async function selectTagFieldOption(page: Page, fieldName: string, option: string) {
  await page.getByRole('textbox', { name: fieldName }).fill(option);
  await page.getByRole('option', { name: option }).waitFor({ state: 'visible' });
  await page.getByRole('option', { name: option }).click();
}

export function generateTestEmail(domain: string = 'sdl.testinator.com'): string {
  const timestamp = Math.floor(Date.now() / 1000);
  return `mcp-${timestamp}@${domain}`;
}
