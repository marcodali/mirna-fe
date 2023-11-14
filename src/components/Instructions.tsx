import React, { useState } from 'react'

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
                    <li>Do not use require()
                        <ul className="pl-5 mt-2">
                            <li>&rarr; Use ES6 syntax (import from)</li>
                        </ul>
                    </li>
                    <li>npm packages that you can use
                        <ul className="pl-5 mt-2">
                            <li>&rarr; axios, moment, lodash</li>
                            <li>&rarr; jsonwebtoken, uuid</li>
                        </ul>
                    </li>
                    <li>No Typescript
                        <ul className="pl-5 mt-2">
                            <li>&rarr; We prefer vanilla JavaScript</li>
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
                        <li>&rarr; The WSS url will be deactivated</li>
                        </ul>
                    </li>
                    <li>If your code rises an exception
                        <ul className="pl-5 mt-2">
                            <li>&rarr; The WSS url will be deactivated</li>
                        </ul></li>
                </ul>
            )}
        </div>
    )
}
