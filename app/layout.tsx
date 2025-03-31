import type { Metadata } from "next";
import {Alumni_Sans } from "next/font/google";
import "@/scss/globals.scss";


const alumni  = Alumni_Sans({
	subsets: ['cyrillic'],
	variable: '--font-base',
})

export const metadata: Metadata = {
	title: 'Name',
	description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
			<body className={`${alumni.className}`}>
				<div className='wrapper' >
					{children}
				</div>
			</body>
		</html>
  );
}
