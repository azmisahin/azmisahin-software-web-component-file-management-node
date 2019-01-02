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
var FileManagement = require('file-management')

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
