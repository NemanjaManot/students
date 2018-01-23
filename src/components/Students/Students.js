//react
import React from 'react';

//axios
import StudentsServices from "../../services/StudentsServices";

//style
import './Students.scss';

class Students extends React.Component {
    state = {
        students: [],
        here: 0,
        nothere: 0,
        late: 0
    };

    componentDidMount() {
        StudentsServices.getAllData().then(response => {
            this.setState({
                students: response.data
            });
        });
    }

    studentStatus(e) {
        let here = this.state.here;
        let nothere = this.state.nothere;
        let late = this.state.late;
        if (e === 'here') {
            here++;
            this.setState({
                here: here
            })
        } else if (e === 'nothere') {
            nothere++;
            this.setState({
                nothere: nothere
            })
        } else if (e === 'late') {
            late++;
            this.setState({
                late: late
            })
        }
    }


    render() {
        let allStudents = this.state.students;
        const studentColor = allStudents.map(student => student.attendanceMark.present);
        console.log(studentColor);

        return (
            <div>
                { allStudents.map(student =>
                    <div className="students" key={ student.id }>
                        <p>{ student.firstName } { student.lastName }</p>
                        <img src={ student.image }/>
                        <form className="formselector">
                            <span>Here:</span><input onChange={ this.studentStatus.bind(this, 'here') }
                                                     type="radio"
                                                     value="here"
                                                     name="formsel"/>
                            <span>Not Here:</span><input onChange={ this.studentStatus.bind(this, 'nothere') }
                                                         type="radio"
                                                         value="nothere"
                                                         name="formsel"/>
                            <span>Late:</span><input onChange={ this.studentStatus.bind(this, 'late') }
                                                     type="radio"
                                                     value="late"
                                                     name="formsel"/>
                        </form>
                    </div>
                ) }
                <p> Here: { this.state.here }</p>
                <p> Not here: { this.state.nothere }</p>
                <p> Late: { this.state.late } </p>

            </div>
        );
    }
}

export default Students;