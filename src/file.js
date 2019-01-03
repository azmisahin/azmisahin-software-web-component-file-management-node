/**
 * File
 *
 */
class File {

  /**
   * File
   *
   * @param {string} location File Location
   *
   * @returns <File>
   */
  constructor(location) {

    /// Require referance
    var path = require('path')

    /// File Name
    this.Name = path.basename(location)

    /// Folder
    this.Folder = path.dirname(location)

    /// Return File
    return this
  }
}

module.exports = File
