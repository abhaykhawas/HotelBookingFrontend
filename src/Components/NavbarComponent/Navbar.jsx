import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [theme, setTheme] = React.useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch { return 'light'; }
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const nextLabel = useMemo(() => theme === 'dark' ? '☀️ Light' : '🌙 Dark', [theme]);

  return (
    <div className='navbar-container'>

        <div className="navbar-logo-container">
            <h3>TRAVLD</h3>
        </div>

        <div className="navbar-links-container">
            <Link to={'/'}>HOME</Link>
            <Link to={'/listings'}>LISTINGS</Link>
            <Link to={'/bookings'}>BOOKINGS</Link> 
            <button aria-label="Toggle theme" className='theme-toggle' onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>{nextLabel}</button>
        </div>
        
    </div>
  )
}

export default Navbar