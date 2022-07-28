import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"


function MainRight({cantidad, setCantidad, agregarCarrito}) {
    return (
        <div>
            <div className="contenedor-right py-5 mx-2">
                <h3>SNEAKER COMPANY</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <p className='text mt-4'>These low-profile sneakers are your perfect casualt wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div className='row'>
                    <div className='price col-md-12 col-6 d-flex mx-1'>
                        <span>$125.00</span>
                        <p className='my-auto mx-2 px-2 rounded'>50%</p>
                    </div>
                    <p className='after-price col-md-12 col-6 my-auto mx-2'>$250.00</p>
                </div>
                <div className='row d-flex mt-3'>
                    <div className='col-12 col-md-6'>
                        <div className='counter d-flex justify-content-between py-2 px-2 mt-4 mx-'>
                            <div className='minus' >
                                <img src={minus} alt="" className='minus-image' onClick = {() => setCantidad(cantidad -= 1)} />
                            </div>
                            <span>{cantidad}</span> 
                            <div className='plus'>
                                <img src={plus} alt="" className='plus-image' onClick = {() => setCantidad(cantidad += 1)}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <button className='btn d-flex justify-content-around mx-4 mt-4 px-4' onClick={() => agregarCarrito()}>
                            <div className='icon'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                            <p className='my-auto mx-4 fw-bold'  >Add to cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainRight
