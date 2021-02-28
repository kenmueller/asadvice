import Questionnaire from 'models/Questionnaire'
import firebase from './firebase'

import 'firebase/firestore'

const LIMIT = 6

const firestore = firebase.firestore()

const getPopularQuestionnaires = async (
	limit = LIMIT
): Promise<Questionnaire[]> => {
	const { docs: questionnaires } = await firestore
		.collection('questionnaires')
		.orderBy('responses', 'desc')
		.limit(limit)
		.get()

	return questionnaires.map(
		snapshot => ({ id: snapshot.id, ...snapshot.data() } as Questionnaire)
	)
}

export default getPopularQuestionnaires
