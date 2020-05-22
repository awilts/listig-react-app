import React, { FC, useState } from 'react'
import { Item } from '../types/Item'
import { createItem } from '../api/itemApi'

const CreateItemForm: FC = () => {
    const [newItemText, setNewItemText] = useState<string>('')

    function handleCreateItem(event: any) {
        event.preventDefault()
        const item: Item = {
            groupId: 'gid',
            userId: 'uid',
            text: newItemText,
        }
        createItem(item).then((res) => console.log(res))
        setNewItemText('')
    }

    return (
        <form onSubmit={handleCreateItem}>
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
