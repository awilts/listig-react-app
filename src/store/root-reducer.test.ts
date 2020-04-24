import itemApp from './root-reducer'
import {Item} from "../types/Item";
import {createItemSuccess} from "../actions/axiosCreateItemActions";

const testItem: Item = {
    messageId: "mId",
    groupId: "gId",
    userId: "uId",
    text: "someText",
}

describe('itemApp reducer', () => {
    it('should add an item to an empty initial state', () => {
        const resultingState = itemApp(undefined, createItemSuccess(testItem));

        const expectedState = {items: [testItem]};
        expect(resultingState).toEqual(expectedState);
    })

    it('should add an item to the state', () => {
        const initialState = {items: [testItem]};
        const newItem = Object.assign({}, testItem, {messageId: "mId2"})

        const resultingState = itemApp(initialState, createItemSuccess(newItem));

        const expectedState = {items: [testItem, newItem]};
        expect(resultingState).toEqual(expectedState);
    })
});
