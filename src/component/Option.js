import React, {useState, useEffect} from 'react';

export default function Option(){
    let [Toggle, setToggle] = useState("OFF");

    useEffect(()=>{
        let asd = localStorage.getItem('test');
        setToggle(asd);
    }, []);

    return(
        <div>
            <input type="checkbox" checked={Toggle==="ON"} onChange={()=>{
                setToggle(Toggle==="ON"?"OFF":"ON")
                localStorage.setItem('test', Toggle==="ON" ? "OFF" : "ON");
            }}>
            </input>
            <div style={Toggle==="ON" ? {color:"blue"} : {color:"red"}}>
                asdf
            </div>
        </div>
    )
}