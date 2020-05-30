import React, { FC } from 'react'
import { Paper } from '@material-ui/core'
import { Player } from '../../types/Player'

type Props = {
    players: Player[]
}

const PlayerList: FC<Props> = (props) => {
    if (props.players.length > 0) {
        return <Paper>{props.players[0].name}</Paper>
    }
    return <Paper />
}

export default PlayerList
