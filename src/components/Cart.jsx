import React, { useEffect, useState } from 'react'
import imagen from "../images/image-product-1-thumbnail.jpg"

function Cart({cantidadCarrito, setCantidadCarrito}) {

  const [resultado,setResultado] = useState(0)

  useEffect(() => {
    console.log("cantidadCarrito = " + cantidadCarrito);
    setResultado(cantidadCarrito * 125) 

  }, [cantidadCarrito])
  
  return (
    <>
      {
        cantidadCarrito > 0 ? (
            <div className='cart' >
              <div className='title-box mb-3 mx-2'>
                  <b className='title'>Cart</b>
              </div>
              <div className='list-items'>
                  <ul className='list'>
                      <li className='item'>
                          <div className='row box'>
                              <img className='col-3' src={imagen} alt="" />
                              <div className='col-8 px-0 mx-2'>
                                  <p>Fall Limited Edition Sneakers</p>
                                  <p>$125.00 x {cantidadCarrito} <span>${resultado}</span></p>
                              </div>
                              <div className='col-1'>
                              </div>
                          </div>
                          <div className='row mt-3'>
                              <div className="d-grid gap-2">
                                  <button type="button" name="" id="" className="btn">Checkout</button>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
            </div>
        ) : (
          <div className='cart' >
              <div className='title-box mb-3 mx-2'>
                  <b className='title'>Cart</b>
              </div>
              <div className='d-flex align-center justify-content-center pb-3'>
                  <p className='m-5 cart-text' >Your cart is empty.</p>
              </div>
          </div>
        )
      }
    </>
  )
}
export default Cart
