import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { Svg } from 'react-optimized-image'

import authModalState from 'state/authModal'

import graph from 'images/graph.svg'
import styles from './index.module.scss'

const Header = () => {
	const setAuthModalIsShowing = useSetRecoilState(authModalState)

	const showAuth = useCallback(() => {
		setAuthModalIsShowing(true)
	}, [setAuthModalIsShowing])

	return (
		<div className={styles.root}>
			<header className={styles.content}>
				<article className={styles.article}>
					<h1 className={styles.title}>abc abc abc</h1>
					<p className={styles.subtitle}>
						abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc
						abc abc abc abc abc abc abc
					</p>
					<button className={styles.auth} onClick={showAuth}>
						Get started
					</button>
				</article>
				<Svg className={styles.graph} src={graph} />
			</header>
		</div>
	)
}

export default Header
