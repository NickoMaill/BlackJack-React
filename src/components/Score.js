import React from 'react';

class Score extends React.Component {

    render(){
        return(
            <div>
                <div>score: {this.props.score}</div>
            </div>
        )
    };
}

export default Score;