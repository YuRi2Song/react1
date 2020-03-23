import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item"> 
                {children} 
        </Link> 
    
);

const Header = () => {
    return(
        <div>
            <div className="logo">
            1th Interlude CTF
            </div>
        <div className="menu">
            <MenuItem to={"/ctf/web"}>Web</MenuItem>
            <MenuItem to={"/ctf/system"}>System</MenuItem>
            <MenuItem to={"/ctf/reverse"}>Reverse</MenuItem>
        </div>
        </div>
    );
};

    

export default Header;