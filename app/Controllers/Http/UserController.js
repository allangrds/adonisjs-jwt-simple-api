'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, response, auth }) {
    const data = request.only(['username', 'email', 'password'])
    const { email, password } = request.all()

    await User.create(data)

    const token = await auth.attempt(email, password)

    return response.status(200).send(token)
  }
}

module.exports = UserController
