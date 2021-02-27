import { Svg } from 'react-optimized-image'

import graph from 'images/graph.svg'
import styles from './index.module.scss'

const Header = () => (
	<div className={styles.root}>
		<header className={styles.content}>
			<article className={styles.article}>
				<h1 className={styles.title}>abc abc abc</h1>
				<p className={styles.subtitle}>
					abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc
					abc abc abc abc abc abc abc
				</p>
			</article>
			<Svg className={styles.graph} src={graph} />
		</header>
	</div>
)

export default Header
