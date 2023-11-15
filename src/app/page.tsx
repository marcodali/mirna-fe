'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { WriteCodeDashboard, Header, Footer, StickyLabel } from '@/components'
import { CREATE_SOCKET_API, RANDOM_USER_API, CODE_SAMPLE } from '@/utils/constants'

export default function Home() {
	const router = useRouter()
	const [code, setCode] = useState('loading...')
	const [isLoading, setIsLoading] = useState(false)
	const [username, setUsername] = useState('')
	const [project, setProject] = useState('')

	const handleClick = async () => {
		setIsLoading(true)
		const body = JSON.stringify({
			username,
			project,
			code,
		})
		const response = await fetch(CREATE_SOCKET_API, {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		const [, , , u, p] = data.uri.split('/')
		router.push(`/dashboard?username=${u}&project=${p}`)  // Navigate to the new page
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

				<StickyLabel />
				<Header showSampleProject={true} />
				{
					isLoading ? (
						<Image
							width={500}
							height={500}
							src="/loading.gif"
							alt="Loading..."
						/>
					) : (
						<WriteCodeDashboard
							code={code}
							setCode={setCode}
							handleClick={handleClick}
						/>
					)
				}

			</main>
			<Footer />
		</div>
	)
}
