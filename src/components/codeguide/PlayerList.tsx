import React, { FC } from 'react'
import { Player } from '../../types/Player'
import Grid from '@material-ui/core/Grid'
import PlayerCard from './PlayerCard'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { useFirebase } from 'react-redux-firebase'
import { functions } from 'firebase'

type Props = {
    players: Player[]
    team: string
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: 20,
    },
})

const PlayerList: FC<Props> = (props) => {
    const players = props.players

    const classes = useStyles()
    const PlayerList =
        players &&
        players
            .filter((player) => player.team === props.team)
            .map((player) => <PlayerCard player={player} key={player.id} />)

    const firebase = useFirebase()
    const callJoinTeam = firebase
        // @ts-ignore
        .functions()
        .httpsCallable('joinTeam')

    const joinTeam = () => {
        console.log(`joining team ${props.team}`)
        const lobbyId = 'GeyDTo9SUstY3JhlofJj'
        callJoinTeam({ team: props.team, lobbyId }).then(function (
            result: functions.HttpsCallableResult
        ) {
            // Read result of the Cloud Function.
            const sanitizedMessage = result.data
            // ...
            console.log(sanitizedMessage)
        })
    }

    return (
        <Grid item xs={2}>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    {PlayerList}
                </Grid>
                <Button onClick={joinTeam} variant="contained" color="primary">
                    Join Team
                </Button>
            </div>
        </Grid>
    )
}

export default PlayerList
