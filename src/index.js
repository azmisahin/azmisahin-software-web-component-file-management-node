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
