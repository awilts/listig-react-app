import React, { FC } from 'react'
import { Card } from '@material-ui/core'
import { Player } from '../../types/Player'

type Props = {
    players: Player[]
}

const PlayerList: FC<Props> = (props) => {
    const players = props.players

    const PlayerList =
        players &&
        players.map((player) => <Card key={player.id}> {player.name}</Card>)
    return <>{PlayerList}</>
}

export default PlayerList
