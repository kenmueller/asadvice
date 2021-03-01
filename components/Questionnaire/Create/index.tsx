import { SetStateAction, useCallback, useState } from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

import Question, { createQuestion } from 'models/Question'
import firebase from 'lib/firebase'
import useCurrentUser from 'hooks/useCurrentUser'

import styles from './index.module.scss'

import 'firebase/firestore'
import signIn from 'lib/signIn'
import { toast } from 'react-toastify'

const firestore = firebase.firestore()

interface QuestionCellProps {
	index: number
	question: Question
	setQuestions(questions: SetStateAction<Question[]>): void
}

const QuestionCell = ({ index, question, setQuestions }: QuestionCellProps) => {
	return (
		<div className={styles.question}>
			<div className={styles.questionHeader}>
				<p className={styles.questionTitle}>Question #{index + 1}</p>
				<button
					className={styles.removeQuestion}
					onClick={() => {
						setQuestions(questions =>
							questions.filter(_question => _question.id !== question.id)
						)
					}}
				>
					<FontAwesomeIcon icon={faTimes} />
				</button>
			</div>
			<input
				className={styles.questionName}
				value={question.name}
				onChange={event => {
					setQuestions(questions =>
						questions.map(_question => {
							if (_question.id === question.id)
								_question.name = event.target.value

							return _question
						})
					)
				}}
			/>
			<div className={styles.options}>
				{question.options.map((option, index) => (
					<div key={index} className={styles.option}>
						<input
							className={styles.optionInput}
							value={option}
							onChange={event => {
								setQuestions(questions =>
									questions.map(_question => {
										if (_question.id === question.id)
											_question.options[index] = event.target.value

										return _question
									})
								)
							}}
						/>
						<button
							className={styles.removeOption}
							onClick={() => {
								setQuestions(questions =>
									questions.map(_question => {
										if (_question.id === question.id)
											_question.options = _question.options.filter(
												(_option, _index) => _index !== index
											)

										return _question
									})
								)
							}}
						>
							<FontAwesomeIcon icon={faTimes} />
						</button>
					</div>
				))}
				<button
					className={styles.addOption}
					onClick={() => {
						setQuestions(questions =>
							questions.map(_question => {
								if (_question.id === question.id) _question.options.push('')
								return _question
							})
						)
					}}
				>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
		</div>
	)
}

const CreateQuestionnaire: NextPage = () => {
	const user = useCurrentUser()
	const [isLoading, setIsLoading] = useState(false)

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [questions, setQuestions] = useState(() => [createQuestion(0)])

	const isDisabled =
		!title ||
		!description ||
		!questions.length ||
		questions.some(
			question =>
				!question.name ||
				question.options.length < 2 ||
				question.options.some(option => !option)
		)

	const create = useCallback(async () => {
		try {
			const currentUser = user ?? (await signIn())
			if (!currentUser) return

			setIsLoading(true)

			const questionnaire = await firestore.collection('questionnaires').add({
				title,
				description,
				responses: 0,
				author: {
					id: currentUser.uid,
					name: currentUser.displayName ?? 'Anonymous'
				}
			})

			const batch = firestore.batch()

			for (let i = 0; i < questions.length; i++) {
				const { id, name, options } = questions[i]

				batch.set(questionnaire.collection('questions').doc(id), {
					index: i,
					name,
					options
				})
			}

			await batch.commit()
			await Router.push(`/q/${questionnaire.id}`)
		} catch ({ message }) {
			setIsLoading(false)
			toast.error(message)
		}
	}, [user, title, description, questions, setIsLoading, user])

	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<header className={styles.header}>
					<h1 className={styles.title}>Create Questionnaire</h1>
					<button
						className={styles.create}
						disabled={isLoading || isDisabled}
						onClick={create}
					>
						{isLoading ? 'Loading...' : 'Create'}
					</button>
				</header>
				<label className={styles.label} htmlFor="title-input">
					Title
				</label>
				<input
					id="title-input"
					className={styles.input}
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>
				<label className={styles.label} htmlFor="description-input">
					Description
				</label>
				<textarea
					id="description-input"
					className={styles.textarea}
					value={description}
					onChange={event => setDescription(event.target.value)}
				/>
				<div className={styles.questions}>
					{questions.map((question, index) => (
						<QuestionCell
							key={question.id}
							index={index}
							question={question}
							setQuestions={setQuestions}
						/>
					))}
				</div>
				<button
					className={styles.addQuestion}
					onClick={() => {
						setQuestions(questions => [
							...questions,
							createQuestion(questions.length)
						])
					}}
				>
					<FontAwesomeIcon className={styles.addQuestionIcon} icon={faPlus} />
					Add question
				</button>
			</div>
		</div>
	)
}

export default CreateQuestionnaire
