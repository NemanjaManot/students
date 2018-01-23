//react
import React from 'react';
import { Link, Route } from 'react-router-dom';

//axios
import UniversityInfo from "../../services/UniversityServices";

//components
import SoloUniversity from './SoloUniversity/SoloUniversity';

//style
import './University.scss';

class University extends React.Component {
    constructor() {
        super();
        this.state = {
            university: []
        };
    }

    componentDidMount() {
        UniversityInfo.getAllData()
            .then(response => {
                this.setState({
                    university: response.data
                });
            });
    }

    render() {
        let allUniversity = this.state.university;
        return (
            <div>
                <div>
                    { allUniversity.map(university =>
                        <div className="university" key={ university.universityId }>
                            <p>{ university.name }</p>
                            <img src={ university.image }/>
                            <Link key={ university.universityId }
                                  to={ `${this.props.match.path}/${university.universityId}` }
                            >
                                <button>Show More</button>
                            </Link>
                        </div>
                    )
                    }
                    <Route path={ `${this.props.match.path}/:universityId` } render={ (props) =>
                        <SoloUniversity { ...props } allUniversity={ this.state.university }/> }
                    />
                </div>
            </div>
        );
    }
}

export default University;