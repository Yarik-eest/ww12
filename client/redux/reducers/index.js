import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import users from './users'
import auth from './auth'

const createRootReducer = (history) =>
  combineReducers({
    users,
    router: connectRouter(history),
    auth
  })

export default createRootReducer
