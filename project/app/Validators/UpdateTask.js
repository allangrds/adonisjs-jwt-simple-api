'use strict'

class StoreTask {
  get rules () {
    return {
      title: 'max:50',
      description: 'max:255',
    }
  }
}

module.exports = StoreTask
