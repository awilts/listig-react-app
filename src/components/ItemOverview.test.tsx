import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import ItemOverview from './ItemOverview'
import { initialState } from '../store/root-reducer'
import { generateItem } from '../test/utils/generators'
import { SUBSCRIBE_ITEMS_ACTION } from '../sagas/subcribeToItems'
import { getItemsAction } from '../actions/actions'

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
        expect(actions).toContainEqual(SUBSCRIBE_ITEMS_ACTION)
        expect(actions).toContainEqual(getItemsAction())
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

    it('renders no items with the default state', () => {
        const store = mockStore(initialState)
        const itemOverview = render(
            <Provider store={store}>
                <ItemOverview />
            </Provider>
        )
        const listElements = itemOverview.queryAllByRole('listitem')
        expect(listElements).toHaveLength(0)
    })

    it('renders one item', () => {
        const state = Object.assign({}, initialState)
        const item = generateItem()
        state.items.push(item)
        const store = mockStore(state)
        const itemOverview = render(
            <Provider store={store}>
                <ItemOverview />
            </Provider>
        )
        const listElements = itemOverview.queryAllByRole('listitem')
        expect(listElements).toHaveLength(1)
    })
})
