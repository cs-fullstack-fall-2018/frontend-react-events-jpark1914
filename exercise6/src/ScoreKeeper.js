import React, {Component} from 'react'

class ScoreKeeper extends Component{
    constructor(props){
        super(props);
        this.state = {score: this.props.score}
    }
    buttonAdd = () =>{
        this.setState(
            {score: this.state.score + 1}
        )
    }
    render()
    {
        return(
            <div>
                <h1>Score Keeper:<span>{this.state.score}</span></h1>
                <button onClick={this.buttonAdd}>Add Score</button>
            </div>
        );
    }
}

export default ScoreKeeper;