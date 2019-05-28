'use strict'

const ModelFilter = use('ModelFilter')

class TaskFilter extends ModelFilter {
  title (str) {
    return this.where('title', str)
  }

  description (str) {
    return this.where('description', str)
  }
}

module.exports = TaskFilter
