import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid'
import { Hint } from '../../types/Hint'
import HintCard from './HintCard'

type Props = {
    hints: Hint[]
}

const HintList: FC<Props> = (props) => {
    const hints = props.hints

    const Hints =
        hints && hints.map((hint) => <HintCard hint={hint} key={hint.id} />)
    return (
        <Grid item xs={2}>
            <Grid container spacing={1}>
                {Hints}
            </Grid>
        </Grid>
    )
}

export default HintList
