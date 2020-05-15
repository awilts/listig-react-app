import { Item } from '../types/Item'

export type GetItemsSuccessAction = {
    type: 'GET_ITEMS_SUCCESS'
    payload: Item[]
}
export type CreateItemsSuccessAction = {
    type: 'CREATE_ITEM_SUCCESS'
    payload: Item[]
}
export type CreateItemAction = {
    type: string
    payload: Item
}
