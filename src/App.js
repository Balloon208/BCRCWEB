import './App.css';
import React, {Component, useState, useEffect} from 'react';
import TOP from "./component/TOP";
import BOTTOM from "./component/BOTTOM";
import SoloMode from "./component/SoloMode";
import Option from "./component/Option";

export default function App(){
  const [mode, setMode] = useState('Welcome');
  const [MainArticle, setMainArticle] = useState(
    <div>
      <h2 className='text'>Welcome</h2>
    </div>
  );

  const onChangeMode = (mode) =>{
    if(mode === 'Welcome'){
      setMainArticle(
        <div>
          <h2 className='text'>Welcome</h2>
        </div>
      )
    }
    if(mode === 'Solomode'){
      setMainArticle(
        <div>
          <h2 className='text'>Solomode</h2>
          <SoloMode></SoloMode>
        </div>
      )
    }
    if(mode === 'Versus'){
      setMainArticle(
      <div>
        <h2 className='text'>Versus</h2>
      </div>
      )
    }
    if(mode === 'Option'){
      setMainArticle(
      <div>
        <h2 className='text'>Option</h2>
        <Option></Option>
      </div>
      )
    }
    console.log(mode)
  };

  return(
      <div className="App">
        <TOP onChangeMode={onChangeMode}></TOP>
        {MainArticle}
        <BOTTOM></BOTTOM>
      </div>
  );
}
  