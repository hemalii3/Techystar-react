import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../styles/Header.scss";


const Header = () => {
  return (
   <nav className='nav1'>
      <h1 className='h11'>Techystar</h1>
      <main className='main1'>
            <HashLink to={"/"}>Home</HashLink>
            <HashLink to={"#about"}>about</HashLink>
            <HashLink to={"#brands"}>brands</HashLink>
           
            <Link to={"/contact"}>contact</Link>
      </main>
   </nav>
  )
}

export default Header
