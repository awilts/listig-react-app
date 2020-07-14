import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { useFirebase } from 'react-redux-firebase'
import { functions } from 'firebase'

const StartGameButton: FC = () => {
    const firebase = useFirebase()

    const startGame = async () => {
        const startGameFunction = firebase
            // @ts-ignore
            .functions()
            .httpsCallable('startGame')
        startGameFunction({ lobbyId: 'GeyDTo9SUstY3JhlofJj' }).then(function (
            result: functions.HttpsCallableResult
        ) {
            const sanitizedMessage = result.data
            console.log(sanitizedMessage)
        })
    }

    return (
        <Button onClick={startGame} variant="contained" color="primary">
            start game
        </Button>
    )
}

export default StartGameButton
