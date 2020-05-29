import { Item } from '../types/Item'

export const initialState: State = {
    firestore: {
        ordered: {
            items: [],
        },
    },
}

export type State = {
    firestore: {
        ordered: {
            items: Item[]
        }
    }
}
