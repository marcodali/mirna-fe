'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import DeployedServerDashboard from '@/components/DeployedServerDashboard'
import WriteCodeDashboard from '@/components/WriteCodeDashboard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyLabel from '@/components/StickyLabel'
import { REAL_API, RANDOM_USER_API, CODE_SAMPLE } from '../utils/constants'

export default function Home() {
	const [code, setCode] = useState('loading...')
	const [isLoading, setIsLoading] = useState(false)
	const [url, setUrl] = useState('')
	const [username, setUsername] = useState('')
	const [project, setProject] = useState('')

	const handleClick = async () => {
		setIsLoading(true)
		const body = JSON.stringify({
			username,
			project,
			code,
		})
		const response = await fetch(REAL_API, {
			method: 'POST',
			body,
			headers: {
				"Content-Type": "application/json",
			}
		})
		const data = await response.json()

		setUrl(data.uri)
		setIsLoading(false)
	}

	useEffect(() => {
		async function loadExampleCode() {
			const file = await fetch(CODE_SAMPLE)
			setCode(await file.text())
		}
		async function loadUsernameProject() {
			const response = await fetch(RANDOM_USER_API)
			const data = await response.json()
			const { username, password } = data.results[0].login
			setUsername(username)
			setProject(password)
		}
		loadExampleCode()
		loadUsernameProject()
	}, [])  // Execute only once

	return (
		<div className="min-h-[1vh] p-[0.1rem] flex flex-col justify-center items-center">

			<main className="p-10 pb-5 flex-1 flex flex-col justify-center items-center">

				<Header url={url} />

				<StickyLabel />

				{!isLoading && url && <DeployedServerDashboard url={url} />}

				{isLoading && <Image width={350} height={350} src="/loading.gif" alt="Cargando..." />}

				{!isLoading && !url && <WriteCodeDashboard code={code} setCode={setCode} handleClick={handleClick} />}

			</main>

			<Footer />

		</div>
	)
}
