import React from 'react';
import UniversityServices from '../../../services/UniversityServices';

class SoloUniversity extends React.Component {
    constructor() {
        super();
        this.state = {
            university: [],
            foundUniversity: {}
        }
    }

    /*componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.universityId !== this.props.match.params.universityId) {
            const foundUniversity = this.state.university.find(university => university.universityId === nextProps.match.params.universityId);
            this.setState({
                foundUniversity
            });
        }
    }

    componentDidMount() {
        UniversityServices.getAllData()
            .then(response => {
                let university = response.data;
                if (university) {
                    this.setState({
                        university
                    });
                    //console.log(university);
                }
                const foundUniversity = this.state.university.find(university => university.universityId === this.props.match.params.universityId);
                //console.log(foundUniversity);
                this.setState({
                    foundUniversity
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
*/
    render() {
        console.log(this.props);
        // const { name, info, image } = this.state.foundUniversity;
        return (
            <div className="StudentTab container">
                <div className="basicCard">
                    <div className="studentData text-center">
                        { /*<img src={ image } alt={ name }/>*/ }
                        <h1>aaa</h1>
                        { /*<p>Address: { info.address }</p>*/ }
                    </div>
                </div>
            </div>
        );
    }
}

export default SoloUniversity;