import itemApp from './root-reducer'
import { Item } from '../types/Item'
import { createItemSuccess } from '../actions/axiosCreateItemActions'
import { getItemsSuccess } from '../actions/axiosGetItemsActions'
import { wsReceivedItem } from '../actions/webSocketActions'

const testItem: Item = {
    messageId: 'mId',
    groupId: 'gId',
    userId: 'uId',
    text: 'someText',
}

describe('action CREATE_ITEM_SUCCESS', () => {
    it('should add an item to an empty state', () => {
        const resultingState = itemApp(undefined, createItemSuccess(testItem))

        const expectedState = { items: [testItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should add an item', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem, { messageId: 'mId2' })

        const resultingState = itemApp(initialState, createItemSuccess(newItem))

        const expectedState = { items: [testItem, newItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should not add an item with a duplicate id', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem)

        const resultingState = itemApp(initialState, createItemSuccess(newItem))

        const expectedState = { items: [testItem] }
        expect(resultingState).toEqual(expectedState)
    })
})

describe('action RECEIVED_ITEM', () => {
    it('should add an item to an empty state', () => {
        const resultingState = itemApp(undefined, wsReceivedItem(testItem))

        const expectedState = { items: [testItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should add an item', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem, { messageId: 'mId2' })

        const resultingState = itemApp(initialState, wsReceivedItem(newItem))

        const expectedState = { items: [testItem, newItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should not add an item with a duplicate id', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem)

        const resultingState = itemApp(initialState, wsReceivedItem(newItem))

        const expectedState = { items: [testItem] }
        expect(resultingState).toEqual(expectedState)
    })
})

describe('action GET_ITEMS_SUCCESS', () => {
    it('should add multiple items to empty state', () => {
        const newItem = Object.assign({}, testItem, { messageId: 'mId2' })

        const resultingState = itemApp(
            undefined,
            getItemsSuccess([testItem, newItem])
        )

        const expectedState = { items: [testItem, newItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should not add multiple duplicate items', () => {
        const testItem2 = Object.assign({}, testItem, { messageId: 'mId2' })
        const initialState = { items: [testItem, testItem2] }

        const resultingState = itemApp(
            initialState,
            getItemsSuccess([testItem, testItem2])
        )

        const expectedState = { items: [testItem, testItem2] }
        expect(resultingState).toEqual(expectedState)
    })
})
