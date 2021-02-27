import { NextPage } from 'next'

import Header from './Header'
import PopularQuestionnaires from 'components/Questionnaires/Popular'

const Home: NextPage = () => (
	<>
		<Header />
		<PopularQuestionnaires />
	</>
)

export default Home
