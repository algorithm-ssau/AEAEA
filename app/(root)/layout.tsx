import { TheHeader } from "@/shared/components/shared/TheHeader";
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
            <TheHeader />
            <main>{children}</main>
        </>
    );
}
