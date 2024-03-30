import React, { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

  const handleTheme = (e) => {
    
    if (e.target.checked)
    {
       setTheme('synthwave')
    }
    else {
      setTheme('light')
    }
    console.log(theme)
  }

  
  return (
    <div className="navbar bg-base-100 shadow-xl px-4 z-10 fixed">
  <div className="flex-1">
    <NavLink to={'/'} className="btn btn-ghost text-xl gap-0 font-extrabold text-secondary">Byte<span className='text-primary'>blaze</span></NavLink>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-bold gap-5 mx-3">
          <NavLink to={'/'} className={
            ({ isActive }) => isActive ? 'text-primary' : ''
          }>Home</NavLink>
          
          <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-primary' : ''}>Blog</NavLink>
          
    <NavLink to={'/bookmarks'} className={({isActive})=>isActive?'text-primary':''}>Bookmarks</NavLink>
      
    </ul>
    <input onChange={handleTheme} type="checkbox" className="toggle toggle-md"  />
  </div>
</div>
  );
};

export default NavBar;