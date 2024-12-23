import express from 'express'
import "express-async-errors"

import { router } from './routers'
import { errorHandling } from './midlewares/error-handling'
const app = express()
app.use(express.json())
app.use(router)
app.use(express.static('public'));
app.use(errorHandling)
export {app}