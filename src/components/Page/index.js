import React from "react";
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Nav from '../Nav';

function Page({ currentPage }) {
    const renderPage = () => {
        console.log(currentPage);
        switch (currentPage) {
            case 'Nav':
                return<Nav/>;
            case 'About':
                return <About/>;
            case 'Portfolio':
                return <Portfolio/>;
            case 'Contact':
                return <Contact/>;

            default:
                return <About/>;
        }
    };
    return ( 
        <section>
            <h2>{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );

}

export default Page;