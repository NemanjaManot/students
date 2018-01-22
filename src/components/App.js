import React from 'react';
import Router from './Router';
import Header from './Header/Header';

class App extends React.Component {
    render() {

        return (
            <div>
                <Header/>
                <Router/>
            </div>
        );
    }
}

export default App;