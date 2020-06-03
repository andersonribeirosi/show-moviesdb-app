import React from 'react'
import NavbarItem from '../components/NavbarItem'

import 'bootswatch/dist/flatly/bootstrap.css'
import 'materialize-css/dist/css/materialize.min.css'

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
