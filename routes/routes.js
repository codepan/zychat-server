var routes = require('./server')

module.exports = function (app) {
    app.use('/', routes)
    // app.use('/favicon.ico', routes)
    app.use('/user/register', routes)
    app.use('/user/login', routes)
}