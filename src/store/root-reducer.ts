import {Item} from "../types/Item";
import {CREATE_ITEM_SUCCESS} from '../actions/axiosCreateItemActions'
import {GET_ITEMS_SUCCESS} from '../actions/axiosGetItemsActions'
import {RECEIVED_ITEM} from '../actions/webSocketActions'

export interface ItemState {
    items: Item[]
}

const initialState: ItemState = {
    items: []
}

type ItemType =  GET_ITEMS_SUCCESS | CREATE_ITEM_SUCCESS | RECEIVED_ITEM

const addItemReducer = (state = initialState, action: ItemType): ItemState => {
    switch (action.type) {
        case "RECEIVED_ITEM":
        case "CREATE_ITEM_SUCCESS":
            return {...state, items: [...state.items, action.payload]}
        case "GET_ITEMS_SUCCESS":
            return state
    }
    return state
};

export default addItemReducer