/// Require referance
var ReadFileSync = require('./extensions')
var path = require('path')

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

    /// Base directory
    this.BaseFolder = process.cwd()

    /// File Name
    this.Name = path.basename(location)

    /// Folder
    this.Folder = path.dirname(location)

    /// File Full Path
    this.FilePath = path.join(this.BaseFolder, this.Folder, this.Name)

    /// Return File
    return this
  }

  /**
   * Open File
   */
  Open() {

    /// File Content
    this.Content = ReadFileSync(`${this.FilePath}`)

    /// Return File
    return this
  }

  /**
   * File To String
   */
  ToString() {

    /// Open File
    this.Open()

    /// Result string
    var result = String(this.Content)

    /// Return string
    return result
  }

  /**
   * File To Json
   */
  ToJson() {

    /// Open File
    this.Open()

    /// Result json
    var result = JSON.parse(this.Content)

    /// Return string
    return result
  }
}

module.exports = File
