'use strict'

const Task = use('App/Models/Task')
const { pick } = require('ramda')

class TaskController {
  async index ({ request, response }) {
    const requestData = request.all()
    const limit = 10
    const page = requestData.page ? requestData.page : 1
    const tasks = await Task
      .query()
      .filter(requestData)
      .paginate(page, limit)

    return response
      .status(200)
      .send(tasks)
  }

  async show ({ params, response }) {
    const task = await Task.find(params.id)

    if (!task) {
      return response
        .status(404)
        .send({'error': 'The task does not exists'})
    }

    return response
      .status(200)
      .send(task)
  }

  async store ({ request, response, auth }) {
    const data = request.only(['title', 'description'])
    const task = await Task.create(data)

    return response
      .status(201)
      .send(task)
  }

  async update ({ params, request, response }) {
    const requestData = request.all()
    const task = await Task.find(params.id)
    const toFill = pick(['title', 'description'], requestData)

    if (!task) {
      return response
        .status(404)
        .send({'error': 'The task does not exists'})
    }

    if (!requestData.title && !requestData.description) {
      return response
        .status(400)
        .send({
          'error': {
            'message': 'one of fields is required',
            'field': 'title,description',
            'validation': 'required'
          }
        })
    }

    task.merge(toFill)

    await task.save()

    return response
      .status(202)
      .send(task)
  }

  async destroy ({ params, response }) {
    const task = await Task.find(params.id)

    if (!task) {
      return response
        .status(404)
        .send({'error': 'The task does not exists'})
    }

    await task.delete()

    return response
      .status(204)
      .send()
  }
}

module.exports = TaskController
