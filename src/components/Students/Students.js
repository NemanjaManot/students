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
        deleteMode: false
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

    changeDeleteStatus(id) {
        console.log(id);
        this.setState({
            deleteMode: id
        })
    }

    submitForm(event) {
        let newStudent = {
            gender: event.target[0].value,
            firstName: event.target[1].value,
            lastName: event.target[2].value,
            image: event.target[3].value,
            id: Math.random() * 10,
            universityId: parseInt(event.target[4].value),
            attendanceMark: {}
        };
        if (event.target[5].value === 'present') {
            newStudent.attendanceMark.present = true;
        } else if (event.target[5].value === 'late') {
            newStudent.attendanceMark.late = true;
        } else {
            newStudent.attendanceMark.absent = true;
        }
        this.setState({
            students: this.state.students.concat(newStudent)
        });
        event.preventDefault();
    }

    deleteStudent(student) {
        const students = this.state.students;
        this.setState({
            students: students.filter(students => students.id !== student.id)
        });
    }

    render() {
        let allStudents = this.state.students;
        let filteredStudents = allStudents.filter(
            student => {
                return student.firstName.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1;
            }
        );
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
                    <label>Status:</label>
                    <select>
                        <option value="present">present</option>
                        <option value="late">late</option>
                        <option value="absent">absent</option>
                    </select>
                    <input type="submit"/>
                </form>
                <div>
                    { filteredStudents.map(student =>
                        <div className="students" key={ student.id }>
                            { /*{ this.state.deleteMode ? (<p>{ student.firstName } { student.lastName }</p>) :*/ }
                            { /*<input onClick={ this.deleteStudent.bind(this, 'id') }/> }*/ }
                            { this.state.deleteMode == student.id ?
                                <p onClick={ this.deleteStudent.bind(this, student) }>DELETE</p> :
                                <p key={ student.id }
                                   onClick={ this.changeDeleteStatus.bind(this, student.id) }>{ student.firstName } { student.lastName }</p> }
                            <img src={ student.image }/>
                            <div className="circle"
                                 style={ student.attendanceMark.present ? { backgroundColor: '#2ecc71' } : { backgroundColor: '#e74c3c' } }>
                            </div>
                            <div className="circle"
                                 style={ student.attendanceMark.late ? { backgroundColor: '#f1c40f' } : { backgroundColor: '' } }>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default Students;