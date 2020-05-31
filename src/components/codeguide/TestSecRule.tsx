import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { State } from '../../store/state'

type Auth = {
    uid: string
    displayName: string
}
const TestSecRule: FC = () => {
    const firestore = useFirestore()

    const user: Auth = useSelector(
        // @ts-ignore
        (state: State) => state.firebase.auth
    )

    const changeUser = async () => {
        const res = await firestore
            .collection('players')
            .where('uid', '==', user.uid)
            .get()
        const id = res.docs[0].id
        let promise = await firestore.collection('players').doc(id).update({
            chosenCard: 1,
        })
        console.log(promise)
    }

    return (
        <Button onClick={changeUser} variant="contained" color="primary">
            Test rule
        </Button>
    )
}

export default TestSecRule
