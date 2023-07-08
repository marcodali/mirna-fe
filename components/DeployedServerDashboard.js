import ServerUrl from "./ServerUrl"
import TableEvents from "./TableEvents"

export default function DeployedServerDashboard({ url }) {
    return (
        <>
            <ServerUrl url={url} />
            <TableEvents />
        </>
    )
}
