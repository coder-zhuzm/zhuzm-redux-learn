import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

// composeEnhancers函数   redux-revtools配置
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, enhancer)
export default store
