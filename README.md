Using Mocha Framework and chai asserion library, writing and running mobile automation and creating test reports with allure report.
# WebdriverIO Mobile Automation
[WebdriverIO](https://webdriver.io/) 

## Supports
  * Native or Hybrid Android and iOS apps (APK, AAB, IPA)
  * Chrome mobileweb testing on Android devices
  * Safari mobileweb testing on iOS devices
  * Page Object Model (POM) usage with [wdio](https://webdriver.io/)
  * Example BDD scenarios with [cucumber.js](https://github.com/cucumber/cucumber-js) and wdio
  * Auto generated HTML [Allure](https://docs.qameta.io/allure/) test report after test
  * Take screenshot on test failure

## Setup

**Requirements:**

* WebdriverIO v8 requires Node.js version 14 or higher. If you don't have Node installed, download it from [here](https://nodejs.org/en/).
* Install the [Allure command-line tool](https://www.npmjs.com/package/allure-commandline), and process the results directory after test run.

**Install the dependencies:**

Run the following command in project's base directory :
```
npm i
```

mkdir [fileName]

cd [filepath]                                                                    
```bash

npm init -y   

npm install webdriverio  

npm install @wdio/cli          

npx wdio config   

npm install @wdio/allure-reporter --save-dev                                           

npm i allure-commandline   
```

Reference >> https://webdriver.io/docs/appium-service 

## Tests


Run the following command to run the tests

```bash
  npm run test
```

  
## Run it on your computer

Clone the project

```bash
  git clone https://github.com/hakantektas/mac-webdriverIO.git
```

Go to the project directory

```bash
  cd my-project
```

Install required packages

```bash
  npm install
  
  npm install @wdio/appium-service --save-dev
  
  npm install @wdio/cli
```

npm install @wdio/appium-service --save-dev

Run the server

```bash
  npm run start
```

  
## Appendices

Do not forget to edit the device udid and device name information in the Capabilities in the wdio.config file according to its own device / emulator.
