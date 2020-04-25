import React from 'react'
import { connect, DispatchProp } from 'react-redux'
import axios from 'axios'
import { axiosGetItems } from '../actions/axiosGetItemsActions'

const ClearItemsButton: React.FunctionComponent<DispatchProp> = (props) => {
    async function clearItems() {
        const myUrl = window.location.href
        const clearUrl = `${myUrl}backend/items/clear`
        await axios.post(clearUrl)
        axiosGetItems()(props.dispatch)
    }

    return <button onClick={clearItems}>clear items</button>
}

export default connect()(ClearItemsButton)
