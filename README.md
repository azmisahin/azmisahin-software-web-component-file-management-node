# file-management

Simple File Management.

## Install

```shell
$ npm i -g npm
▀ ╢█████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟
$ npm i --save file-management
▀ ╢█████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟
```

## Usage

> main.js

```js
/// File Management Reference
var FileManagement = require('file-management-simple')

/// Test object
var fileManagement = new FileManagement()

/// Test Result
var result = {
  /// Expected test result
  expected : 'file-management',
  /// Actual test result
  actual : fileManagement.name
}

// Test output
console.log(result)

```

```shell

$ node main

{ expected: 'file-management', actual: 'file-management' }

```

## Test

```shell
$ npm run test

> node test

Simple Test Tool
==================================================
Instance constractor is ok?
Success
--------------------------------------------------
is there Incrementing semantic versions?
Success
--------------------------------------------------
```

## Pipeline

[![Build Status](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-file-management-node/_apis/build/status/azmisahin.azmisahin-software-web-component-file-management-node?branchName=master)](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-file-management-node/_build/latest?definitionId=11?branchName=master)

[![NPM](https://nodei.co/npm/file-management-simple.png)](https://nodei.co/npm/file-management-simple/)
