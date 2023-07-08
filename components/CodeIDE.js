export default function CodeIDE({ code, setCode }) {
    return (
        <>
            <textarea
                rows={30}
                cols={100}
                value={code}
                onChange={(e) => setCode(e.target.value)} />
            
            <style jsx>{`
                textarea {
                    height: auto;
                }
            `}</style>
        </>
    )
}
