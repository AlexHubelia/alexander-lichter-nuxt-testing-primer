// End to end tests
import { setup, $fetch, createPage, url } from "@nuxt/test-utils/e2e";
import { describe, test, expect } from "vitest";

describe("App", async () => {
  await setup();
  test("Contains number as string", async () => {
    const html = await $fetch("/");
    expect(html).toContain("Number:");
  });
  test("With Playwright", async () => {
    const page = await createPage();
    await page.goto(url("/"), { waitUntil: "hydration" });
    const text = await page.textContent("span");
    const number = Number(text);
    expect(number).toBeGreaterThan(0); // Checks if the number is greater than 0.

    await page.click("button"); // Clicks the button to refresh the number.

    await page.waitForTimeout(1000);
    const text2 = await page.textContent("span");
    const number2 = Number(text2);
    expect(number2).toBeGreaterThan(0); // Checks if the new number is greater than 0.
    expect(number).not.toBe(number2); // Checks if the previous number is different from the new number.
  });
});
