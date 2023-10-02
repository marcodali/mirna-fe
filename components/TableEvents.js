import { useRef, useEffect, useState } from "react"

export default function TableEvents({ url }) {
    const ws = useRef(null)
    const [tablaData, setTablaData] = useState([])

    useEffect(() => {

        // Se establece la conexión con el servidor de WebSocket
        ws.current = new WebSocket(url)
    
        // Manejador de eventos para cuando se abre la conexión
        ws.current.onopen = () => console.log('Conexión abierta')
    
        // Error handler
        ws.current.onerror = (error) => console.error(error)
    
        // Manejador de eventos para cuando se cierra la conexión
        ws.current.onclose = () => console.log('Conexión cerrada')
    
        // New messages from server handler
        ws.current.onmessage = (event) => setTablaData(
            (oldData) => [...oldData, event.data]
        )
    
        const wsCurrent = ws.current
    
        // Limpieza al desmontar el componente
        return () => wsCurrent.close()
    
      }, []) // Execute only once
    
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
