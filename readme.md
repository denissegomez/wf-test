## Introduction

This repo contains the three parts requested for this test. Please check the sections below corresponding to each of the exercises for more details on them and how to execute them. In both cases, you will need to clone this repository locally and install the dependencies (you will need to have Git and Node installed on your computer):

Use the following commands in your terminal.
```
git clone https://github.com/denissegomez/wf-test.git
cd wf-test
npm install
```

## Theory on Test Cases
The solution for this exersice is in the [1-Theoretical.md](1-Theoretical.md) file.

## API Tests
The API tests can be found inside the `2-API` folder. They were done using Mocha and Chai.
Please note that I usually do it with C#, but it was fun learning it :). Also note that sometimes one a test might fail due to timeout from the API. 

In order to execute it, after following the steps mentioned in the Introduction, you can run the following command in your terminal:

```
npm test
```

Tests will be executed and the result shown in the console.

## UI Tests
The UI tests can be found in side the `3-UI` folder. They were done using Selenium Webdriver + Protractor. To run them locally, you will need to install Protractor, update the Webdriver Manager, and start it to run the server locally.

```
npm install -g protractor
webdriver-manager update
webdriver-manager start
```

Now you should be able to run the tests by using the command below in your terminal

```
protractor 3-UI/conf.js
```