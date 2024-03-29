import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [theme, setTheme] = useState(true);

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
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Blog</a></li>
    </ul>
    <input onChange={handleTheme} type="checkbox" className="toggle toggle-md"  />
  </div>
</div>
  );
};

export default NavBar;