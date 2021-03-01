import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

import Questionnaire from 'models/Questionnaire'
import { MAX_RESPONSES } from 'lib/constants'

import styles from './index.module.scss'

export interface QuestionnaireHeaderProps {
	questionnaire: Questionnaire | null
}

const QuestionnaireHeader = ({ questionnaire }: QuestionnaireHeaderProps) => (
	<div className={styles.root}>
		<header className={styles.content}>
			<h1 className={styles.title}>{questionnaire?.title ?? 'Uh oh'}</h1>
			<p className={styles.description}>
				{questionnaire?.description ?? 'This questionnaire does not exist'}
			</p>
			{questionnaire && (
				<p className={styles.responses}>
					{questionnaire.responses} response
					{questionnaire.responses === 1 ? '' : 's'}
					{questionnaire.responses >= MAX_RESPONSES ? (
						<>
							<FontAwesomeIcon className={styles.automated} icon={faBolt} />
							your response will be automatically reviewed
						</>
					) : (
						' • your response will be manually reviewed'
					)}
				</p>
			)}
		</header>
	</div>
)

export default QuestionnaireHeader
