import { useRecoilState } from 'recoil'

import queryState from 'state/query'

import styles from './index.module.scss'

const QuestionnairesHeader = () => {
	const [query, setQuery] = useRecoilState(queryState)

	return (
		<div className={styles.root}>
			<header className={styles.content}>
				<h1 className={styles.title}>Questionnaires</h1>
			</header>
		</div>
	)
}

export default QuestionnairesHeader
