'use client'

import { useSearchParams } from 'next/navigation'
import { DeployedServerDashboard, Header, Footer, StickyLabel } from '@/components'
import { SAMPLE_WSS } from '@/utils/constants'
import { useEffect, useState } from 'react'

import '../app/globals.css'

export default function Dashboard() {
    const searchParams = useSearchParams()
    const username = searchParams?.get('username') || ''
    const project = searchParams?.get('project') || ''
    const [url, setUrl] = useState('')

    useEffect(() => {
        if (username && project) {
            setUrl(SAMPLE_WSS.replace('__USERNAME__', username).replace('__PROJECT__', project))
        }
    }, [username, project])
    
    return (
        <div className="min-h-[1vh] p-[0.1rem]">
			<main className="p-10 pb-5">

                <StickyLabel />
                <Header showSampleProject={false} />
                {url ? <DeployedServerDashboard url={url} /> : null}

            </main>
            <Footer />
        </div>
    )
}
