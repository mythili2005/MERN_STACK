import { useEffect, useRef, useState } from "react";

var UseRef = () =>{
    /*var [text,setText] = useState("");
    var prevText = useRef("");
    useEffect(()=>{
        prevText.current = text;
    },[text])
    return(
        <section>
            <h1>This is an example useRef</h1>
            <input type="text" value={text} onChange = {(e) => setText(e.target.value)} />
            <h2>My current render is {text}</h2>
            <h3>My Previous render is {prevText.current}</h3>
        </section>
    )*/
    var [number,setNumber] = useState([]);
    var prevNum = useRef("");
    useEffect(()=>{
        prevNum.current = number;
    },[number])
    return(
        <section>
            <h1>This is an task useRef</h1>
            <input type="number" value={number} onChange = {(e) => setNumber(e.target.value)} />
            <h2>My current render is {number}</h2>
            <h3>My Previous render is {prevNum.current}</h3>
        </section>
    )
}
export default UseRef;