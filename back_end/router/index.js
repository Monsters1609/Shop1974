const accountRouter = require('./account')
const roleRouter = require('./role')
const userDetailRouter = require('./userDetail')
function Router(app) {
    // Router /Account
    app.use('/api/Account',accountRouter)
    app.use('/api/Role', roleRouter)
    app.use('/api/UserDetail', userDetailRouter)
}
module.exports = Router;