import { Svg } from 'react-optimized-image'

import graph from 'images/graph.svg'
import styles from './index.module.scss'

const Header = () => (
	<div className={styles.root}>
		<header className={styles.content}>
			<article className={styles.article}>
				<h1 className={styles.title}>Innovative Questionnaires</h1>
				<p className={styles.subtitle}>
					An intelligent algorithm that gives you personalized and pragmatic
					advice from nothing but a few simple questions
				</p>
			</article>
			<Svg className={styles.graph} src={graph} />
		</header>
	</div>
)

export default Header
