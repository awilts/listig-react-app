import React, { FC } from 'react'
import { Word } from '../../types/Word'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFirestore } from 'react-redux-firebase'

type Props = {
    word: Word
}

const useStyles = makeStyles({
    root: {
        width: 200,
        margin: 10,
    },
})

const CodeguideCard: FC<Props> = (props) => {
    const firestore = useFirestore()

    const voteForCard = () => {
        console.log('voting for card ' + props.word.text)
    }
    const classes = useStyles()
    return (
        <Card onClick={voteForCard} className={classes.root}>
            <CardContent>{props.word.text}</CardContent>
        </Card>
    )
}

export default CodeguideCard
