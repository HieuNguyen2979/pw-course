import { test } from "@playwright/test";
test("test 01", async ({ page }) => {
  await test.step("Click link", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });
  await test.step("Fill fiels", async () => {
    await page.locator("//input[@id='username']").fill("Hieu Nguyen");
    await page.locator("//input[@id='email']").fill("email@gmail.com");
    await page.locator("//input[@id='male']").check();
    await page.locator("//input[@id='reading']").check();
    await page
      .locator("//select[@id='interests']")
      .selectOption({ label: "Art" });
    await page
      .locator("//select[@id='country']")
      .selectOption({ label: "Canada" });
    await page.locator("//input[@id='dob']").fill("1994-09-07");
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/source/test.txt");
    //.setInputFiles("C:/Users/PC/OneDrive/Desktop/test.txt");
    await page.locator("//textarea[@id='bio']").fill(`Hieu Nguyen dep zai`);
    await page.locator("//input[@id='rating']").fill("9");
    console.log("hihi");
  });
});