import Question from 'models/Question'
import firebase from './firebase'

import 'firebase/firestore'

const firestore = firebase.firestore()

const getQuestions = async (id: string) => {
	const { docs } = await firestore
		.collection(`questionnaires/${id}/questions`)
		.get()

	return docs
		.map(snapshot => ({ id: snapshot.id, ...snapshot.data() } as Question))
		.sort((a, b) => a.index - b.index)
}

export default getQuestions
