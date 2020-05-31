import React, { FC } from 'react'
import { Card } from '@material-ui/core'
import { Player } from '../../types/Player'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

type Props = {
    player: Player
}

const PlayerCard: FC<Props> = (props) => {
    return (
        <Grid item xs={12}>
            <Card>
                <Typography>{props.player.name}</Typography>
            </Card>
        </Grid>
    )
}

export default PlayerCard
