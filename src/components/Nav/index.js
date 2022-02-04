import React, { useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



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
            <ul className= 'flex-row'>
                {pages.map((page) => {
                    
                    return <ul className = {`text-decoration: none , mx-5 ${currentPage.name === page.name && 'navActive'}`} key= {page.name}>
                        <button onClick={() => setCurrentPage(page.name)}>
                            {page.name}

                        </button>
                    
                    </ul>
                    
                })}

            </ul>
        </nav>
    );
}


export default Nav;