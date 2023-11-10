'use client'

import { useRef, useEffect, useState } from "react"

type TableEventsProps = {
    url: string
}

export default function TableEvents({ url }: TableEventsProps) {
    const webSocketRef = useRef<WebSocket | null>(null)
    const [tablaData, setTablaData] = useState<string[]>([])

    useEffect(() => {

        // Inicializar WebSocket solo si aún no está abierto o no existe
        if (!webSocketRef.current || webSocketRef.current.readyState === WebSocket.CLOSED) {
            webSocketRef.current = new WebSocket(url)
            webSocketRef.current.onopen = () => console.log('Conexión abierta')
            webSocketRef.current.onerror = (error: Event) => console.error(error)
            webSocketRef.current.onclose = () => console.log('Conexión cerrada')

            webSocketRef.current.onmessage = (event: MessageEvent) => setTablaData(
                (oldData) => [...oldData, event.data]
            )
        }

        // Limpieza al desmontar el componente
        return () => webSocketRef.current?.close()

    }, [url]) // Execute every time url changes

    return (
        <table>
            <thead>
                <tr>
                    <th>Server Log Messages</th>
                </tr>
            </thead>
            <tbody>
                {tablaData.map((message, index) => (
                    <tr key={index}>
                        <td>{message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
