import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

import signIn from 'lib/signIn'
import currentUserState from 'state/currentUser'

const useSignIn = () => {
	const setCurrentUser = useSetRecoilState(currentUserState)

	return useCallback(async () => {
		const user = await signIn()
		if (user) setCurrentUser(user)

		return user
	}, [setCurrentUser])
}

export default useSignIn
