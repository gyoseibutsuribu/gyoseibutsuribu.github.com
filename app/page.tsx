
import MainContent, { PageLinks } from "./elements";
import React from 'react';
import Image from 'next/image';

import ButsuribuImage from "@/public/butsuribu_logo.png";

const HomePage: React.FC = () => {
    return (
        <MainContent page="top">
            <div id="page-top">
                <p><Image id="top-image" src={ButsuribuImage} alt="main-image" priority/></p>
                <h1 id="title-top">暁星学園物理部</h1>
                <PageLinks />
            </div>
        </MainContent>
    );
};

export default HomePage;
