import {Footer } from "@/shared/components/shared/Footer";
import { Header } from "@/shared/components/shared/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Главная",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer/>
        </>
    );
}
