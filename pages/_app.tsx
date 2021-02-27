import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'

import Navbar from 'components/Navbar'

import 'styles/global.scss'

config.autoAddCss = false

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head>
			<link
				key="fonts-preconnect"
				rel="preconnect"
				href="https://fonts.gstatic.com"
			/>
			<link
				key="eb-garamond"
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700;800&display=swap"
			/>
		</Head>
		<RecoilRoot>
			<Navbar />
			<Component {...pageProps} />
		</RecoilRoot>
	</>
)

export default App
