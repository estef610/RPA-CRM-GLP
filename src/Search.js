import React from 'react'

function Search(props){
    return(
        
        <div className="container">
            {   <div className="">
                    {props.title}
                </div> }
            <imput type="text" />
        </div>
    );
}

export default Search