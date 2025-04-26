import type { Metadata } from "next";
import LayoutClientPart from "./layoutClientPart";

export const metadata: Metadata = {
    title: "О компании",
};

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container">
            <LayoutClientPart>{children}</LayoutClientPart>
        </div>
    );
}
