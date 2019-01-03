// File Stream
var fs = require('fs')

/// Read File Sync
function readFileSync(module, filename) {

  // Content
  var content = fs.readFileSync(filename, 'utf8')

  // Export Content
  try {

    // Exports
    module.exports = content
  } catch (err) {

    // Error
    err.message = filename + ': ' + err.message
    throw err
  }
}

/// Require extensions ['.txt']
require.extensions['.txt'] = readFileSync

/// Require extensions ['.json']
require.extensions['.json'] = readFileSync
