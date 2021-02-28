import Link from 'next/link'

import AuthButton from 'components/Auth/Button'

import styles from './index.module.scss'

const Navbar = () => {
	return (
		<div className={styles.root}>
			<nav className={styles.content}>
				<Link href="/">
					<a className={styles.home}>As Advice</a>
				</Link>
				<Link href="/q">
					<a className={styles.questionnaires}>Questionnaires</a>
				</Link>
				<AuthButton className={styles.auth} />
			</nav>
		</div>
	)
}

export default Navbar
