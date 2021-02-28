import Questionnaire from 'models/Questionnaire'
import firebase from './firebase'

import 'firebase/firestore'

const firestore = firebase.firestore()

const getQuestionnaire = async (id: string) => {
	const snapshot = await firestore.doc(`questionnaires/${id}`).get()

	return snapshot.exists
		? ({ id: snapshot.id, ...snapshot.data() } as Questionnaire)
		: null
}

export default getQuestionnaire
