import app from './firebase/app.js'
import {getfirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestores.js'

export async function btnSubscribetohellfire(subscription){
    debugger
    const db = getfirestore(app)
    const hellfireclubcollection = Collection(db,'hellfire-clube')
    const docRef = await addDoc(hellfireclubcollection,subscription)
    return docRef.id

}