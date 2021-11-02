import React, {Component} from "react";
import Questions from "../resources/questions.json";

export default class QuizComponent extends Component{
    constructor(){
        super();
        this.state = {
            quesId: 0
        }
    }

    nextQues = () => {
        this.setState({
            quesId: (this.state.quesId + 1) % 15
        })
    }

    prevQues = () => {
        this.setState({
            quesId: (this.state.quesId - 1 < 0) ? 14 : this.state.quesId - 1
        })
    }

    quitQues = () => {
        this.setState({
            quesId: "Quiz has ended"
        })
    }

        render(){
            return (
                
                <div className="Quiz">
                    <div className="head">
                        <h1>Question</h1>
                        <span>{this.state.quesId + 1} of 15</span>
                        <p>{Questions[this.state.quesId].question}</p>
                    </div>

                    <div className="middle">
                        <button className="1">{Questions[this.state.quesId].optionA}</button>
                        <button className="2">{Questions[this.state.quesId].optionB}</button>
                        <button className="3">{Questions[this.state.quesId].optionC}</button>
                        <button className="4">{Questions[this.state.quesId].optionD}</button>
                    </div>
        
                    <div className="bottom">
                        <button className="left" onClick={this.prevQues}>Previous</button>
                        <button className="center" onClick={this.nextQues}>Next</button>
                        <button className="right" onClick={this.quitQues}>Quit</button>
                    </div>
                </div>
            )};
}

   