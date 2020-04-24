import itemApp from './root-reducer'
import {Item} from "../types/Item";
import {createItemSuccess} from "../actions/axiosCreateItemActions";

const testItem: Item = {
    messageId: "mId",
    groupId: "gId",
    userId: "uId",
    text: "someText",
}

describe('action CREATE_ITEM_SUCCESS', () => {
    it('should add an item to an empty state', () => {
        const resultingState = itemApp(undefined, createItemSuccess(testItem));

        const expectedState = {items: [testItem]};
        expect(resultingState).toEqual(expectedState);
    })

    it('should add an item', () => {
        const initialState = {items: [testItem]};
        const newItem = Object.assign({}, testItem, {messageId: "mId2"})

        const resultingState = itemApp(initialState, createItemSuccess(newItem));

        const expectedState = {items: [testItem, newItem]};
        expect(resultingState).toEqual(expectedState);
    })

    it('should not add an item with a duplicate id', () => {
        const initialState = {items: [testItem]};
        const newItem = Object.assign({}, testItem)

        const resultingState = itemApp(initialState, createItemSuccess(newItem));

        const expectedState = {items: [testItem]};
        expect(resultingState).toEqual(expectedState);
    })
});

describe('action RECEIVED_ITEM', () => {
    it('should add an item to an empty state', () => {
        const resultingState = itemApp(undefined, createItemSuccess(testItem));

        const expectedState = {items: [testItem]};
        expect(resultingState).toEqual(expectedState);
    })
});

describe('action GET_ITEMS_SUCCESS', () => {
    it('should add multiple items to empty state', () => {
        const initialState = {items: [testItem]};
        const newItem = Object.assign({}, testItem)

        const resultingState = itemApp(initialState, createItemSuccess(newItem));

        const expectedState = {items: [testItem]};
        expect(resultingState).toEqual(expectedState);
    })

    it('should add not at duplicate items to existing state', () => {
        const initialState = {items: [testItem]};
        const newItem = Object.assign({}, testItem)

        const resultingState = itemApp(initialState, createItemSuccess(newItem));

        const expectedState = {items: [testItem]};
        expect(resultingState).toEqual(expectedState);
    })
});