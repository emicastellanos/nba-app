import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import SideNav from './SideNav/sideNav';


const Header = (props) => {

  /* le pasamos color gris y otras cosas.  ese bars son las tres rayitas del navbar que usamos de fontaweosme
   */
  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome name="bars" 
        onClick={props.onOpenNav}
        style={{
          color:'#dfdfdf',
          padding:'10px',
          cursor:'pointer',
        }}
      />
    </div>
  ) //lo defino directamente asi, sin usar llave porque vamos a devolver jsx (?)

  /* const logo = () => {
    return (
      <Link to='/' className={style.logo}>
        <img alt="nba logo" src='/images/nba_logo.png'/>
      </Link>
    ) pero usamos la forma de abajo que es mas cool 
    */
  const logo = () => (
    <Link to='/' className={style.logo}> 
      <img alt="nba logo" src='/images/nba_logo.png'/>
    </Link>
  )

  return (
    <header className={style.header}>
      <SideNav {...props}/>
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header;