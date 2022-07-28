import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import logo from "../images/logo.svg"
import imagenPerfil from "../images/image-avatar.png"
import Cart from './Cart'

function Header({cartActive,setCartActive, cantidadCarrito, setCantidadCarrito}) {
    



    return (
        <>
            <div className='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-white row px-2">
                    <div className="container-fluid col-md-10 col-8">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand m-auto" href="#">
                            <img src={logo} alt="" />
                        </a>
                        <div className="collapse navbar-collapse mx-5" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    <a className="nav-link" aria-current="page" href="#">Collections</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">Men</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">Women</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href='#' >About</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href='#' >Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="side-navbar d-flex mb-3 col-md-2 col-4">
                        <div className='icon-cart m-auto' onClick={  () =>  setCartActive(cartActive = true) }>
                            <FontAwesomeIcon icon={faCartShopping}/>
                            {
                                cantidadCarrito > 0 ? <p>{cantidadCarrito}</p> : undefined
                            }
                        </div>
                        <div className='contenedor-imagen m-auto mx-4' >
                            <img src={imagenPerfil} alt="" className='imagen-perfil'/>
                        </div>
                    </div>
                </nav>
            </div>
            {
                cartActive ? (
                    <Cart
                        cantidadCarrito = {cantidadCarrito}
                        setCantidadCarrito = {setCantidadCarrito}
                    />
                ) : undefined
            }
        </>
        
    )
    
}

export default Header
