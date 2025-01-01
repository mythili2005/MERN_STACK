import { useContext } from "react";
import { ThemeProvider } from "../useContext";
var StudentResult = ()=>{
    var result = useContext(ThemeProvider)
    return(
        <section>
            <h1> In Result {result.sgpa} and CGPA Result is {result.cgpa} </h1>
        </section>
    )
}
export default StudentResult;