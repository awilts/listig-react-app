import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { initialState } from './store/root-reducer'
import { createWsStarted } from './actions/webSocketActions'
import { getItemsStarted } from './actions/axiosGetItemsActions'

const mockStore = configureStore([])

test('On initialization App ', () => {
    const store = mockStore(initialState)
    let render1 = render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const actions = store.getActions()
    expect(actions).toHaveLength(2)
    expect(actions).toContainEqual(createWsStarted())
    expect(actions).toContainEqual(getItemsStarted())

    //TODO: check items were rendered corretly
})
