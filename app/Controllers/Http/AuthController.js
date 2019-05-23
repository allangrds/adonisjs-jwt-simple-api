'use strict'

class AuthController {
  async login ({ request, response, auth }) {
    const { email, password } = request.all()
    let token

    try {
      token = await auth.attempt(email, password)
    } catch (e) {
      return response.status(401).send({'error': 'Unauthorized'})
    }

    return response.status(200).send(token)
  }

  //TODO Método "logout" não implementado no JWT
  async logout ({ response, auth }) {
    await auth.logout()

    return response.status(200).send(token)
  }
}

module.exports = AuthController
