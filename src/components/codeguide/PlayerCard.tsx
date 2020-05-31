import React, { FC } from 'react'
import { Card } from '@material-ui/core'
import { Player } from '../../types/Player'
import Grid from '@material-ui/core/Grid'

type Props = {
    player: Player
}

const PlayerCard: FC<Props> = (props) => {
    return (
        <Grid item xs={12}>
            <Card>{props.player.name}</Card>
        </Grid>
    )
}

export default PlayerCard
