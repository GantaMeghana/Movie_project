"use client"
import React,{useState} from "react";
export default function Button_row(){
    const[num,setNum]=useState(0);
    function voteup (){
        setNum(num+1)
    };
    function votedown (){
        setNum(num-1)
    };
    return(
        <>
           <div className="a">
                <button onClick={voteup}><img src="Icon-Like.svg"/></button>
            </div>
            <div className="d">
                <h1>{num}</h1>
            </div>
            <div className="b">
                <button onClick={votedown}><img src="Icon - Dislike.svg"/></button>
            </div>

        </>
        
    );s
}
