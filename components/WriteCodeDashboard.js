import CodeIDE from "./CodeIDE"
import DeployButton from "./DeployButton"

export default function WriteCodeDashboard({ code, setCode, handleClick }) {
    return (
        <>
            <CodeIDE code={code} setCode={setCode} />
            <br />
            <DeployButton code={code} handleClick={handleClick} />
        </>
    )
}
