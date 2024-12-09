
import "./doctheme.css";
import React from 'react';
import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
    title: "暁星学園物理部",
    description: "暁星学園物理部 公式HP"

}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ja">
            <head>
                <meta property="og:title" content="暁星学園物理部" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://gyoseibutsuribu.github.io/" />
                <meta property="og:image" content="./win_icon.gif" />
                <meta property="og:description" content="暁星学園物理部 公式HP" />
                <meta name="description" content="暁星学園物理部 公式HP" />
                <meta name="color-scheme" content="light" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@gyoseibutsuribu" />
                <meta name="twitter:title" content="暁星学園物理部" />
                <meta name="twitter:description" content="暁星学園物理部 公式HP" />
                <meta name="twitter:image" content="./win_icon.gif" />
            </head>
            <body>{children}</body>
        </html >
    )
}
