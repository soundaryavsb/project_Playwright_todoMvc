import {test} from "@playwright/test"

test("todo mvc",async ({page}) => {
    await page.goto("https://todomvc.com/examples/react/dist/");
    await page.waitForTimeout(3000);
    let add=page.getByPlaceholder("What needs to be done?");
    await add.fill("Buy groceries");
    

})