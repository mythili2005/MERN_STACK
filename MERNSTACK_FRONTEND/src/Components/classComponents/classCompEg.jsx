import React from "react";

class ClassCompEg extends React.Component{
    render(){
        return (<div>
            <h1>This is class component example</h1>
            <h2>Why default</h2>
            <h1>Default is a keyword used to export only a single component</h1>
            <h4>while using default we doesn't need to put curlybraces at importing the component which makes the code to 
                give a clear,simple and concise view</h4>
            </div>);    
    }

}

export {ClassCompEg,}