import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { useFirebase } from 'react-redux-firebase'
import { functions } from 'firebase'

const JoinGameButton: FC = () => {
    const firebase = useFirebase()
    const joinGameWeb = firebase
        // @ts-ignore
        .functions()
        .httpsCallable('joinGame')

    const joinGame = async () => {
        const lobbyId = 'GeyDTo9SUstY3JhlofJj'
        joinGameWeb({ lobbyId }).then(function (
            result: functions.HttpsCallableResult
        ) {
            const sanitizedMessage = result.data
            console.log(sanitizedMessage)
        })
    }

    return (
        <Button onClick={joinGame} variant="contained" color="primary">
            Join game
        </Button>
    )
}

export default JoinGameButton
