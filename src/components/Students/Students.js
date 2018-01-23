//react
import React from 'react';

//axios
import StudentsServices from "../../services/StudentsServices";

//style
import './Students.scss';

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
                    <div className="students" key={ student.id }>
                        <p>{ student.firstName } { student.lastName }</p>
                        <img src={ student.image }/>
                        <form className="formselector">
                            <input type="radio" value="1" name="formsel"/>
                            <input type="radio" value="2" name="formsel"/>
                            <input type="radio" value="3" name="formsel"/>
                        </form>
                    </div>
                ) }

            </div>
        );
    }
}

export default Students;