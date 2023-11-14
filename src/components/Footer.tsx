import Image from 'next/image'
import { DURAZNO_WEBSITE, DURAZNO_NAME } from '@/utils/constants'

export default function Footer() {
    return (
        <footer className="w-full h-24 border-t border-gray-200 flex justify-center items-center">
            <a href={DURAZNO_WEBSITE} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center no-underline text-current">
                Powered by
                <Image width={20} height={20} src="/durazno.svg" alt={DURAZNO_NAME} className="ml-2" />
            </a>
        </footer>
    )
}
