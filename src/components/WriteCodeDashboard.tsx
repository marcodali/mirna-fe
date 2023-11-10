import React from "react"
import CodeIDE from "./CodeIDE"
import DeployButton from "./DeployButton"
import Instructions from "./Instructions"

interface WriteCodeDashboardProps {
    code: string
    setCode: React.Dispatch<React.SetStateAction<string>>
    handleClick: () => void
}

export default function WriteCodeDashboard({ code, setCode, handleClick }: WriteCodeDashboardProps) {
    return (
        <>
            <Instructions />
            <br />
            <CodeIDE code={code} setCode={setCode} />
            <br />
            <DeployButton code={code} handleClick={handleClick} />
        </>
    )
}
