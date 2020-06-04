import React from 'react'
import Logo from '../assets/images/watching-tv.svg'

const MainPage = () => {

  return (
    <>
      <div id="slider">
        <h2><img id="iconMovie" src={Logo} alt="" /><strong>Seja bem-vindo</strong> - Encontre seu filme favorito </h2>
        <div className="clearfix"></div>
      </div>
    </>
  )
}


export default MainPage