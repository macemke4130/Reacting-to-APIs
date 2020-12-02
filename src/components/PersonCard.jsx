import { Component } from 'react';

class PersonCard extends Component {
    render() {
        return this.props.personsList.map((i) => (
            <>
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="card shadow mb-3 p-2">
                        <h3>{i.name}</h3>
                        <p className="mb-0 pb-0">Age: {i.age}</p>
                        <p> Sex: {i.gender}</p>
                        <a href={i.url} className="btn btn-secondary" target="_blank">JSON File</a>
                    </div>
                </div>
            </>
        ));
    }
}

export default PersonCard;