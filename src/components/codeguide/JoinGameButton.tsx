import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { useFirestore } from 'react-redux-firebase'
import { Player } from '../../types/Player'
import { useSelector } from 'react-redux'
import { State } from '../../store/state'
import { Auth } from '../../types/Auth'
import { omit } from 'lodash'

const JoinGameButton: FC = () => {
    const firestore = useFirestore()

    // @ts-ignore
    const user: Auth = useSelector((state: State) => state.firebase.auth)

    const addPlayer = (player: Player) => {
        firestore.collection('players').doc(player.id).set(omit(player, 'id'))
    }

    const joinGame = () => {
        addPlayer({ id: user.uid, name: user.displayName })
    }

    return (
        <Button onClick={joinGame} variant="contained" color="primary">
            Join game
        </Button>
    )
}

export default JoinGameButton
