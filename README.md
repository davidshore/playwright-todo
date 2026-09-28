# Att göra-lista med Playwright

Ett litet Next.js-projekt för att prova end-to-end-tester med Playwright och GitHub Actions.

## Kör lokalt

```bash
npm ci
npx playwright install chromium
npm run dev
```

Öppna <http://localhost:3000> och lägg till eller ta bort en uppgift.

## Kör tester

```bash
npm test
```

Playwright startar utvecklingsservern automatiskt om den inte redan körs. Tre tester kontrollerar den tomma listan, att lägga till en uppgift och att ta bort den. Vid push eller pull request kör GitHub Actions lint, bygge och samma tester.
