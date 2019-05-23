'use strict'

class AuthUser {
  get rules () {
    return {
      email: 'required|email|max:40',
      password: 'required|max:12',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = AuthUser
