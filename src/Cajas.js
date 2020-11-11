import React from 'react'
import Iframe from './components/Iframe'


const Cajas =() => {
    const imagen = "https://e-marketingservices.com/images/stories/en-construccion/en-construccion.jpg"
    return (
            <div className="container">
                <img src={imagen} alt='' height="750px" width="1150px" />  
            </div>    
    )
}
export default Cajas