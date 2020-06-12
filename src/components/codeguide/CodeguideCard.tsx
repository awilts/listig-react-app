import React, { FC } from 'react'
import { Word } from '../../types/Word'
import Card from '@material-ui/core/Card'
import { CardContent, createStyles, Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { CardColor } from '../../types/CardColor'
import { useSelector } from 'react-redux'
import { State } from '../../store/state'
import { Auth } from '../../types/Auth'
import { useFirestore } from 'react-redux-firebase'
import { Player } from '../../types/Player'
import { AvatarBar } from './AvatarBar'

type Props = {
    word: Word
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        blue: {
            backgroundColor: 'cornflowerblue',
        },
        red: {
            backgroundColor: 'red',
        },
    })
)
const CodeguideCard: FC<Props> = (props) => {
    const classes = useStyles()
    const firestore = useFirestore()

    // @ts-ignore
    const user: Auth = useSelector((state: State) => state.firebase.auth)
    const players: Player[] = useSelector(
        (state: State) => state.firestore.ordered.players
    )
    const word = props.word

    const playersOnThisCard = players.filter(
        (player) => player.vote === word.boardId
    )

    const voteForCard = () => {
        console.log(`voting for card ${word.text}`)
        firestore
            .collection('players')
            .doc(user.uid)
            .update({ chosenCard: word.boardId })
    }

    const color = word.team

    return (
        <Grid item xs={6} sm={3}>
            <Card
                onClick={voteForCard}
                className={clsx(classes.card, {
                    [classes.blue]: color === CardColor.blue,
                    [classes.red]: color === CardColor.red,
                })}
            >
                <AvatarBar playersToDisplay={playersOnThisCard} />
                <CardContent>{word.text}</CardContent>
            </Card>
        </Grid>
    )
}

export default CodeguideCard
