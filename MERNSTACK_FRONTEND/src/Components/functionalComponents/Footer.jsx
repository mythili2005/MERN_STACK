import "../../assets/css/Footer.css"
import React from 'react';
const Footer = () =>{
    function click(){
        alert("Form submitted successfully");
    }
    return(
        <footer>
            <section>
            <form>
                <label>Enter your name:
                     <input type="text" /><br></br>
                </label>
                <label>Enter your department:
                    <input type ="text"/><br></br>
                </label>
                <label>Enter your number:
                    <input type ="number"/>
                </label><br></br>
                <button onClick={click}>Submit</button>
            </form>
            </section>
        </footer>
    );
}
export default Footer;