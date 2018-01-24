//react
import React from 'react';

//axios
import StudentsServices from "../../services/StudentsServices";

//style
import './Students.scss';

class Students extends React.Component {
    state = {
        students: [],
        search: '',
        newStudents: []
    };

    componentDidMount() {
        StudentsServices.getAllData().then(response => {
            this.setState({
                students: response.data
            });
        });
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value
        })
    }

    submitForm(event) {
        componentDidMount();
        this.state.newStudents.push({
            "gender": event.target[0].value,
            "firstName": event.target[1].value,
            "lastName": event.target[2].value,
            "image": event.target[3].value,
            "id": Math.random() * 10,
            "universityId": parseInt(event.target[4].value)
        });
        event.preventDefault();
    }

    render() {
        let allStudents = this.state.newStudents;
        let filteredStudents = allStudents.filter(
            (student) => {
                return student.firstName.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1;
            }
        );
        console.log(allStudents);
        return (
            <div>
                <input className="searchInput"
                       type="text"
                       value={ this.state.search }
                       onChange={ this.updateSearch.bind(this) }
                       placeholder="Search"/>
                <form className="addStudentForm" onSubmit={ this.submitForm.bind(this) }>
                    <label>Gender:</label>
                    <select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label>First Name:</label><input id='name' type='text' placeholder='First Name' required/>
                    <label>Last Name:</label><input id='lastName' type='text' placeholder='Last Name' required/>
                    <label>Image:</label><input id='email' type='text' placeholder='Image' required/>
                    <label>University:</label>
                    <select>
                        <option value="1">University Of California</option>
                        <option value="2">Stanford University</option>
                        <option value="3">Harvard University</option>
                        <option value="4">Columbia University</option>
                    </select>
                    <input type="submit"/>
                </form>
                <div>
                    { filteredStudents.map(student =>
                        <div className="students" key={ student.id }>
                            <p>{ student.firstName } { student.lastName }</p>
                            <img src={ student.image }/>
                            <div className="circle"
                                 style={ student.attendanceMark.present ? { backgroundColor: 'green' } : { backgroundColor: 'red' } }></div>
                            <div className="circle"
                                 style={ student.attendanceMark.late ? { backgroundColor: 'yellow' } : { backgroundColor: '' } }></div>
                        </div>
                    ) }
                </div>
            </div>
        );
    }
}

export default Students;