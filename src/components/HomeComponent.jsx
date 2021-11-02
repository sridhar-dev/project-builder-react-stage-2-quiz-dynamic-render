import React, {Component} from "react";

export default class HomeComponent extends Component{
   render(){
       return (<React.Fragment>
           <div className="Container1">
           <h1 className="home">Quiz App</h1>
           <button className="home">Play</button>
           </div>
           </React.Fragment>
       )
   }

}