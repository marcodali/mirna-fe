import React from 'react'

interface CodeIDEProps {
    code: string
    setCode: React.Dispatch<React.SetStateAction<string>>
}

export default function CodeIDE({ code, setCode }: CodeIDEProps) {
    return (
        <textarea
            rows={30}
            cols={100}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="h-auto"
        />
    )
}
