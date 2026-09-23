import {test} from "@playwright/test"

test.only("todo mvc",async ({page}) => {
    await page.goto("https://todomvc.com/examples/react/dist/");
    let add=page.getByTestId('text-input');
    await add.fill("Buy groceries");
    await add.press('Enter');
    await add.fill('walk');
    await add.press('Enter');
    await add.fill('eat');
    await add.press('Enter');
    await add.fill('study');
    await add.press('Enter');
    await page.waitForTimeout(3000);
})
test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  
  
  await page.getByRole('listitem').filter({ hasText: 'buy grocery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'eat' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
});