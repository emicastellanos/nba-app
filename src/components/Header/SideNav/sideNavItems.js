import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import style from './sideNav.css';


const SideNavItems = () => {

  const items = [
    {
      type: style.option,
      icon: 'home',
      text: 'Home',
      link: '/'
    },
    {
      type: style.option,
      icon: 'file-alt',
      text: 'News',
      link: '/news'
    },
    {
      type: style.option,
      icon: 'play',
      text: 'Videos',
      link: '/videos'
    },
    {
      type: style.option,
      icon: 'sign-in-alt',
      text: 'Sign-in',
      link: '/sign-in'
    },
    {
      type: style.option,
      icon: 'sign-out-alt',
      text: 'Sign-out',
      link: '/sign-out'
    }
    
  ]

  /* <div className={style.option}>
      <Link to="/">
        <FontAwesome name="home"/>
        home
      </Link>
    </div> */

  const showItems = () => {
    return (
      items.map( (item,i) => {
        return (
        <div className={item.type} key={i}>
          <Link to={item.link}>
            <FontAwesome name={item.icon}/>
              {item.text}
          </Link>
        </div>
        )
      })
    )

  }

  return (
    <div>
      {showItems()}
    </div>
  )
}

export default SideNavItems;