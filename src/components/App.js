import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

class App extends React.Component {

    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    //components life cycle

    //put it on the page == mount
    componentDidMount() {

    }

    //remove the html elements from the page == unmount
    componentWillUnmount() {
        //clean timers, listeners
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <ContestList contests={this.state.contests}/>
            </div>
        );
    }
}

export default App;
