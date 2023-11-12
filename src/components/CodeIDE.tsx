import React from 'react'

interface CodeIDEProps {
    code: string
    setCode: React.Dispatch<React.SetStateAction<string>>
}

export default function CodeIDE({ code, setCode }: CodeIDEProps) {
    return (
        <textarea
            rows={34}
            cols={90}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="form-textarea mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            style={{ fontFamily: 'monospace', backgroundColor: '#282c34', color: '#abb2bf' }}
        />
    )
}
