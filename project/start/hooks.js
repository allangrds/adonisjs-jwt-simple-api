const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Exception = use('Exception')

  Exception.handle('InvalidJwtToken', async (error, { response }) => {
    return response.status(401).send({'error': 'Unauthorized'})
  })
})

