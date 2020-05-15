import itemApp from './root-reducer'
import { Item } from '../types/Item'
import {
    createItemSuccessAction,
    getItemsSuccessAction,
    receivedItemAction,
} from '../actions/actions'

const testItem: Item = {
    messageId: 'mId',
    groupId: 'gId',
    userId: 'uId',
    text: 'someText',
}

describe('action CREATE_ITEM_SUCCESS', () => {
    it('should add an item to an empty state', () => {
        const resultingState = itemApp(
            undefined,
            createItemSuccessAction(testItem)
        )

        const expectedState = { items: [testItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should add an item', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem, { messageId: 'mId2' })

        const resultingState = itemApp(
            initialState,
            createItemSuccessAction(newItem)
        )

        const expectedState = { items: [testItem, newItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should not add an item with a duplicate id', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem)

        const resultingState = itemApp(
            initialState,
            createItemSuccessAction(newItem)
        )

        const expectedState = { items: [testItem] }
        expect(resultingState).toEqual(expectedState)
    })
})

describe('action RECEIVED_ITEM', () => {
    it('should add an item to an empty state', () => {
        const resultingState = itemApp(undefined, receivedItemAction(testItem))

        const expectedState = { items: [testItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should add an item', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem, { messageId: 'mId2' })

        const resultingState = itemApp(
            initialState,
            receivedItemAction(newItem)
        )

        const expectedState = { items: [testItem, newItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should not add an item with a duplicate id', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem)

        const resultingState = itemApp(
            initialState,
            receivedItemAction(newItem)
        )

        const expectedState = { items: [testItem] }
        expect(resultingState).toEqual(expectedState)
    })
})

describe('action GET_ITEMS_SUCCESS', () => {
    it('should add multiple items to empty state', () => {
        const newItem = Object.assign({}, testItem, { messageId: 'mId2' })

        const resultingState = itemApp(
            undefined,
            getItemsSuccessAction([testItem, newItem])
        )

        const expectedState = { items: [testItem, newItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should not add multiple duplicate items', () => {
        const testItem2 = Object.assign({}, testItem, { messageId: 'mId2' })
        const initialState = { items: [testItem, testItem2] }

        const resultingState = itemApp(
            initialState,
            getItemsSuccessAction([testItem, testItem2])
        )

        const expectedState = { items: [testItem, testItem2] }
        expect(resultingState).toEqual(expectedState)
    })
})
