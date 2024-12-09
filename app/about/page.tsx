
import MainContent from '../elements';
import React from 'react';
import Image from 'next/image';

import GitHubLogoWhite from '@/public/logos/github-mark-white.png';
import XLogoWhite from '@/public/logos/x-logo-white.png';

const HomePage: React.FC = () => {
    return (
        <MainContent page="about">
            <div className="document">
                <section id="about-us">
                    <h2>About Us</h2>
                    <h3>はじめまして、暁星学園物理部です。</h3>
                    <p>エトワール祭での展示に向けて様々な電子工作をしています。</p>
                    <p>今年度はテスラコイルやリレー式計算機などを作りました。</p>
                    <h3>SNS Links</h3>
                    <span className="sns-link-span">
                        <a href="https://github.com/gyoseibutsuribu" className="sns-link" target="_blank">
                            <Image id="github-logo-white" src={GitHubLogoWhite} alt="" priority/>
                            @gyoseibutsuribu</a>
                    </span>
                    <span className="sns-link-span">
                        <a href="https://x.com/gyoseibutsuribu" className="sns-link" target="_blank">
                            <Image id="x-logo-white" src={XLogoWhite} alt="" priority/>
                            @gyoseibutsuribu</a>
                    </span>
                </section>
            </div>
            <div className="document">
                <h2>活動曜日</h2>
                <h3>学期中</h3>
                <ul>
                    <li>水曜日</li>
                    <li>金曜日</li>
                </ul>
                <h3>長期休業中</h3>
                <ul>
                    <li>不定期</li>
                </ul>
            </div>
        </MainContent>
    );
}

export default HomePage;
