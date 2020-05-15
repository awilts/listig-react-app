import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { getItemsAction } from '../actions/actions'

const ClearItemsButton: FC = () => {
    const dispatch = useDispatch()

    async function clearItems() {
        const myUrl = window.location.href
        const clearUrl = `${myUrl}backend/items/clear`
        await axios.post(clearUrl)
        dispatch(getItemsAction)
    }

    return <button onClick={clearItems}>clear items</button>
}

export default ClearItemsButton
