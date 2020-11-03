import React from 'react'
import Iframe from './components/Iframe'


function GPS() {
    return (
            <div className="container">
                <a href= 'https://goo.gl/maps/HmXkkoMCzjBSYK6z5'>GPS</a>
                <div className="Iframe">
                    <Iframe content={<p>GPS</p>} />
                
                </div>     
            </div>    
    )
}
export default GPS