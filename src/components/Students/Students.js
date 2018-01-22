import React from 'react';
import StudentsServices from "../../services/StudentsServices";

class Students extends React.Component {
    state = {
        students: []
    };

    componentDidMount() {
        StudentsServices.getAllData().then(response => {
            this.setState({
                students: response.data
            });
        });
    }

    render() {
        let allStudents = this.state.students;
        return (
            <div>
                { allStudents.map(student =>
                    <div key={ student.id }>
                        <p>{ student.firstName } { student.lastName }</p>
                        <img src={ student.image }/>
                    </div>
                ) }
            </div>
        );
    }
}

export default Students;