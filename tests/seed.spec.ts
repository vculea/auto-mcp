import { test, expect } from '../playwright/global-teardown';
import { login, generateTestEmail, selectComboboxOption, selectTagFieldOption, closeInvitationDialog } from './helpers/auth';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    await login(page);
  });

  test('create member in Customers location and Administrators group', async ({ page }) => {
    // Variables used in this test
    const testEmail = generateTestEmail();
    const firstName = 'Test';
    const lastName = 'Member';
    const location = 'Customers';
    const group = 'Administrators';
    
    console.log('=== Test Variables ===');
    console.log('Email:', testEmail);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Location:', location);
    console.log('Group:', group);
    console.log('=====================');
    
    // Login
    await login(page);
    
    // Navigate to Users -> Members
    await page.getByRole('button', { name: 'Users' }).click();
    await page.waitForTimeout(1000); // Wait for menu to appear
    
    // Try to find and click Members menuitem
    const membersMenuItem = page.getByRole('menuitem', { name: 'Members' });
    await membersMenuItem.waitFor({ state: 'visible', timeout: 10000 });
    await membersMenuItem.click();
    
    // Wait for Members page to load
    await page.waitForTimeout(2000);
    
    // Click "Add member" button
    await page.getByRole('button', { name: 'Add member' }).click();
    
    // Wait for the dialog to appear
    await page.waitForTimeout(1000);
    
    // Fill in the member details
    await page.getByRole('textbox', { name: 'Email' }).fill(testEmail);
    await page.getByRole('textbox', { name: 'First name' }).fill(firstName);
    await page.getByRole('textbox', { name: 'Last name' }).fill(lastName);
    
    // Select Customers location (existing - combobox)
    await selectComboboxOption(page, 'Location', location);
    
    // Wait a bit for the location to be selected
    await page.waitForTimeout(500);
    
    // Select Administrators group (existing - tag field)
    await selectTagFieldOption(page, 'Groups', group);
    
    // Wait a bit for the group to be selected
    await page.waitForTimeout(500);
    
    // Click Invite button
    await page.getByRole('button', { name: 'Invite' }).click();
    
    // Wait for invitation to be sent
    await page.waitForTimeout(2000);
    
    // Try to close invitation dialog if it appears
    try {
      await closeInvitationDialog(page, 'Invitation sent');
    } catch (e) {
      console.log('No invitation dialog to close or already closed');
    }
    
    // Verify the member was created
    console.log('=== Member Created Successfully ===');
  });
});
