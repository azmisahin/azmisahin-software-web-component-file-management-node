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
    var fs = require('fs')

    // Read file content 
    result = fs.readFileSync(filename, 'utf8')
    
  } catch (error) {

    // Error handler
    throw `File not reading...\n${error}`
  } 
  
  /// Result String
  return result
}

/// ReadFileSync
module.exports = readFileSync