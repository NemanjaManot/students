import React from 'react';
import UniversityInfo from "../../services/UniversityServices";
import { Link, Route } from 'react-router-dom';
import SoloUniversity from '/home/djordje/WebstormProjects/students/src/components/University/SoloUniversity/SoloUniversity.js';

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
                        <div key={ university.universityId }>
                            <p>{ university.name }</p>
                            <img src={ university.image }/>
                            <Link key={ university.universityId }
                                  to={ `university/${university.universityId}` }
                            >
                                <button>Show More</button>
                            </Link>
                        </div>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default University;