import React, { FC, useEffect, useState } from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'
import * as firebase from 'firebase/app'
import 'firebase/auth'

const Authentication: FC = (props) => {
    const [signedIn, setSignedIn] = useState<boolean>(false)

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
        ],
        credentialHelper: 'none',
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setSignedIn(!!user)
        })
    }, [])

    if (!signedIn) {
        return (
            <div>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        )
    }
    // @ts-ignore
    const displayName = firebase.auth().currentUser.displayName
    return (
        <div>
            <p>Welcome {displayName}! You are now signed-in!</p>
            <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
            {props.children}
        </div>
    )
}

export default Authentication
