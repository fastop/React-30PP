import React from 'react'

export default function NavItem({text, active=""}) {
  return (
          <li className="nav-item">
            <a href="#" className={`nav-link ${active}`}>{text}</a>
         </li>
  )
}
