import { NextPage } from 'next'

import Header from './Header'
import Results from './Results'

import styles from './index.module.scss'

const Questionnaires: NextPage = () => (
	<div className={styles.root}>
		<Header />
		<Results />
	</div>
)

export default Questionnaires
