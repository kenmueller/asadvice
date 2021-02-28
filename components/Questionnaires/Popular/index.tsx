import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Link from 'next/link'

import Questionnaire from 'models/Questionnaire'
import getPopularQuestionnaires from 'lib/getPopularQuestionnaires'
import Cell from 'components/Questionnaire'
import Spinner from 'components/Spinner'

import styles from './index.module.scss'

const PopularQuestionnaires = () => {
	const [questionnaires, setQuestionnaires] = useState<Questionnaire[] | null>(
		null
	)

	useEffect(() => {
		let commit = true

		getPopularQuestionnaires()
			.then(questionnaires => commit && setQuestionnaires(questionnaires))
			.catch(({ message }) => commit && toast.error(message))

		return () => {
			commit = false
		}
	}, [setQuestionnaires])

	return (
		<div className={styles.root}>
			<section className={styles.content}>
				<div className={styles.header}>
					<h3 className={styles.title}>Popular Questionnaires</h3>{' '}
					<Link href="/questionnaires">
						<a className={styles.all}>View All</a>
					</Link>
				</div>
				<div className={styles.questionnaires}>
					{questionnaires?.map(questionnaire => (
						<Cell key={questionnaire.id} questionnaire={questionnaire} />
					))}
				</div>
			</section>
		</div>
	)
}

export default PopularQuestionnaires
