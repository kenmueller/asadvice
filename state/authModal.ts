import { atom } from 'recoil'

const authModalState = atom<boolean>({
	key: 'authModal',
	default: false
})

export default authModalState
