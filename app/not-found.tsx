
import React from 'react';
import "./doctheme.css";
import MainContent, { PageLinks } from "./elements";

const NotFoundPage: React.FC = () => {
    return (
        <MainContent page="">
            <div className="not-found">
                <h1 className="not-found-h1">404 Not Found</h1>
                <PageLinks />
            </div>
        </MainContent>
    );
}
export default NotFoundPage;

