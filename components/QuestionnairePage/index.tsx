import { NextPage } from 'next'

import Questionnaire from 'models/Questionnaire'
import Question from 'models/Question'
import getQuestionnaire from 'lib/getQuestionnaire'
import getQuestions from 'lib/getQuestions'
import Header from './Header'
import Take from './Take'

import styles from './index.module.scss'

export interface QuestionnairePageProps {
	questionnaire: Questionnaire | null
	questions: Question[]
}

const QuestionnairePage: NextPage<QuestionnairePageProps> = ({
	questionnaire,
	questions
}) => (
	<div className={styles.root}>
		<Header questionnaire={questionnaire} />
		<Take questions={questions} />
	</div>
)

QuestionnairePage.getInitialProps = async ({ query: { id }, res }) => {
	const questionnaire = await getQuestionnaire(id as string)
	if (!questionnaire && res) res.statusCode = 404

	return {
		questionnaire,
		questions: questionnaire ? await getQuestions(questionnaire.id) : []
	}
}

export default QuestionnairePage
