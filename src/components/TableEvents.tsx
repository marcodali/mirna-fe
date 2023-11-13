'use client'

import { useRef, useEffect, useState } from "react"

type TableEventsProps = {
    url: string
}

export default function TableEvents({ url }: TableEventsProps) {
    const [tablaData, setTablaData] = useState<string[]>([])

    // Se asigna el nuevo WebSocket a la referencia.
    const webSocketRef = useRef<WebSocket | null>(null)

    useEffect(() => {
        // Se asigna el nuevo WebSocket a la referencia.
        webSocketRef.current = new WebSocket(url)

        // Se asegura de que el WebSocket se ha creado antes de añadir event listeners.
        if (webSocketRef.current) {
            webSocketRef.current.onopen = () => {
                console.log('WebSocket connection established')
            }

            webSocketRef.current.onmessage = (event: MessageEvent) => {
                console.log('Message from server', event.data)
                setTablaData(
                    (oldData) => [...oldData, event.data]
                )
            }

            webSocketRef.current.onerror = (event: Event) => {
                console.error('WebSocket error', event)
            }

            webSocketRef.current.onclose = (event: CloseEvent) => {
                console.log('WebSocket connection closed', event.reason)
            }
        }

        // Función de limpieza para cerrar el WebSocket
        return () => {
            if (webSocketRef.current) {
                webSocketRef.current.close()
            }
        }
    }, [url]) // Se ejecuta cada que la url es actualizada.

    return (
        <div className="w-full self-start flex-shrink-0 mt-10">
            <table className="min-h-[60vh] w-full">
                <thead>
                    <tr>
                        <th className="text-left">Server Log Messages</th>
                    </tr>
                </thead>
                <tbody className="align-top">
                    {tablaData.map((message, index) => (
                        <tr key={index}>
                            <td className="text-left align-top">{message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
