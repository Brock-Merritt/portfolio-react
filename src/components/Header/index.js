import React from 'react';
// import { Link } from 'react-router-dom';



function Header(props) {

    return(
        
        <header>
            <div className='container flex-row justify-space-between-lg justify-center align-center'>



                
                <h1 className="container flex-row justify-space-between-lg justify-center align-center">Portafolio de Brock</h1>
            </div>
            {props.children}
        </header>
    );

}

export default Header;