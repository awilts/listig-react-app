import React, { FC } from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { State } from '../../store/state'
import CodeguideBoard from './CodeguideBoard'
import { Word } from '../../types/Word'
import StartGameButton from './StartGameButton'
import PlayerList from './PlayerList'
import { Player } from '../../types/Player'
import JoinGameButton from './JoinGameButton'
import TestSecRule from './TestSecRule'

const CodeguideGame: FC = () => {
    useFirestoreConnect('words')
    const words: Word[] = useSelector(
        (state: State) => state.firestore.ordered.words
    )

    useFirestoreConnect('players')
    const players: Player[] = useSelector(
        (state: State) => state.firestore.ordered.players
    )

    return (
        <>
            <PlayerList players={players} />
            <CodeguideBoard words={words} />
            <StartGameButton words={words} />
            <JoinGameButton />
            <TestSecRule />
        </>
    )
}

export default CodeguideGame
