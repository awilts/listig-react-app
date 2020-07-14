import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { useFirebase } from 'react-redux-firebase'
import { functions } from 'firebase'

type Auth = {
    uid: string
    displayName: string
}
const TestSecRule: FC = () => {
    const firebase = useFirebase()

    const doSth = async () => {
        const someWebFunction = firebase
            // @ts-ignore
            .functions()
            .httpsCallable('voteForCard')
        someWebFunction({ text: 'mytext' }).then(function (
            result: functions.HttpsCallableResult
        ) {
            const sanitizedMessage = result.data
            console.log(sanitizedMessage)
        })
    }

    const doSthElse = async () => {
        const someWebFunction = firebase
            // @ts-ignore
            .functions()
            .httpsCallable('startGame')
        someWebFunction({ lobbyId: 'GeyDTo9SUstY3JhlofJj' }).then(function (
            result: functions.HttpsCallableResult
        ) {
            const sanitizedMessage = result.data
            console.log(sanitizedMessage)
        })
    }

    return (
        <>
            <Button onClick={doSth} variant="contained" color="primary">
                test stuff
            </Button>
            <Button onClick={doSthElse} variant="contained" color="primary">
                start game
            </Button>
        </>
    )
}

export default TestSecRule
