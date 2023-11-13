import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

interface ServerUrlProps {
    url: string
}

export default function ServerUrl({ url }: ServerUrlProps) {
    const [buttonClicked, setButtonClicked] = useState(false)

    const copyToClipboard = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const form = e.currentTarget.form
        if (!form) return
        const urlToCopy = form.urlInput.value
        try {
            await navigator.clipboard.writeText(urlToCopy)
            console.log('URL copied to clipboard')
            // Animación del botón
            setButtonClicked(true);
            setTimeout(() => {
                setButtonClicked(false)
            }, 100)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    };

    const buttonClassNames = `h-8 w-8 flex items-center justify-center text-gray-600 bg-gray-200 hover:bg-gray-300 focus:outline-none 
    ${buttonClicked ? 'ring-2 ring-indigo-300' : ''}`;

    return (
        <form className="flex items-center space-x-2 w-full max-w-lg mx-auto">
            <label htmlFor="urlInput" className="text-sm font-medium text-gray-700">WebSocketServer&nbsp;URI&nbsp;&rarr;</label>
            <input
                type="text"
                id="urlInput"
                name="urlInput"
                defaultValue={url}
                className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm text-sm h-8 w-3/4"
                style={{ maxWidth: '350px' }}
            />
            <button
                type="button"
                onClick={copyToClipboard}
                className={buttonClassNames}
                title="Copy to Clipboard"
            >
                <FontAwesomeIcon icon={faCopy} size="sm" />
            </button>
        </form>
    )
}
