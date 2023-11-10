type DeployButtonProps = {
    handleClick: () => void
    code: string
}

export default function DeployButton({ handleClick, code }: DeployButtonProps) {
    return (
        <button onClick={handleClick} type="submit" disabled={!code}>
            Deploy
        </button>
    )
}
