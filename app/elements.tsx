'use client';

import "./doctheme.css";
import Link from 'next/link';
import React from 'react';

interface HeaderNavProps {
    page: string;
}

const HeaderNav = (props: HeaderNavProps) => {
    if (props.page === "top") {
        return (
            <nav>
                <p className="nav-link">Top</p>
                <div className="divider"></div>
                <Link href="/about" legacyBehavior><a className="nav-link">About</a></Link>
                <div className="divider"></div>
                <Link href="/works" legacyBehavior><a className="nav-link">Works</a></Link>
                <div className="divider"></div>
                <Link href="https://gyoseibutsuribu.hatenablog.com/" legacyBehavior><a className="nav-link" target="_blank">Blog</a></Link>
            </nav>
        );
    } else if (props.page === "about") {
        return (
            <nav>
                <Link href="/" legacyBehavior><a className="nav-link">Top</a></Link>
                <div className="divider"></div>
                <p className="nav-link">About</p>
                <div className="divider"></div>
                <Link href="/works" legacyBehavior><a className="nav-link">Works</a></Link>
                <div className="divider"></div>
                <Link href="https://gyoseibutsuribu.hatenablog.com/" legacyBehavior><a className="nav-link" target="_blank">Blog</a></Link>
            </nav>
        );
    } else if (props.page === "works") {
        return (
            <nav>
                <Link href="/" legacyBehavior><a className="nav-link">Top</a></Link>
                <div className="divider"></div>
                <Link href="/about" legacyBehavior><a className="nav-link">About</a></Link>
                <div className="divider"></div>
                <p className="nav-link">Works</p>
                <div className="divider"></div>
                <Link href="https://gyoseibutsuribu.hatenablog.com/" legacyBehavior><a className="nav-link" target="_blank">Blog</a></Link>
            </nav>
        );
    } else {
        return (
            <nav>
                <Link href="/" legacyBehavior><a className="nav-link">Top</a></Link>
                <div className="divider"></div>
                <Link href="/about" legacyBehavior><a className="nav-link">About</a></Link>
                <div className="divider"></div>
                <Link href="/works" legacyBehavior><a className="nav-link">Works</a></Link>
                <div className="divider"></div>
                <Link href="https://gyoseibutsuribu.hatenablog.com/" legacyBehavior><a className="nav-link" target="_blank">Blog</a></Link>
            </nav>
        );
    }
}

interface MainContentProps {
    page: string;
    children: React.ReactNode;
}

const MainContent = (props: MainContentProps) => {
    return (
        <div className="main">
            <Header page={props.page} />
            <div className="blank"></div>
            {props.children}
            <Footer />
        </div>
    );
}
export default MainContent;

interface HeaderProps {
    page: string;
}

const Header = (props: HeaderProps) => {
    return (
        <div className="header">
            <Link href="/" legacyBehavior><a className="header-title">暁星学園物理部</a></Link>
            <HeaderNav page={props.page} />
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2024 Gyosei Physics Club. All rights reserved.</p>
        </div>
    );
}

const PageLinks = () => {
    return (
        <div>
            <Link href="/about" legacyBehavior><a className="link-button">About</a></Link>
            <Link href="/works" legacyBehavior><a className="link-button">Works</a></Link>
        </div>
    );
}
export { Header, Footer, PageLinks };

