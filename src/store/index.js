// remember when I said this is just a standard store
// this one is a little more advanced to show you
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'
// this pulls in your combinedReducers
// nav_reducer is one of them
import reducers from '../reducers'

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
)

persistStore(store, { storage: AsyncStorage, whitelist: [] })

// this exports it for App.js    
export default store
