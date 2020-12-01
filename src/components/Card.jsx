import { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <>
            <div className="row">
                {this.props.title}
            </div>
            </>
        )
    }
}

export default Card;