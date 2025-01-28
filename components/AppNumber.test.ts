import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime";
import { it, expect, describe } from "vitest";
import AppNumber from "./AppNumber.vue";

mockNuxtImport("useState", () => {
  // Simulates num = 3 in the component instead of a random number.
  return () => 3;
});

describe("AppNumber", () => {
  it("Can mount the component + contains the text 'Number'", async () => {
    const component = await mountSuspended(AppNumber); // Waits for the component to be mounted before testing.
    expect(component.html()).toContain("Number"); // Checks if the component contains the text "Number".
  });
  it("Returns the state", async () => {
    const component = await mountSuspended(AppNumber);
    expect(component.text()).toContain("Number: 3Refresh");
  });
});
