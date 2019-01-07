# file-management

Simple File Management. Reads json files.

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

/// Test Params For Json
var MockJson      = {
                    File: './tests/sample/test.json',
                    FileName: 'test.json',
                    FileFolder: './tests/sample',
                    FileContent: { 'value' : 'Sample file content.' }
                  }

/// Is the file foldeer defined resolved
var folder        = new FileManagement()
                    .setFile(MockJson.File)
                    .File
                    .Folder

/// Is the file name defined resolved
var file          = new FileManagement()
                    .setFile(MockJson.File)
                    .File
                    .Name

/// Does the file return as string
var content       = (new FileManagement()
                    .setFile(MockJson.File)
                    .File)
                    .ToString()

/// Does the file return as json
var jsContent     = (new FileManagement()
                    .setFile(MockJson.File)
                    .File)
                    .ToJson()
                    .value

console.log(`------------------------------------------------js`)
console.log(`Sample\t: ${MockJson.File}`)
console.log(`Folder\t: ${folder}`)
console.log(`File\t: ${file}`)
console.log(`Content\t: ${jsContent}`)

```

## Try

```shell

$ node main

Sample  : ./tests/sample/test.json
Folder  : ./tests/sample
File    : test.json
Content : Sample file content.
```

## Test

```shell
$ npm run test

> node tests

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
Does the file return as json?
Success
--------------------------------------------------

```

## Pipeline

[![Build Status](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-file-management-node/_apis/build/status/azmisahin.azmisahin-software-web-component-file-management-node?branchName=master)](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-file-management-node/_build/latest?definitionId=11?branchName=master)

[![NPM](https://nodei.co/npm/file-management-simple.png)](https://nodei.co/npm/file-management-simple/)
