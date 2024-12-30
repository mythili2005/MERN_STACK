import { useState } from "react";

const Gallery = () =>{

    var[counter,setCount] = useState(0);
    return (<section>
    <h1>This is gallery page to understand the highlighted word</h1>
    <h2 style={{textAlign:"center",backgroundColor:"pink"}}>State</h2>
    <h3>This is my state value {counter}</h3>
    <button onMouseOver={()=>{setCount(counter+1)}}>Increment</button><br /><br></br>
    <button onClick={()=>{setCount(counter-1)}}>Decrement</button><br /><br></br>
    <button onDoubleClick={()=>{setCount(0)}}>Reset</button>
    </section>
    );
}

export default Gallery;