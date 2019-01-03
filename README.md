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

/// Test Params
var sampleFile = './tests/sample/test.txt'

/// Is the file foldeer defined resolved
var folder = new FileManagement()
            .setFile(sampleFile)
            .File
            .Folder

/// Is the file name defined resolved
var file = new FileManagement()
          .setFile(sampleFile)
          .File
          .Name

console.log(`Sample\t: ${sampleFile}`)
console.log(`Folder\t: ${folder}`)
console.log(`File\t: ${file}`)

```

```shell

$ node main

Sample  : ./tests/sample/test.txt
Folder  : ./tests/sample
File    : test.txt

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
Is the file Folder defined resolved?
Success
--------------------------------------------------
Is the filename defined resolved?
Success
--------------------------------------------------
```

## Pipeline

[![Build Status](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-file-management-node/_apis/build/status/azmisahin.azmisahin-software-web-component-file-management-node?branchName=master)](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-file-management-node/_build/latest?definitionId=11?branchName=master)

[![NPM](https://nodei.co/npm/file-management-simple.png)](https://nodei.co/npm/file-management-simple/)
