import { useState,useEffect } from "react";
import axios from "axios";

var UseEffect = () =>{
   /* var[text,setText]=useState("Kongu");
    useEffect(()=>{
        console.log(text);
        setText("KEC")
    },[])
    return (
        <section>
            <h1>useEfffct</h1>
            <h2>Enter your text</h2>
            <input type="text" placeholder="enter the text" value = {text} 
            onChange = {(e) => setText(e.target.value)} />
            <h2>typed text is {text}</h2>
        </section>
    )*/
   /*var[post,setPost]=useState([])
   useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/posts/')
    .then((res)=>{console.log(res);
        setPost(res.data);
    })
    .catch((error)=>{console.log(error)})
   },[])
   return(
    <section>
        <h1>Fetching the data from json placeholder API</h1>
        <h2>Posts are</h2>
        <ol>
            {post.map((data)=>(<li key={data.userId}>{data.title}</li>))}
        </ol>
    </section>
   );*/
   var[image,setImage]=useState([])
   useEffect(()=>{
    axios
    .get('https://picsum.photos/v2/list')
    .then((res)=>{console.log(res);
        setImage(res.data);
    })
    .catch((error)=>{console.log(error)})
   },[])
   return(
    <section>
        <h1>Fetching the data from picsum photos API</h1>
        <h2>Images are</h2>
        <ol style={{columnCount:"3",justifyContent:"space-evenly",lineHeight: "40px"}}>
            {image.map((data)=>(<li key={data.id}>
                <img src={data.download_url} width="400" height="300"/></li>))}
        </ol>
    </section>
   );
}
export default UseEffect;