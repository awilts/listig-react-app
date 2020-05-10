import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import ItemOverview from './ItemOverview'
import { initialState } from '../store/root-reducer'
import { createWsStarted } from '../actions/webSocketActions'
import { getItemsStarted } from '../actions/axiosGetItemsActions'

const mockStore = configureStore([])

describe('ItemOverview', () => {
    it('queries and subscribes to item backends', () => {
        const store = mockStore(initialState)
        render(
            <Provider store={store}>
                <ItemOverview />
            </Provider>
        )
        const actions = store.getActions()
        expect(actions).toHaveLength(2)
        expect(actions).toContainEqual(createWsStarted())
        expect(actions).toContainEqual(getItemsStarted())
    })

    it('renders the item creation dialog', () => {
        const store = mockStore(initialState)
        const itemOverview = render(
            <Provider store={store}>
                <ItemOverview />
            </Provider>
        )
        const submitButton = itemOverview.getByRole('button', {
            name: 'submit',
        })
        expect(submitButton).not.toBeNull()
    })
})
