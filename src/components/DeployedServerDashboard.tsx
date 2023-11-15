import { useEffect, useState } from "react"
import { CodeReadOnlyIDE, TableEvents } from "."
import { GET_CODE_API } from "@/utils/constants"

interface DeployedServerDashboardProps {
    url: string
    username: string
    project: string
}

export default function DeployedServerDashboard({ url, username, project }: DeployedServerDashboardProps) {
    const [code, setCode] = useState('loading...')

    useEffect(() => {
        async function loadSourceCode() {
            const response = await fetch(
                GET_CODE_API
                    .replace('__USERNAME__', username)
                    .replace('__PROJECT__', project)
            )
            const data = await response.json()
            setCode(data.code)
        }
        loadSourceCode()
    }, [username, project])  // Execute every time username or project changes

    return (
        <div className="flex flex-row justify-between space-x-4 mt-10">
            <div className="flex-1">
                <h3 className="text-xl">Source Code</h3>
                {code ? <CodeReadOnlyIDE code={code} /> : null}
            </div>
            <div className="flex-1">
                <h3 className="text-xl">Message Logs</h3>
                {url ? <TableEvents url={url + '/events'} /> : null}
            </div>
        </div>
    )
}
