import React from 'react';

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
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.universityId !== this.props.match.params.universityId) {
            const foundUniversity = this.props.allUniversity.find(university => university.universityId == nextProps.match.params.universityId);
            this.setState({
                foundUniversity
            });
        }
    }

    //
    // componentDidMount() {
    //     // debugger;
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
        const { name, info, image } = this.state.foundUniversity;
        return (
            <div>
                <div>
                    <div className="soloUniversity">
                        <h1>{ name }</h1>
                        <img src={ image }/>
                        <p>Address: { info.address }</p>
                        <p>Established: { info.established }</p>
                        <p>President: { info.president }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SoloUniversity;