import ServerUrl from "./ServerUrl"
import TableEvents from "./TableEvents"

interface DeployedServerDashboardProps {
  url: string
}

export default function DeployedServerDashboard({ url }: DeployedServerDashboardProps) {
    return (
        <>
            <ServerUrl url={url} />
            <TableEvents url={url + '/events'} />
        </>
    )
}
