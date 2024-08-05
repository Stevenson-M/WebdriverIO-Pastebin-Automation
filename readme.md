# WebdriverIO-Pastebin-Automation

## Description
This project automates the creation and verification of pastes on the Pastebin website using WebdriverIO. The automated scenarios include creating a basic paste and a paste with specific code and formatting.

## Prerequisites
- Node.js (version 14 or higher)
- NPM (version 6 or higher)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/YourUsername/WebdriverIO-Pastebin-Automation.git
    cd WebdriverIO-Pastebin-Automation
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Project Structure
```plaintext
WebdriverIO-Pastebin-Automation/
├── allure-report/
├── allure-results/
├── artifacts/
├── node_modules/
├── src/
│   ├── config/
│   ├── po/
│   │   └── pages/
│   │       ├── base.page.js
│   │       ├── createdPaste.page.js
│   │       └── pastebin.page.js
│   └── test/
│       ├── firstPastebin.test.js
│       └── secondPastebin.test.js
├── .gitignore
├── package-lock.json
├── package.json
├── readme.md
└── wdio.conf.js
```

## Usage
1. Run the tests:
    ```sh
    npm run test
    ```

2. Generate the Allure report:
    ```sh
    npm run allure-report
    ```

3. Open the Allure report:
    ```sh
    npm run allure-open
    ```

## Autor: Jinson Stevenson Moreno Aguilar - jinson.moreno@gmail.com

