import { useState, useEffect } from 'react'
import Logo from '../assets/shared/logo.svg'
import { NavDesktop, NavMobile } from './Nav'
import { BiMenu } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

function Header() {
  const [showNav, setShowNav] = useState(false)
  const { pathname } = useLocation()
  const endpoints = [
    {
        title: 'home',
        path: '/',
        bgClass: 'bg-home'
    },
    {
        title: 'distination',
        path: '/dist',
        bgClass: 'bg-dist'
    },
    {
        title: 'crew',
        path: '/crew',
        bgClass: 'bg-crew'
    },
    {
        title: 'technology',
        path: '/tech',
        bgClass: 'bg-tech'
  }]
  
  useEffect(() => {
    const body = document.body;
    endpoints.forEach(({path, bgClass}) => {
      if (path === pathname) {
        body.className = ''
        body.classList.add(bgClass)
      }
    });
  }, [pathname])

  
  return (
    <header className='main-header'>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      {/* toogle nav */}
      <div className="toggle" onClick={() => setShowNav(prev => !prev)}>
        {showNav
          ? <FaTimes />
          : <BiMenu />
        }
      </div>
      <NavDesktop endpoints={endpoints} /> 
      <NavMobile endpoints={endpoints} toggle={showNav}/>
    </header>
  )
}

export function PageHeader({title, pageNum}) {
  return (
    <h2 className='letter-spacing-2 uppercase ff-sans-cond page-header'>
      <span>0{pageNum}</span>
      {title}
    </h2>
  )
}

export default Header