import React from "react";
import Component2 from "./ContextComponents/Component2";

export var ThemeProvider = React.createContext();
var ExamResults = () =>{
    return(
        <section>
            <ThemeProvider.Provider value ={{sgpa:"10.00",cgpa:"9.8"}} >
            <h1>This is an example of UseContext</h1>
            <h1><Component2 /></h1>
            </ThemeProvider.Provider>
        </section>
    )
}
 export default ExamResults;
