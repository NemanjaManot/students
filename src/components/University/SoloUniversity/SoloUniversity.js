import React from 'react';

//axios
import StudentsServices from '../../../services/StudentsServices';

//style
import './SoloUniversity.scss';

class SoloUniversity extends React.Component {
    constructor() {
        super();
        this.state = {
            university: [],
            foundUniversity: {
                name: '',
                image: '',
                info: {}
            },
            update: false,
            students: [],
        }
    }


    componentDidMount() {
        StudentsServices.getAllData().then(response => {
            this.setState({
                students: response.data
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.universityId !== this.props.match.params.universityId) {
            const foundUniversity = this.props.allUniversity.find(university => university.universityId == nextProps.match.params.universityId);
            this.setState({
                foundUniversity,
                update: true
            });
        }
    }

    render() {
        const { name, info, image } = this.state.foundUniversity;
        let students = this.state.students.filter(student => student.universityId == this.props.match.params.universityId);
        return (
            <div>
                <div>
                    { this.state.update ? <div className="soloUniversity">
                        <h1>{ name }</h1>
                        <img src={ image }/>
                        <p><strong>Address:</strong> { info.address }</p>
                        <p><strong>Established:</strong> { info.established }</p>
                        <p><strong>President:</strong> { info.president }</p>
                        <div className='studentsAtUniversity'><h3>Students:</h3> { students.map(student =>
                            <p> { student.firstName } { student.lastName } </p>) } </div>
                    </div> : null }

                </div>
            </div>
        );
    }
}

export default SoloUniversity;