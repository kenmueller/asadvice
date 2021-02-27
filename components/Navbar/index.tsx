import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import Link from 'next/link'

import authModalState from 'state/authModal'

import styles from './index.module.scss'

const Navbar = () => {
	const setAuthModalIsShowing = useSetRecoilState(authModalState)

	const showAuth = useCallback(() => {
		setAuthModalIsShowing(true)
	}, [setAuthModalIsShowing])

	return (
		<div className={styles.root}>
			<nav className={styles.content}>
				<Link href="/">
					<a className={styles.home}>As Advice</a>
				</Link>
				<Link href="/questionnaires">
					<a className={styles.questionnaires}>Questionnaires</a>
				</Link>
				<button className={styles.auth} onClick={showAuth}>
					Log in <span className={styles.authSlash}>/</span> Sign up
				</button>
			</nav>
		</div>
	)
}

export default Navbar
