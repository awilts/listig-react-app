import React, { FC, useState } from 'react'
import { Item } from '../types/Item'
import axios from 'axios'

const CreateItemForm: FC = () => {
    const [newItemText, setNewItemText] = useState<string>('')

    function createItem(event: any) {
        event.preventDefault()
        const item: Item = {
            groupId: 'gid',
            userId: 'uid',
            text: newItemText,
        }
        createItemRequest(item).then((res) => console.log(res))
        setNewItemText('')
    }

    const createItemRequest = async (payload: Item) => {
        const myUrl = window.location.href
        const postUrl = `${myUrl}backend/items`
        return axios.post(postUrl, payload)
    }

    return (
        <form onSubmit={createItem}>
            <input
                type="text"
                value={newItemText}
                onChange={(event) => setNewItemText(event.target.value)}
            />
            <button>submit</button>
        </form>
    )
}

export default CreateItemForm
