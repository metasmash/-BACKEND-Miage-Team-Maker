const app = require('../index')
const MIDDLEWARE = require('./middleware/index')
const CONTROLLER = require('./actionController/index')
const ROUTES = require('./routes')

app.get(ROUTES.ROOT, async (req, res, err) => {})

app.get(ROUTES.USER_LEVEL, CONTROLLER.GET_USER_LEVEL)

app.get(ROUTES.USER_INFORMATION, CONTROLLER.GET_USER_INFORMATION)

app.get(ROUTES.RIOT_API_KEY, CONTROLLER.GET_RIOT_API_KEY)

app.post(
    ROUTES.RIOT_API_KEY,
    MIDDLEWARE.CHECK_RIOT_KEY,
    MIDDLEWARE.UPDATE_RIOT_KEY,
    CONTROLLER.CREATE_DB_RIOT_KEY
)
