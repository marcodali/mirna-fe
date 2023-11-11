import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Mirna Sockets',
	description: 'The Sockets as a Service Platform',
}

type RootLayoutProps = {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className="p-0 m-0">
			<body className="p-0 m-0">{children}</body>
		</html>
	)
}
