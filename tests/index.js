/// Test Manager
var TestManager = require('test-management')

/// Test Instance
var t = new TestManager(true)

/// Test Referance
var FileManagement = require('../src')

/// Test Params
var Mock = {
  File: './tests/sample/test.txt',
  FileName: 'test.txt',
  FileFolder: './tests/sample'
}

/// Instance Test
var isInstanceTest = function () {
  // Instanse name
  var expected = 'file-management'
  var actual = new FileManagement().name
  t.Test('Instance constractor is ok?', expected, actual)
}
isInstanceTest()

/// Incrementing Version Test
var isIncrementingVersionsTest = function () {
  // Major.Minor.Patch
  var expected = 3
  var actual = new FileManagement().version.split('.').length
  t.Test('is there Incrementing semantic versions?', expected, actual)
}
isIncrementingVersionsTest()

/// Is the file foldeer defined resolved
var isFileFolderResolvedTest = function () {
  var expected = Mock.FileFolder
  var actual = new FileManagement().setFile(Mock.File)
  t.Test('Is the file Folder defined resolved?', expected, actual.File.Folder)
}
isFileFolderResolvedTest()

/// Is the file name defined resolved
var isfileNameResolvedTest = function () {
  var expected = Mock.FileName
  var actual = new FileManagement().setFile(Mock.File)
  t.Test('Is the filename defined resolved?', expected, actual.File.Name)
}
isfileNameResolvedTest()
