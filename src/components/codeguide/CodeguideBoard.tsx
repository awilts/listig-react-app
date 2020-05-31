import React, { FC } from 'react'
import { Word } from '../../types/Word'
import { Box, Grid } from '@material-ui/core'
import CodeguideCard from './CodeguideCard'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
    words: Word[]
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: 20,
    },
})
const CodeguideBoard: FC<Props> = (props) => {
    const words = props.words
    const WordList =
        words &&
        words.map((word) => <CodeguideCard key={word.boardId} word={word} />)
    const classes = useStyles()
    return (
        <Grid item xs={10}>
            <Box borderLeft={1}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {WordList}
                    </Grid>
                </div>
            </Box>
        </Grid>
    )
}

export default CodeguideBoard
