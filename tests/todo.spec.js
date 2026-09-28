import { test, expect } from "@playwright/test";

test("visar rubrik och tom lista från början", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Mina uppgifter" }),
  ).toBeVisible();
  await expect(page.getByText("Inga uppgifter än")).toBeVisible();
});

test("lägger till en uppgift", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Ny uppgift").fill("Handla mjölk");
  await page.getByRole("button", { name: "Lägg till" }).click();

  await expect(page.getByRole("listitem")).toHaveText(/Handla mjölk/);
  await expect(page.getByText("Inga uppgifter än")).not.toBeVisible();
});

test("tar bort en uppgift", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Ny uppgift").fill("Handla mjölk");
  await page.getByRole("button", { name: "Lägg till" }).click();
  await expect(page.getByRole("listitem")).toContainText("Handla mjölk");

  await page.getByRole("button", { name: "Ta bort" }).click();

  await expect(page.getByRole("listitem")).toHaveCount(0);
  await expect(page.getByText("Inga uppgifter än")).toBeVisible();
});
