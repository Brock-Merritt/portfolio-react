import React from 'react';
// import { Link } from 'react-router-dom';



function Header(props) {

    return(
        
        <header>
            <div >



                
                <h1 className='header'>Brocks Portfolio</h1>
            </div>
            {props.children}
        </header>
    );

}

export default Header;