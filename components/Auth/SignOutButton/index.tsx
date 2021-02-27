import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'

import firebase from 'lib/firebase'
import signOut from 'lib/signOut'

import styles from './index.module.scss'

export interface SignOutButtonProps {
	className?: string
	user: firebase.User
}

const SignOutButton = ({ className, user }: SignOutButtonProps) => {
	const [isLoading, setIsLoading] = useState(false)

	const onClick = useCallback(async () => {
		if (isLoading) return

		try {
			setIsLoading(true)
			await signOut()
		} catch ({ message }) {
			setIsLoading(false)
			toast.error(message)
		}
	}, [isLoading, setIsLoading])

	return (
		<button
			className={cx(styles.root, className)}
			disabled={isLoading}
			onClick={onClick}
		>
			<span className={styles.message}>{user.displayName ?? 'Anonymous'}</span>
			<FontAwesomeIcon icon={faSignOutAlt} />
		</button>
	)
}

export default SignOutButton
