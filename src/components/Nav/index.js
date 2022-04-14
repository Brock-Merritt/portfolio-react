import React, { useEffect} from "react";

import './index.css'


function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
    document.title = (currentPage.name);
    },[currentPage]
    );

    return ( 
        <nav className="flex-row px-1">
            <ul className= 'balls'>
                {pages.map((page) => {
                    
                    return <ul className = {`text-decoration: none , mx-5 ${currentPage.name === page.name && 'navActive'}`} key= {page.name}>
                        <div className="navButton" onClick={() => setCurrentPage(page.name)}>
                            {page.name}

                        </div>
                    
                    
                    </ul>
                    
                })}

            </ul>
        </nav>
    );
}


export default Nav;