# Promt Instructions - Playwright MCP

## What I want you to do!
- Run /test/seed.spec.ts which opens the page and logs in
- use prioritar methods from /helpers/auth.ts
- Then follow the instructions from the prompt
- Members tab is under Users
- Generate the email using generateTestEmail method from /helpers/auth.ts
- If a Message box appears, close it, use closeInvitationDialog method from /helpers/auth.ts
- Log out using the method from /helpers/auth.ts

## What I don't want you to do!
- I don't want you to create a plan
- I don't want you to create a test
- Don't create customers
- Don't create groups

## When it's a combobox follow these steps:
- If the prompt contains the text 'existing' is a combobox
- For combobox use selectComboboxOption method from /helpers/auth.ts
- If the method doesn't work, improve it

## When it's a tag field follow these steps:
- If the prompt contains the text 'existing' is a tag field
- For tag field use selectTagFieldOption method from /helpers/auth.ts
- If the method doesn't work, improve it

## Report
- Write all variables used in the test
- Create a report only methods from /tests/helpers which failedd when was used, propose a modification
- If what you did is repetitive and can be made into a generic helper, create it 