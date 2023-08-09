import React, {useState, useEffect} from 'react';

export default function Option(){
    let [Toggle, setToggle] = useState("OFF");

    useEffect(()=>{
        let asd = localStorage.getItem('SetNormal');
        setToggle(asd);
    }, []);

    return(
        <div>
            <input type="checkbox" checked={Toggle==="ON"} onChange={()=>{
                setToggle(Toggle==="ON"?"OFF":"ON")
                localStorage.setItem('SetNormal', Toggle==="ON" ? "OFF" : "ON");
            }}>
            </input>
            <div style={Toggle==="ON" ? {color:"blue"} : {color:"red"}}>
                고양이 초인 없애기
            </div>
        </div>
    )
}