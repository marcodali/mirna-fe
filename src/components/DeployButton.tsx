type DeployButtonProps = {
    handleClick: () => void
    code: string
}

export default function DeployButton({ handleClick, code }: DeployButtonProps) {
    return (
        <button onClick={handleClick} type="submit" disabled={!code} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">
            Deploy
        </button>
    )
}
