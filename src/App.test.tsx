import React from 'react'
import App from './App'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('./components/ItemList', () => 'div')
jest.mock('./components/CreateItemForm', () => 'div')
jest.mock('./components/ClearItemsButton', () => 'div')
jest.mock('react-redux')

import { subscribeToItems } from './actions/webSocketActions'
import { axiosGetItems } from './actions/axiosGetItemsActions'

jest.mock('./actions/axiosGetItemsActions', () => ({
    axiosGetItems: jest.fn().mockReturnValue(jest.fn()),
}))
jest.mock('./actions/webSocketActions', () => ({
    subscribeToItems: jest.fn().mockReturnValue(jest.fn()),
}))
describe('App init', () => {
    mount(<App />)
    it('loads items', () => {
        expect(axiosGetItems).toHaveBeenCalledTimes(1)
    })
    it('subscribes to item updates', () => {
        expect(subscribeToItems).toHaveBeenCalledTimes(1)
    })
    it('renders ItemList', () => {
        // expect(mock).toHaveBeenCalledTimes(1)
    })
})
