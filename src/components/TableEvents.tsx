'use client'

import { useRef, useEffect, useState } from "react"
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-mysql'
import 'ace-builds/src-noconflict/theme-terminal'

type TableEventsProps = {
    url: string
}

export default function TableEvents({ url }: TableEventsProps) {
    const [outputTextMessages, setMessage] = useState<string>('')

    // Se asigna el nuevo WebSocket a la referencia.
    const webSocketRef = useRef<WebSocket | null>(null)

    useEffect(() => {
        // Se asigna el nuevo WebSocket a la referencia.
        if (!url.startsWith('wss')) return
        webSocketRef.current = new WebSocket(url)

        // Se asegura de que el WebSocket se ha creado antes de añadir event listeners.
        if (webSocketRef.current) {
            webSocketRef.current.onopen = () => {
                console.log('WebSocket connection established')
            }

            webSocketRef.current.onmessage = (event: MessageEvent) => {
                console.log('Message from server', event.data)
                setMessage((prevMessage) => `At ${new Date().toLocaleTimeString()} ➡️ ${event.data}\n${prevMessage}`)
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
        <AceEditor
            mode="mysql"
            theme="terminal"
            name="MAGIC_NUMBER_11"
            fontSize={14}
            showGutter={true}
            width="650px"
            height="500px"
            value={outputTextMessages}
            readOnly={true}
        />
    )
}
