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
import { Grid } from '@material-ui/core'

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
        <Grid container spacing={2}>
            <PlayerList players={players} />
            <CodeguideBoard words={words} />
            <StartGameButton words={words} />
            <JoinGameButton />
            <TestSecRule />
        </Grid>
    )
}

export default CodeguideGame
