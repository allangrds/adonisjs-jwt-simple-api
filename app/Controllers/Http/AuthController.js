'use strict'

class AuthController {
  async login ({ request, response, auth }) {
    const { email, password } = request.all()
    let token

    try {
      token = await auth.withRefreshToken().attempt(email, password)
    } catch (e) {
      return response.status(401).send({'error': 'Unauthorized'})
    }

    return response.status(200).send(token)
  }

  async logout ({ response, auth }) {
    const apiToken = auth.getAuthHeader()

    await auth
      .authenticator('jwt')
      .revokeTokens([apiToken], true)

    return response.status(200).send({message: 'Successfully logged out'})
  }

  async refresh ({ request, response, auth }) {
    const { refresh_token: refreshToken  } = request.all()

    const token = await auth.newRefreshToken().generateForRefreshToken(refreshToken)

    return response.status(200).send(token)
  }
}

module.exports = AuthController
