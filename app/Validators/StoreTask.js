'use strict'

class StoreTask {
  get rules () {
    return {
      title: 'required|max:50',
      description: 'required|max:255',
    }
  }
}

module.exports = StoreTask
