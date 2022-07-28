import React from 'react'
import imagenGrande1 from "../images/image-product-1.jpg"
import imagenGrande2 from "../images/image-product-2.jpg"
import imagenGrande3 from "../images/image-product-3.jpg"
import imagenGrande4 from "../images/image-product-4.jpg"

import imagenChica1 from "../images/image-product-1-thumbnail.jpg"
import imagenChica2 from "../images/image-product-2-thumbnail.jpg"
import imagenChica3 from "../images/image-product-3-thumbnail.jpg"
import imagenChica4 from "../images/image-product-4-thumbnail.jpg"

import icon_close from "../images/icon-close.svg"



function MainLeft() {
    const ventana = (window.screen.width <= 767)
    return (
        <>
            {
                !ventana ? (
                <div className="contenedor-imagenes m-auto">
                    <div className='row'>
                        <div className="contenedor-imagen-grande d-flex justify-content-center mb-4">
                            <img src={imagenGrande1} alt="" className='imagen-grande img-fluid rounded' data-bs-toggle="modal" data-bs-target="#modelId"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="contenedor-imagen-chica d-flex justify-content-center">
                            <div className="imagen-chica mx-2">
                                <img src={imagenChica1} alt="" className='rounded ' />
                            </div>
                            <div className="imagen-chica mx-2">
                                <img src={imagenChica2} alt="" className='rounded' />
                            </div>
                            <div className="imagen-chica mx-2">
                                <img src={imagenChica3} alt="" className='rounded' />
                            </div>
                            <div className="imagen-chica mx-2">
                                <img src={imagenChica4} alt="" className='rounded' />
                            </div>
                        </div>
                    </div>
                    
                    <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                    <button type="button" className="btn button-close" data-bs-dismiss="modal" aria-label="Close">
                                        <img src={icon_close} alt="" />
                                    </button>
                                <div className="modal-body">
                                    <div id="carouselId" className="carousel" data-bs-ride="carousel">
                                        <div className="carousel-inner mx-auto" role="listbox">
                                            <div className="carousel-item active">
                                                <img className='img-fluid rounded' src={imagenGrande1} alt="First slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img className='img-fluid rounded' src={imagenGrande2} alt="Second slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img className='img-fluid rounded' src={imagenGrande3} alt="Third slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img className='img-fluid rounded' src={imagenGrande4} alt=" slide"/>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="contenedor-imagen-chica-modal d-flex justify-content-center">
                                        <div className="imagen-chica-modal mx-2">
                                            <img src={imagenChica1} alt="" className='rounded ' />
                                        </div>
                                        <div className="imagen-chica-modal mx-2">
                                            <img src={imagenChica2} alt="" className='rounded' />
                                        </div>
                                        <div className="imagen-chica-modal mx-2">
                                            <img src={imagenChica3} alt="" className='rounded' />
                                        </div>
                                        <div className="imagen-chica-modal mx-2">
                                            <img src={imagenChica4} alt="" className='rounded' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>) : (
                <div className="contenedor-imagenes-two ">
                    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="3" aria-label="Fourth slide"></li>
                        </ol>
                        <div className="carousel-inner mx-auto" role="listbox">
                            <div className="carousel-item active">
                                <img className='img-fluid' src={imagenGrande1} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className='img-fluid' src={imagenGrande2} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className='img-fluid' src={imagenGrande3} alt="Third slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className='img-fluid' src={imagenGrande4} alt=" slide"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            )
            }
            
        </>
    )
}

export default MainLeft
