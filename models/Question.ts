import firebase from 'lib/firebase'

import 'firebase/firestore'

const firestore = firebase.firestore()

export default interface Question {
	id: string
	index: number
	name: string
	options: string[]
}

export const createQuestion = (index: number): Question => ({
	id: firestore.collection('questionnaires').doc().id,
	index,
	name: '',
	options: ['', '']
})
