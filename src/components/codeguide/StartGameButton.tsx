import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { useFirestore } from 'react-redux-firebase'
import { Word } from '../../types/Word'
import { CardColor } from '../../types/CardColor'

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

    const resetGame = () => {
        props.words.forEach((word) => {
            deleteWord(word)
        })

        addWord({ text: 'Kuh', boardId: 0, color: CardColor.red })
        addWord({ text: 'Pferd', boardId: 1, color: CardColor.blue })
        addWord({ text: 'Hund', boardId: 2, color: CardColor.unknown })
        addWord({ text: 'Katze', boardId: 3, color: CardColor.unknown })
        addWord({ text: 'Schwein', boardId: 4, color: CardColor.unknown })
        addWord({ text: 'Rind', boardId: 5, color: CardColor.unknown })
        addWord({ text: 'Eber', boardId: 6, color: CardColor.unknown })
        addWord({ text: 'Ferkel', boardId: 7, color: CardColor.unknown })
        addWord({ text: 'Huhn', boardId: 8, color: CardColor.unknown })
        addWord({ text: 'Ei', boardId: 9, color: CardColor.unknown })
        addWord({ text: 'Elephant', boardId: 10, color: CardColor.unknown })
        addWord({ text: 'Schaf', boardId: 11, color: CardColor.unknown })
        addWord({ text: 'Lamm', boardId: 12, color: CardColor.unknown })
        addWord({ text: 'Fohlen', boardId: 13, color: CardColor.unknown })
        addWord({ text: 'Ziege', boardId: 14, color: CardColor.unknown })
        addWord({ text: 'Hahn', boardId: 15, color: CardColor.unknown })
        addWord({ text: 'Küken', boardId: 16, color: CardColor.unknown })
        addWord({ text: 'Bauer', boardId: 17, color: CardColor.unknown })
        addWord({ text: 'Scheune', boardId: 18, color: CardColor.unknown })
        addWord({ text: 'Milch', boardId: 19, color: CardColor.unknown })
    }

    return (
        <Button onClick={resetGame} variant="contained" color="primary">
            Reset game
        </Button>
    )
}

export default StartGameButton
