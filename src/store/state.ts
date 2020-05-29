import { Item } from '../types/Item'
import { Word } from '../types/Word'

export const initialState: State = {
    firestore: {
        ordered: {
            items: [],
            words: [],
        },
    },
}

export type State = {
    firestore: {
        ordered: {
            items: Item[]
            words: Word[]
        }
    }
}
