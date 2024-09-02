`nvm use` // from the root dir
`npm ci`
`npx init playwright@latest` // should install all package based on whats selected 
`npx playwright test` // finds test based on files names spec.js
`npx playwright test --ui` // shows the UI mode what we can use to run the tests with and kick off run on it and you can use it to debug too
`npx playwright test --project=chromium --headed`
`npx playwright test exampletest.spec.js --project=chromium --headed` // one test run only
`npx playwright test -g "Title we need to run off" --project=chromium --headed` // runs only the test that matches the title

