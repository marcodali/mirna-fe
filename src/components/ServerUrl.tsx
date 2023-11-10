interface ServerUrlProps {
  url: string
}

export default function ServerUrl({ url }: ServerUrlProps) {
    return (
        <p>
            Server Url: <strong>{url}</strong>
        </p>
    )
}
