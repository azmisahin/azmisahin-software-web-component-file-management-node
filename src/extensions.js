/**
 * Read a File Sync
 *
 * @param {string} filename File Name
 *
 * @returns UTF8 File Content
 */
function readFileSync (filename) {

  /// File Content
  var result = undefined

  try {

    // Define file stream
    var fs = require(`${filename}`)

    // Read file content
    result = fs

  } catch (error) {

    // Error handler
    throw `File not reading...\n${filename}\n${error.message}`
  }

  /// Result String
  return result
}

/// ReadFileSync
module.exports = readFileSync
