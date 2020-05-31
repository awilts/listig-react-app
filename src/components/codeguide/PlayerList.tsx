import React, { FC } from 'react'
import { Player } from '../../types/Player'
import Grid from '@material-ui/core/Grid'
import PlayerCard from './PlayerCard'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
    players: Player[]
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
        players.map((player) => <PlayerCard player={player} key={player.id} />)
    return (
        <Grid item xs={2}>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    {PlayerList}
                </Grid>
            </div>
        </Grid>
    )
}

export default PlayerList
