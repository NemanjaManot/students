import React from 'react';
import UniversityServices from '../../../services/UniversityServices';

class SoloUniversity extends React.Component {
    constructor() {
        super();
        this.state = {
            university: [],
            foundUniversity: []
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     debugger;
    //     if (nextProps.match.params.universityId !== this.props.match.params.universityId) {
    //         const foundUniversity = this.state.university.find(university => university.universityId === nextProps.match.params.universityId);
    //         this.setState({
    //             foundUniversity
    //         });
    //     }
    // }
    //
    //
    // componentDidMount() {
    //     debugger;
    //     UniversityServices.getAllData()
    //         .then(response => {
    //             let university = response.data;
    //             if (university) {
    //                 this.setState({
    //                     university
    //                 });
    //                 //console.log(university);
    //             }
    //             const foundUniversity = this.state.university.find(() => university.universityId === this.props.match.params.universityId);
    //             //console.log(foundUniversity);
    //             this.setState({
    //                 foundUniversity
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    render() {
        let alo = this.props.allUniversity;
        // console.log(alo);
        return (
            <div>
                <div>
                    <div>
                        { /*<img src={ image } alt={ name }/>*/ }
                        <h1>aaaaaaaa</h1>
                        { alo.map(univer => <div>{ univer.name }</div>) }
                        { /*<p>Address: { info.address }</p>*/ }
                    </div>
                </div>
            </div>
        );
    }
}

export default SoloUniversity;