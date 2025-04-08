import type { Metadata } from "next";
import {Alumni_Sans,Montserrat } from "next/font/google";
import "@/scss/globals.scss";


const alumni  = Alumni_Sans({
	subsets: ['cyrillic'],
	variable: '--font-alumni ',
})
const montserrat = Montserrat({
	subsets: ['cyrillic'],
	variable: '--font-montserrat',
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
			<body className={`${alumni.className} ${montserrat.className}`}>
				<div className='wrapper' >
					{children}
				</div>
			</body>
		</html>
  );
}
