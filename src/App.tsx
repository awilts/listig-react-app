import React, { FC } from 'react'
import './App.css'
import Authentication from './components/Authentication'
import ItemOverview from './components/items/ItemOverview'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { createStore, combineReducers } from 'redux'
import {
    ReactReduxFirebaseProvider,
    firebaseReducer,
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'
import { initialState } from './store/state'
import CodeguideGame from './components/codeguide/CodeguideGame'

const conf = require('./devlocal').conf
const fbConfig = {
    apiKey: conf.apiKey,
    authDomain: conf.authDomain,
    projectId: conf.projectId,
}

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
}

firebase.initializeApp(fbConfig)
firebase.firestore()

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
})

const store = createStore(
    rootReducer,
    initialState,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}

const showItems = false
const showCodeguide = true

const App: FC = () => {
    return (
        <div>
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <Authentication>
                        {showItems ? <ItemOverview /> : <div />}
                        {showCodeguide ? <CodeguideGame /> : <div />}
                    </Authentication>
                </ReactReduxFirebaseProvider>
            </Provider>
        </div>
    )
}

export default App
