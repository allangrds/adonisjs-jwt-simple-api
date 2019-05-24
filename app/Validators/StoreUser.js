'use strict'

class StoreUser {
  get rules () {
    return {
      username: 'required|max:40|unique:users,username',
      email: 'required|email|max:40|unique:users,email',
      password: 'required|min:6|max:12',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = StoreUser
