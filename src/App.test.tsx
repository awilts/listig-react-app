import React from 'react'
import App from './App'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { subscribeToItems } from './actions/webSocketActions'
import { axiosGetItems } from './actions/axiosGetItemsActions'
import ItemList from './components/ItemList'
import CreateItemForm from './components/CreateItemForm'
import ClearItemsButton from './components/ClearItemsButton'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-redux')
jest.mock('./components/ItemList', () => jest.fn().mockReturnValue(''))
jest.mock('./components/CreateItemForm', () => jest.fn().mockReturnValue(''))
jest.mock('./components/ClearItemsButton', () => jest.fn().mockReturnValue(''))
jest.mock('./actions/axiosGetItemsActions', () => ({
    axiosGetItems: jest.fn().mockReturnValue(jest.fn()),
}))
jest.mock('./actions/webSocketActions', () => ({
    subscribeToItems: jest.fn().mockReturnValue(jest.fn()),
}))
describe('On initialization App ', () => {
    mount(<App />)
    it('loads items', () => {
        expect(axiosGetItems).toHaveBeenCalledTimes(1)
    })
    it('subscribes to item updates', () => {
        expect(subscribeToItems).toHaveBeenCalledTimes(1)
    })
    it('renders ItemList', () => {
        expect(ItemList).toHaveBeenCalledTimes(1)
    })
    it('renders CreateItemForm', () => {
        expect(CreateItemForm).toHaveBeenCalledTimes(1)
    })
    it('renders ClearItemsButton', () => {
        expect(ClearItemsButton).toHaveBeenCalledTimes(1)
    })
})
