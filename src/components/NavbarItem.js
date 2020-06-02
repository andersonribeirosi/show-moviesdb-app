import React from 'react'

function NavbarItem(props) {

  return (
    <li className="nav-item">
      <p className="nav-link"
        href={props.href}>{props.label}
      </p>
    </li>
  )
}

export default NavbarItem