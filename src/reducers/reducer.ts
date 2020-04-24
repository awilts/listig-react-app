import {Item} from "../types/Item";
import {CREATE_ITEM_SUCCESS} from '../actions/axiosCreateItemActions'
import {GET_ITEMS_SUCCESS} from '../actions/axiosGetItemsActions'

export interface State {
    items: Item[]
}

const initialState = {
    items: []
}

type axiosItemActionTypes = CREATE_ITEM_SUCCESS | GET_ITEMS_SUCCESS

function itemApp(state: State = initialState, action: axiosItemActionTypes): State {
    switch (action.type) {
        case CREATE_ITEM_SUCCESS:
            return Object.assign({}, state,
                {items: [...state.items, action.payload]}
            )
        case GET_ITEMS_SUCCESS:
            return Object.assign({}, state,
                {items: action.payload}
            )
    }
    return state
}

export default itemApp