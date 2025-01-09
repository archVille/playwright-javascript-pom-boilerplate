# playwright-javascript-pom-boilerplate
Created a boilerplate for POM example using 'https://opensource-demo.orangehrmlive.com'

# Install

```
npm install
```

# Running tests

## Run E2E tests 
```
npx playwright test
```

## Run interactive UI mode
```
npx playwright test --ui
```

## Run debug mode
```
npx playwright test --debug
```

# Adiing other workers(browsers)

Uncomment this lines in playwright.config.js

```
  // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
```



# If you want to set up a new playwright project 
```
npm init playwright@latest
```



