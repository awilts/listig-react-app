import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { GET_ITEMS_ACTION } from '../actions/actions'

const ClearItemsButton: FC = () => {
    const dispatch = useDispatch()

    async function clearItems() {
        const myUrl = window.location.href
        const clearUrl = `${myUrl}backend/items/clear`
        await axios.post(clearUrl)
        dispatch(GET_ITEMS_ACTION)
    }

    return <button onClick={clearItems}>clear items</button>
}

export default ClearItemsButton
