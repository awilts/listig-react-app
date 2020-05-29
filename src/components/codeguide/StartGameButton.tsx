import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { useFirestore } from 'react-redux-firebase'
import { Word } from '../../types/Word'

type Props = {
    words: Word[]
}

const StartGameButton: FC<Props> = (props) => {
    const firestore = useFirestore()
    const deleteWord = (word: Word) => {
        if (word.id != null) {
            firestore.collection('words').doc(word.id).delete()
        }
    }

    const addWord = (word: Word) => {
        firestore.collection('words').add(word)
    }

    const doSth = () => {
        props.words.forEach((word) => {
            deleteWord(word)
        })

        addWord({ text: 'Kuh', boardId: 0 })
        addWord({ text: 'Pferd', boardId: 1 })
        addWord({ text: 'Hund', boardId: 2 })
        addWord({ text: 'Katze', boardId: 3 })
        addWord({ text: 'Schwein', boardId: 4 })
        addWord({ text: 'Rind', boardId: 5 })
        addWord({ text: 'Eber', boardId: 6 })
        addWord({ text: 'Ferkel', boardId: 7 })
        addWord({ text: 'Huhn', boardId: 8 })
        addWord({ text: 'Ei', boardId: 9 })
        addWord({ text: 'Elephant', boardId: 10 })
        addWord({ text: 'Schaf', boardId: 11 })
        addWord({ text: 'Lamm', boardId: 12 })
        addWord({ text: 'Fohlen', boardId: 13 })
        addWord({ text: 'Ziege', boardId: 14 })
        addWord({ text: 'Hahn', boardId: 15 })
        addWord({ text: 'Küken', boardId: 16 })
        addWord({ text: 'Bauer', boardId: 17 })
        addWord({ text: 'Scheune', boardId: 18 })
        addWord({ text: 'Milch', boardId: 19 })
    }

    return (
        <Button onClick={doSth} variant="contained" color="primary">
            Reset game
        </Button>
    )
}

export default StartGameButton
