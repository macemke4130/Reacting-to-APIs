import { Component } from 'react';

class PersonCard extends Component {
    render() {
        return this.props.personsList.map((i) => (
            <>
                <div className="col-4">
                    <div className="card shadow mb-3 p-2">
                        <h3>{i.name}</h3>
                        <p>{i.age}</p>
                        <p>{i.gender}</p>
                    </div>
                </div>
            </>
        ));
    }
}

export default PersonCard;