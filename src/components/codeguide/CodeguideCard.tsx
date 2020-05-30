import React, { FC } from 'react'
import { Word } from '../../types/Word'
import Card from '@material-ui/core/Card'
import { CardContent, createStyles, Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFirestore } from 'react-redux-firebase'

type Props = {
    word: Word
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    })
)

const CodeguideCard: FC<Props> = (props) => {
    const classes = useStyles()

    const voteForCard = () => {
        console.log('voting for card ' + props.word.text)
    }
    return (
        <Grid item xs={6} sm={3}>
            <Card onClick={voteForCard} className={classes.card}>
                <CardContent>{props.word.text}</CardContent>
            </Card>
        </Grid>
    )
}

export default CodeguideCard
