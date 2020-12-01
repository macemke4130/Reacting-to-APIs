import { Component } from 'react';

class Card extends Component {
    render() {
        return this.props.filmList.map((i) => (
            <>
                <div className="col-4">
                    <div className="card shadow mb-3 p-2">
                        <h3>{i.title}</h3>
                        <p>{i.description}</p>
                    </div>
                </div>
            </>
        ));
    }
}

export default Card;