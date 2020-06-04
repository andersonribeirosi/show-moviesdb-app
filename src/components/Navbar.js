import React from 'react'
import NavbarItem from '../components/NavbarItem'
import BrisanetLogo from '../assets/images/brisanet.png'

const Navbar = () => {

  return (
    <>
      <div className="navbar fixed-top navbar-dark">
        <div className="container">
          <ul className="navbar-nav">
            <div className="row">
              <img id="logoBrisa" src={BrisanetLogo} alt="" /><NavbarItem href="#" label="BRISAFilmes" />
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
