import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{
    const [firstname,setFirstName]= useState("");
    const [lastname,setLastName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [phonenum,setPhoneNum] = useState("");
    const [dob,setDob]= useState("");
    var navigate = useNavigate();
    function click(){
        alert("Form submitted successfully");
    }
    var signUp = async(event) =>{
        event.preventDefault()
        var req = await axios.post('http://localhost:3001/signup',{
            firstName:firstname,
            lastName:lastname,
            email:email,
            password: password,
            phoneNumber: phonenum,
            DateOfBirth:dob
        })
        console.log("Signup successfully");
        navigate('/login');
    }

    return (
    <section>
        <h1>SignUp page</h1>
        <form onSubmit = {signUp}>
        <label>Enter your first name:
             <input type="text" placeholder="eg:John" value = {firstname} onChange = {(e)=>setFirstName(e.target.value)} required/><br />
        </label>
        <label>Enter your last name:
            <input type ="text" placeholder="eg:Doe" value = {lastname} onChange = {(e)=>setLastName(e.target.value)} required/><br />
        </label>
        <label>Enter your email:
            <input type ="email" placeholder="example@gmail.com" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
        </label><br />
        <label>Enter your password:
            <input type ="password" value = {password} onChange = {(e)=>setPassword(e.target.value)} />
        </label><br />
        <label>Enter your phone number:
            <input type ="number" placeholder="9123456780" value = {phonenum} onChange = {(e)=>setPhoneNum(e.target.value)}/>
        </label><br />
        <label>Enter your Date of Birth:
            <input type ="date" value = {dob} onChange = {(e)=>setDob(e.target.value)}/>
        </label><br />
        <button onClick={click}>Submit</button>
    </form>
    </section>);
}

export default SignUp;