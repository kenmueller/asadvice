import firebase from 'lib/firebase'

import 'firebase/firestore'

const firestore = firebase.firestore()

export default interface Question {
	id: string
	name: string
	options: string[]
}

export const createQuestion = (): Question => ({
	id: firestore.collection('questionnaires').doc().id,
	name: '',
	options: ['', '']
})
