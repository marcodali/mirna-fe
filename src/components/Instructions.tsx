import { useState } from 'react'

export default function Instructions() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-lg shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-lg font-semibold underline"
            >
                Some Tips
            </button>
            {isOpen && (
                <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                    <li>Socket.io doesn&apos;t work here
                        <ul className="pl-5 mt-2">
                            <li>&rarr; We use the <a href="https://www.npmjs.com/package/ws" target="_blank" className="text-blue-600 no-underline hover:underline focus:underline active:underline">ws</a> library</li>
                        </ul>
                    </li>
                    <li>Do not open or listen to any ports
                        <ul className="pl-5 mt-2">
                            <li>&rarr; Follow the example projects</li>
                        </ul>
                    </li>
                    <li>Node.JS system version installed is
                        <ul className="pl-5 mt-2">
                            <li>&rarr; v18.17.1</li>
                        </ul>
                    </li>
                    <li>Do not use require() to import built-in modules
                        <ul className="pl-5 mt-2">
                            <li>&rarr; Make use of the Dynamic import() Function</li>
                            <li>&rarr; in combination with REPL Top-Level Await</li>
                            <li>&rarr; like this</li>
                            <li>&rarr; const fs = await import(&apos;fs/promises&apos;)</li>
                            <li>&rarr; const data = await fs.readFile(&apos;/etc/passwd&apos;, &apos;utf8&apos;)</li>
                        </ul>
                    </li>
                    <li>These npm packages are available without importing them
                        <ul className="pl-5 mt-2">
                            <li>&rarr; axios, moment, lodash, jsonwebtoken, uuid</li>
                        </ul>
                    </li>
                    <li>Coming soon...
                        <ul className="pl-5 mt-2">
                            <li>&rarr; Mongoose</li>
                            <li>&rarr; Redis</li>
                            <li>&rarr; Winston</li>
                            <li>&rarr; Passport</li>
                        </ul>
                    </li>
                    <li>No Typescript
                        <ul className="pl-5 mt-2">
                            <li>&rarr; We prefer vanilla ES6 syntax JavaScript</li>
                        </ul>
                    </li>
                    <li>Don&apos;t worry about CORS
                        <ul className="pl-5 mt-2">
                            <li>&rarr; We have set * for all origins</li>
                        </ul>
                    </li>
                    <li>Don&apos;t use var
                        <ul className="pl-5 mt-2">
                            <li>&rarr; We prefer let and const</li>
                        </ul>
                    </li>
                    <li>If your code does not compile
                        <ul className="pl-5 mt-2">
                            <li>&rarr; The generated WSS url will be deactivated</li>
                        </ul>
                    </li>
                    <li>If your code rises an exception
                        <ul className="pl-5 mt-2">
                            <li>&rarr; The generated WSS url will be deactivated</li>
                        </ul>
                    </li>
                </ul>
            )}
        </div>
    )
}
