'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const TaskFilter = use('App/ModelFilters/TaskFilter')

class Task extends Model {
  static boot () {
    super.boot()
    this.addTrait('@provider:Filterable', TaskFilter)
  }
}

module.exports = Task
