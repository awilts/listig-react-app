import { Item } from '../types/Item'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

console.log('fii')
const conf = require('../devlocal').conf
const config = {
    apiKey: conf.apiKey,
    authDomain: conf.authDomain,
    projectId: conf.projectId,
}
firebase.initializeApp(config)

const db = firebase.firestore()

export const getItems = async (): Promise<Item[]> => {
    const querySnapshot = await db.collection('items').get()
    return querySnapshot.docs.map((doc) => parseItem(doc))
}

const parseItem = (doc: firebase.firestore.QueryDocumentSnapshot): Item => {
    const data = doc.data()
    return {
        userId: data['userId'],
        groupId: data['groupId'],
        text: data['text'],
        messageId: doc.id,
    }
}

export const createItem = async (item: Item): Promise<Item> => {
    const result = await db.collection('items').add(item)
    return { ...item, messageId: result.id }
}
