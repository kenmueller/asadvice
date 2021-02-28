import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, useCallback, useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'

import queryState from 'state/query'

import styles from './index.module.scss'

const QuestionnairesHeader = () => {
	const queryInput = useRef<HTMLInputElement | null>(null)
	const [query, setQuery] = useRecoilState(queryState)

	const onQueryChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setQuery(event.target.value)
		},
		[setQuery]
	)

	useEffect(() => {
		queryInput.current?.focus()
	}, [queryInput])

	return (
		<div className={styles.root}>
			<header className={styles.content}>
				<h1 className={styles.title}>Questionnaires</h1>
				<div className={styles.query}>
					<input
						ref={queryInput}
						className={styles.queryInput}
						placeholder="Questionnaires"
						value={query}
						onChange={onQueryChange}
					/>
					<FontAwesomeIcon className={styles.queryIcon} icon={faSearch} />
				</div>
			</header>
		</div>
	)
}

export default QuestionnairesHeader
