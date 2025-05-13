import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Каталог",
};

export default function CatalogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="container">{children}</div>;
}
