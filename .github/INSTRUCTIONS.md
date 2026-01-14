# Automated Testing Instructions - Playwright MCP

## What I want you to do!
1. Run /test/seed.spec.ts which opens the page and logs in
2. Then follow the instructions from the prompt
3. Members tab is under Users
4. Generate the email dynamically but make it start with: mcp-
5. If a Message box appears, close it
6. Log out using the method from /helpers/auth.ts

## What I don't want you to do!
1. I don't want you to create a plan
2. I don't want you to create a test
3. Don't create customers
4. Don't create groups

## When it's a combobox follow these steps:
1. If the prompt contains the text 'existing' verify that it's not a combobox
2. If the identified element is a combobox, then use methods from /helpers/auth.ts
3. If the method doesn't work, improve it

## When it's a tag follow these steps:
1. If the prompt contains the text 'existing' verify that it's not a tag
2. If the identified element is a tag, then use methods from /helpers/auth.ts
3. If the method doesn't work, improve it

## Report
1. Write all variables used in the test
2. At the end, create a report only with the methods from /tests/helpers which failedd when was used, propose a modification
3. If what you did is repetitive and can be made into a generic helper, create it 