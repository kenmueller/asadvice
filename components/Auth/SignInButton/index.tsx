import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import cx from 'classnames'

import signIn from 'lib/signIn'
import Spinner from 'components/Spinner'

import styles from './index.module.scss'

export interface SignInButtonProps {
	className?: string
	disabled: boolean
}

const SignInButton = ({ className, disabled }: SignInButtonProps) => {
	const [isLoading, setIsLoading] = useState(false)

	const onClick = useCallback(async () => {
		if (disabled || isLoading) return

		try {
			setIsLoading(true)
			if (!(await signIn())) setIsLoading(false)
		} catch ({ message }) {
			setIsLoading(false)
			toast.error(message)
		}
	}, [disabled, isLoading, setIsLoading])

	return (
		<button
			className={cx(styles.root, className)}
			disabled={disabled || isLoading}
			onClick={onClick}
		>
			{disabled || isLoading ? (
				<Spinner className={styles.spinner} />
			) : (
				<>
					<FontAwesomeIcon icon={faGoogle} />
					<span className={styles.message}>Sign in</span>
				</>
			)}
		</button>
	)
}

export default SignInButton
