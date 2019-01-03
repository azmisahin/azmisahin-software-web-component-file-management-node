/**
 * File Management
 *
 */
class FileManagement {

  /**
   * File Management
   *
   * @returns <FileManagement>
   */
  constructor() {

    /// Name
    this.name = 'file-management'

    /// Return FileManagement
    return this
  }
}

/**
 * File Management Version
 */
FileManagement.prototype.version = require('../package.json').version

module.exports = FileManagement

/**
 * Set file full location
 *
 * @param {string} location File Location
 *
 * @returns <FileManagement>
 */
FileManagement.prototype.setFile = function (location) {

  /// File
  var File = require('./file')

  /// File Info
  this.File = new File(location)

  /// FileManagement
  return this
}
