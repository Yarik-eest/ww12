import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux'
import Users from '../components/users_new'

const Root = () => {

  return <Provider store={store}>
    <Users />
  </Provider>
}

export default Root