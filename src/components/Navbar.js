import React from 'react'
import NavbarItem from '../components/NavbarItem'



const Navbar = () => {

  return (
    <div className="navbar fixed-top navbar-dark bg-primary">
      <div className="container">
        <ul className="navbar-nav">
          <div className="row">
            <NavbarItem href="#/home" label="BRISAFilmes" />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
