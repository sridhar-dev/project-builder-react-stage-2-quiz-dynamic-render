import React, {Component} from "react";

export default class ResultComponent extends Component{
   render(){
       return (
           <React.Fragment>
               <div className="Result">
                    <div className="logo"></div>
                    <h1>Result</h1>
                    <div className="score">
                        <h2>You need more practice!</h2>
                        <h1>Your Score: 20%</h1>
                        <ul>Total number of questions:</ul>
                        <ul>15</ul>
                        <ul>Number of attempted questions:</ul>
                        <ul>9</ul>
                        <ul>Number of Correct Answers:</ul>
                        <ul>3</ul>
                        <ul>Number of Wrong Answers:</ul>
                        <ul>6</ul>
                    </div>
                    <div className="last">
                        <button className="side1">Play Again</button>
                        <button className="side2">Back to Home</button>
                    </div>
               </div>
               </React.Fragment>
       )
   }
}