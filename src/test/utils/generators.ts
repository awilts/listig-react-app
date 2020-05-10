import { Item } from '../../types/Item'

export const generateItem = (): Item => {
    return {
        userId: 'uid',
        messageId: 'mid',
        groupId: 'gid',
        text: 'testItem',
    }
}
