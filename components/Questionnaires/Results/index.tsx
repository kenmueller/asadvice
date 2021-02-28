import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { toast } from 'react-toastify'

import Questionnaire from 'models/Questionnaire'
import index from 'lib/search'
import queryState from 'state/query'
import Row from 'components/Questionnaire'

import styles from './index.module.scss'

const QuestionnaireResults = () => {
	const query = useRecoilValue(queryState)
	const [questionnaires, setQuestionnaires] = useState<Questionnaire[]>([])

	useEffect(() => {
		let commit = true

		index
			.search(query)
			.then(({ hits }) =>
				setQuestionnaires(
					hits.map(
						hit => (({ id: hit.objectID, ...hit } as unknown) as Questionnaire)
					)
				)
			)
			.catch(({ message }) => commit && toast.error(message))

		return () => {
			commit = false
		}
	}, [query, setQuestionnaires])

	return (
		<div className={styles.root}>
			<section className={styles.content}>
				{questionnaires.map(questionnaire => (
					<Row key={questionnaire.id} questionnaire={questionnaire} />
				))}
			</section>
		</div>
	)
}

export default QuestionnaireResults
