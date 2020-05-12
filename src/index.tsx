import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './store/root-reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

sagaMiddleware.run(rootSaga)

serviceWorker.unregister()
