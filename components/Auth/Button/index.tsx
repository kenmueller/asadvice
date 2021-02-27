import useCurrentUser from 'hooks/useCurrentUser'
import SignInButton from '../SignInButton'
import SignOutButton from '../SignOutButton'

export interface AuthButtonProps {
	className?: string
}

const AuthButton = ({ className }: AuthButtonProps) => {
	const user = useCurrentUser()

	return user ? (
		<SignOutButton className={className} user={user} />
	) : (
		<SignInButton className={className} disabled={user === undefined} />
	)
}

export default AuthButton
