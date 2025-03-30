import type { Metadata } from "next";
import {Alumni_Sans } from "next/font/google";
import "./globals.scss";

import { Montserrat } from 'next/font/google'
import { cn } from "./utils/utils";

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
				<div className={cn('relative min-h-full flex flex-col z-1')} >
					{children}
				</div>
			</body>
		</html>
  );
}
