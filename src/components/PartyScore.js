import React from 'react';

class PartyScore extends React.Component {
    render() {
        return (

            <div className='score-div'>
                <p>{this.props.totalScore}</p>
            </div>


        )
    }
}

export default PartyScore;