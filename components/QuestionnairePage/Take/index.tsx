import { useCallback, useRef, useState } from 'react'

import Question from 'models/Question'

import styles from './index.module.scss'

export interface TakeQuestionnaireProps {
	questions: Question[]
}

const TakeQuestionnaire = ({ questions }: TakeQuestionnaireProps) => {
	const [index, setIndex] = useState<number | null>(0)
	const { length } = questions

	const data = useRef<number[]>([])
	const [outcome, setOutcome] = useState<string | null>(null)

	const question = index === null ? null : questions[index]

	const select = useCallback(
		(index: number) => {
			data.current.push(index)

			setIndex(index =>
				index === null || index + 1 === length ? null : index + 1
			)
		},
		[index, length, data, setIndex]
	)

	return (
		<div className={styles.root}>
			<section className={styles.content}>
				<h3 className={styles.name}>
					{question?.name ?? outcome ?? 'Loading...'}
				</h3>
				{question && (
					<div className={styles.options}>
						{question.options.map((option, index) => (
							<button
								key={index}
								className={styles.option}
								onClick={() => select(index)}
							>
								{option}
							</button>
						))}
					</div>
				)}
			</section>
		</div>
	)
}

export default TakeQuestionnaire
