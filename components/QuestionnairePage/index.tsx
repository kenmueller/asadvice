import { NextPage } from 'next'

import Questionnaire from 'models/Questionnaire'
import getQuestionnaire from 'lib/getQuestionnaire'
import Header from './Header'

export interface QuestionnairePageProps {
	questionnaire: Questionnaire | null
}

const QuestionnairePage: NextPage<QuestionnairePageProps> = ({
	questionnaire
}) => (
	<>
		<Header questionnaire={questionnaire} />
	</>
)

QuestionnairePage.getInitialProps = async ({ query: { id }, res }) => {
	const questionnaire = await getQuestionnaire(id as string)
	if (!questionnaire && res) res.statusCode = 404

	return { questionnaire }
}

export default QuestionnairePage
