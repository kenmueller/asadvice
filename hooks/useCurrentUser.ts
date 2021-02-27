import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { toast } from 'react-toastify'

import firebase from 'lib/firebase'
import currentUserState from 'state/currentUser'

import 'firebase/auth'

const auth = firebase.auth()

const useCurrentUser = () => {
	const [user, setUser] = useRecoilState(currentUserState)

	useEffect(() => {
		if (user !== undefined) return
		auth.onAuthStateChanged(setUser, ({ message }) => toast.error(message))
	}, [user, setUser])

	return user
}

export default useCurrentUser
