import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reducer from './reducer'

// composeEnhancers函数   redux-revtools配置
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
const sagaMiddleware = createSagaMiddleware()

const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)

const store = createStore(reducer, composeEnhancers(storeEnhancer))
sagaMiddleware.run(saga)
export default store
