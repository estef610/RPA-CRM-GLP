import React from 'react'
import Iframe from './components/Iframe'


const GPS =() => {
    const imagen = 'https://bicisgdl.files.wordpress.com/2019/04/captura-de-pantalla-2019-04-06-a-las-7.12.18.png?w=640'
    return (
            <div className="container">
                <img src={imagen} alt='' height="750px" width="1150px" />  
                <a href= 'https://goo.gl/maps/HmXkkoMCzjBSYK6z5'>GPS</a>
                <div className="Iframe">
                    <Iframe content={<p>GPS</p>} />
                </div> 
                  
            </div>    
    )
}
export default GPS