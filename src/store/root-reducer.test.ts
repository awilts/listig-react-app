import itemApp from './root-reducer'
import { Item } from '../types/Item'
import { wsReceivedItem } from '../sagas/subcribeToItems'
import { GET_ITEMS_SUCCESS } from '../sagas/getItemsSaga'
import { CREATE_ITEM_SUCCESS } from '../actions/actions'

const testItem: Item = {
    messageId: 'mId',
    groupId: 'gId',
    userId: 'uId',
    text: 'someText',
}

describe('action CREATE_ITEM_SUCCESS', () => {
    it('should add an item to an empty state', () => {
        const resultingState = itemApp(undefined, CREATE_ITEM_SUCCESS(testItem))

        const expectedState = { items: [testItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should add an item', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem, { messageId: 'mId2' })

        const resultingState = itemApp(
            initialState,
            CREATE_ITEM_SUCCESS(newItem)
        )

        const expectedState = { items: [testItem, newItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should not add an item with a duplicate id', () => {
        const initialState = { items: [testItem] }
        const newItem = Object.assign({}, testItem)

        const resultingState = itemApp(
            initialState,
            CREATE_ITEM_SUCCESS(newItem)
        )

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
            GET_ITEMS_SUCCESS([testItem, newItem])
        )

        const expectedState = { items: [testItem, newItem] }
        expect(resultingState).toEqual(expectedState)
    })

    it('should not add multiple duplicate items', () => {
        const testItem2 = Object.assign({}, testItem, { messageId: 'mId2' })
        const initialState = { items: [testItem, testItem2] }

        const resultingState = itemApp(
            initialState,
            GET_ITEMS_SUCCESS([testItem, testItem2])
        )

        const expectedState = { items: [testItem, testItem2] }
        expect(resultingState).toEqual(expectedState)
    })
})
