import React, { FC } from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { State } from '../../store/state'
import CodeguideBoard from './CodeguideBoard'
import { Word } from '../../types/Word'
import StartGameButton from './StartGameButton'

const CodeguideGame: FC = () => {
    useFirestoreConnect('words')
    const words: Word[] = useSelector(
        (state: State) => state.firestore.ordered.words
    )

    return (
        <>
            <CodeguideBoard words={words} />
            <StartGameButton words={words} />
        </>
    )
}

export default CodeguideGame
