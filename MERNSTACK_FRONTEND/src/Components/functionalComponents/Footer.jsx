import "../../assets/css/Footer.css"
import React from 'react';
const Footer = () =>{
    function click(){
        alert("Form submitted successfully");
    }
    return(
        <footer>
            <section>
                <h1>Feedback Form</h1>
            <form>
                <label>Enter your name:
                     <input type="text" /><br></br>
                </label>
                <label>Enter your department:
                    <input type ="text"/><br></br>
                </label>
                <label>Enter your Feedback:
                    <textarea rows="2" cols="50" placeholder="Enter text here..."></textarea>
                </label><br></br>
                <button onClick={click}>Submit</button>
            </form>
            </section>
        </footer>
    );
}
export default Footer;