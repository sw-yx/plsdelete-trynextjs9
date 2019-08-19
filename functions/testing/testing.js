exports.handler = (event, context, callback) => {
  const firstchunk = event.path.split('/')[1]
  const renderpath = './' + path.join('./pages', firstchunk === '' ? '/index.js' : firstchunk + '.js')
  console.log('[render]  ', renderpath)
  console.log({ event })
  callback(null, {
    statusCode: 500,
    body: '200 ok',
  })
}
