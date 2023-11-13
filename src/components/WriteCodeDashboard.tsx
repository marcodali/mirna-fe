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
            <div className="flex flex-row justify-between space-x-4 mt-4">
                <div className="flex-grow flex-basis-0">
                    <CodeIDE code={code} setCode={setCode} />
                </div>
                <div className="flex-grow-0 flex-basis-1/4">
                    <Instructions />
                </div>
            </div>

            <DeployButton code={code} handleClick={handleClick} />
        </>
    )
}
