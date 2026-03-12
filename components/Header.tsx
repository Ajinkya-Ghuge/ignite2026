'use client'

import Image from 'next/image'
import './Header.css'

export default function Header() {
  return (
    <nav className="header-nav">
      <div className="header-container">
        <div className="logo-center">
          <Image
            src="/images/ig_logo.png"
            alt="Ignite Logo"
            width={150}
            height={150}
            className="header-logo"
          />
        </div>
        
        <ul className="header-menu">
          {[
            { name: 'Home', href: '/' },
            { name: 'About us', href: '/about' },
            { name: 'Event', href: '/#event' },
            { name: 'Team', href: '/team' },
            { name: 'Contact', href: '/contact' }
          ].map((item) => (
            <li key={item.name}>
              <a href={item.href} className="header-link">
                {item.name}
                <span className="header-underline" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
