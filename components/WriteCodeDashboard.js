import CodeIDE from "./CodeIDE"
import DeployButton from "./DeployButton"
import Instructions from "./Instructions"

export default function WriteCodeDashboard({ code, setCode, handleClick }) {
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
