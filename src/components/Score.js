import React from 'react';
import "./StyleComponent/Score.css"

class Score extends React.Component {

    render(){
        return(
            <div className='score-div'>
                <p className='score-count'>{this.props.score}</p>
            </div>
        )
    };
}

export default Score;