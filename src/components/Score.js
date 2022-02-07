import React from 'react';

class Score extends React.Component {

    render(){
        return(
            <div>
                score {this.props.character}: {this.props.score}
            </div>
        )
    };
}

export default Score;