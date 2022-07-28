import { useEffect, useState } from 'react'
import Header from './components/Header'
import MainLeft from './components/MainLeft'
import MainRight from './components/MainRight'



function App() {

const [cartActive, setCartActive] = useState(false);
const[cantidadCarrito, setCantidadCarrito] = useState(0);
let [cantidad, setCantidad] = useState(0);


useEffect(() => {
  if(cantidad <= 0 ){
    setCantidad(cantidad = 0)
  }
}, [cantidad])

const agregarCarrito = () => {
  console.log("Agregando al carrito");
  console.log(cantidad);
  setCantidadCarrito(cantidadCarrito + cantidad)
}

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12">
            <Header
              cartActive = {cartActive}
              setCartActive = {setCartActive}
              cantidadCarrito = {cantidadCarrito}
              setCantidadCarrito = {setCantidadCarrito}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12">
            <MainLeft

            />
          </div>
          <div className="col-md-6 col-sm-12">
            <MainRight
              cantidad = {cantidad}
              setCantidad = {setCantidad}
              agregarCarrito= {agregarCarrito}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
