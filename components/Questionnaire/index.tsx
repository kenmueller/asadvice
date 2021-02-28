import Link from 'next/link'

import Questionnaire from 'models/Questionnaire'
import { MAX_RESPONSES } from 'lib/constants'

import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

export interface QuestionnaireCellProps {
	questionnaire: Questionnaire
}

const QuestionnaireCell = ({ questionnaire }: QuestionnaireCellProps) => (
	<Link href={`/q/${questionnaire.id}`}>
		<a className={styles.root}>
			<span className={styles.header}>
				<span className={styles.title}>
					{questionnaire.title}{' '}
					<span className={styles.author}>by {questionnaire.author.name}</span>
				</span>
				<span className={styles.responses}>
					{questionnaire.responses}
					{questionnaire.responses >= MAX_RESPONSES && (
						<FontAwesomeIcon className={styles.automated} icon={faBolt} />
					)}
				</span>
			</span>
			<span className={styles.description}>{questionnaire.description}</span>
		</a>
	</Link>
)

export default QuestionnaireCell
