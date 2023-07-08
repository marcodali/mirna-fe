export default function DeployButton({ handleClick, code }) {
    return (
        <button onClick={handleClick} type="submit" disabled={!code}>
            Deploy
        </button>
    )
}
