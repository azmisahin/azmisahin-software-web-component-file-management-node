/// Test Manager
var TestManager = require('test-management')

/// Test Instance
var t = new TestManager(true)

/// Test Referance
var FileManagement = require('../src')

/// Instance Test
var isInstanceTest = function (){
  // Instanse name
  var expected = 'file-management'
  var actual = new FileManagement().name
  t.Test('Instance constractor is ok?', expected , actual)
}
isInstanceTest()

/// Incrementing Version Test
var isIncrementingVersionsTest = function (){
  // Major.Minor.Patch
  var expected = 3
  var actual = new FileManagement().version.split('.').length
  t.Test('is there Incrementing semantic versions?', expected , actual)
}
isIncrementingVersionsTest()
