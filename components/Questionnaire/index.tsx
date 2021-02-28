import Link from 'next/link'

import Questionnaire from 'models/Questionnaire'

import styles from './index.module.scss'

export interface QuestionnaireCellProps {
	questionnaire: Questionnaire
}

const QuestionnaireCell = ({ questionnaire }: QuestionnaireCellProps) => (
	<Link href={`/q/${questionnaire.id}`}>
		<a className={styles.root}>
			<span className={styles.header}>
				<span className={styles.title}>{questionnaire.title}</span>
				<span className={styles.author}>{questionnaire.author.name}</span>
			</span>
			<span className={styles.description}>{questionnaire.description}</span>
		</a>
	</Link>
)

export default QuestionnaireCell
