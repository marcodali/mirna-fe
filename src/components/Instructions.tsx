export default function Instructions() {
    return (
        <div>
            <h5>Some Tips:</h5>
            <ul>
                <li>Socket.io doesn&apos;t work here =&gt; We use the <a href="https://www.npmjs.com/package/ws" target="_blank">ws</a> library</li>
                <li>Do not open or listen to any ports =&gt; Follow the example projects</li>
                <li>Do not use require() =&gt; Use ES6 syntax (import from)</li>
                <li>List of npm packages that you can use/import =&gt; axios, moment, lodash, jsonwebtoken and uuid</li>
                <li>No typescript =&gt; We prefer vanilla JavaScript</li>
                <li>You don&apos;t worry about CORS =&gt; It&apos;s explicitly enabled by default for * origins</li>
                <li>Don&apos;t use var =&gt; We code only with let and const</li>
                <li>If your code does not compile =&gt; We&apos;ll let you know but the WSS url won&apos;t work</li>
                <li>If your code rises an exception you MUST catch it, if not =&gt; your code will be deleted and the WSS url previously generated will be deactivated</li>
            </ul>
        </div>
    )
}
