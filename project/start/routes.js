'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route') // eslint-disable-line no-undef

Route
  .post('/users', 'UserController.store')
  .validator('StoreUser')

Route
  .group(() => {
    Route
      .post('login', 'AuthController.login')
      .validator('AuthUser')

    Route
      .post('logout', 'AuthController.logout')
      .middleware(['auth'])

    Route
      .post('refresh', 'AuthController.refresh')
      .middleware(['auth'])
  })
  .prefix('auth')


Route
  .group(() => {
    Route
      .get('/', 'TaskController.index')

    Route
      .get('/:id', 'TaskController.show')

    Route
      .patch('/:id', 'TaskController.update')
      .validator('UpdateTask')

    Route
      .delete('/:id', 'TaskController.destroy')

    Route
      .post('/', 'TaskController.store')
      .validator('StoreTask')
  })
  .prefix('tasks')
  .middleware(['auth'])
