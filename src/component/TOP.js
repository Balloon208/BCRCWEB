import React, {Component} from 'react';

export default function TOP({onChangeMode}){

    return(
        <header>
            <div className='TOPheader'>
                <li onClick={()=>onChangeMode('Welcome')}><a >HOME</a></li>
                <li onClick={()=>onChangeMode('Solomode')}><a >Solomode</a></li>
                <li onClick={()=>onChangeMode('Versus')}><a >Versus</a></li>
                <li onClick={()=>onChangeMode('Option')}><a >Option</a></li>
            </div>
        </header>
    )
}