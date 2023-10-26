export default function Instructions() {
    return (
        <div className="note">
            <h5>Some Tips:</h5>
            <ul>
                <li>This is not a socket.io  server only ws library work</li>
                <li>Not listening to ports, see example project</li>
                <li>Do not use require(), Use ES6 syntax always import from</li>
                <li>The only one installed npm package that you can import now is ws version 8.13.0</li>
                <li>No typescript, just vanilla JavaScript</li>
                <li>You don't need to enable CORS, it's explicitly enabled by default for * origins</li>
                <li>Don't use var, only let and const</li>
                <li>If your code does not compile you will not get a wss url</li>
                <li>If your code has an unhandled exception it will be deleted and the wss url previously generated will be deactivated</li>
            </ul>
        </div>
    )
}
