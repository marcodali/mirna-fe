import { SERVER_PROJECT_EXAMPLE, CLIENT_PROJECT_EXAMPLE, LIVE_DEMO_PROJECT_EXAMPLE } from '../utils/constants'

export default function DocumentationExample() {
    return (
        <>
            <p>
                Forget about cloud infrastructure.
                Focus only on your sockets business logic
            </p>
            <p>
                Sample Project: 
                &nbsp;
                <a href={SERVER_PROJECT_EXAMPLE} target="_blank">
                    backend
                </a>
                &nbsp;
                <a href={CLIENT_PROJECT_EXAMPLE} target="_blank">
                    frontend
                </a>
                &nbsp;
                <a href={LIVE_DEMO_PROJECT_EXAMPLE} target="_blank">
                    live-demo
                </a>
            </p>
        </>
    )
}
