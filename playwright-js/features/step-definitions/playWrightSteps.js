const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');

Given("I PlayWright page", { timeout: 60 * 1000 }, async function () {
    await this.openUrl('https://demo.playwright.dev/todomvc');
});

When(/^I fill (.*) in TODO field with success$/, async function (todoField)  {
    const field = this.page.getByPlaceholder('What needs to be done?');
    await field.fill(todoField);
    await field.press('Enter');

    this.todoField = todoField;
});

Then(/^I check item added$/, async function ()  {
    await expect(this.page.getByTestId('todo-title')).toHaveText(this.todoField);
});
