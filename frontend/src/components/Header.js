import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { Clapperboard, Home } from 'lucide-react';

const Header = () => {
    const location = useLocation();

    const isAddMovieRoute = location.pathname === '/addmovie';

    return ( 
        <div className='topnav'>
            <Link smooth to='/'> 
                <Clapperboard color='#ffffff' size={36} style={{verticalAlign: 'text-bottom'}}/> Cine-Catalog 
            </Link>
            {isAddMovieRoute ? (
                <Link smooth to='/' className='add-button'>
                    <Home color='#ffffff' style={{verticalAlign: 'text-bottom'}}/> Back to Home </Link>
            ) : (
                <Link smooth to='/addmovie' className='add-button'>  Add Movies </Link>
            )}
        </div>
     );
}
 
export default Header;