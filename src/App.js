import React from "react";
import Gender from "./Gender";
import Heading from "./Heading";
import Register from "./Register";

const App =() =>{
  return(
  <>
    <div className="container">
      <div className="main">
      <Heading/>
      <div className="input-group">
        <span className="first">First Name 
        </span> 
        <span className="last">Last Name </span>
        <div>
        <input type ="text" className="from-control" 
        />
        <input type ="text" className="from-controls" 
        /></div>
        <br/>
        <span className="inputs">Email Address</span>
        <input type ="text" className="control" 
        /> 
        <br/>
        <Gender/>

        <br/>
        <span className="place">
          City
        </span>
        <input type ="text" className="control"/> 
        <br/>
        <span className="place">
          Country
        </span>
        <input type ="text" className="control"/> 
        <br/>

        <Register/>

       
        
       
        

      </div>
      
      </div>
    </div>
  </>
  );
}

export default App;