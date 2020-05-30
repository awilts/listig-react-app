import { Item } from '../types/Item'
import { Word } from '../types/Word'
import { Player } from '../types/Player'

export const initialState: State = {
    firestore: {
        ordered: {
            items: [],
            words: [],
            players: [],
        },
    },
}

export type State = {
    firestore: {
        ordered: {
            items: Item[]
            words: Word[]
            players: Player[]
        }
    }
}
