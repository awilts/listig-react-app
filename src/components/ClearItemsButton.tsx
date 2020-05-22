import React, { FC } from 'react'
import axios from 'axios'

const ClearItemsButton: FC = () => {
    async function clearItems() {
        const myUrl = window.location.href
        const clearUrl = `${myUrl}backend/items/clear`
        await axios.post(clearUrl)
    }

    return <button onClick={clearItems}>clear items</button>
}

export default ClearItemsButton
