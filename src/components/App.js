import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

class App extends React.Component {

    state = {
        pageHeader: 'Naming Contests',
        contests: []
    };
    //components life cycle

    //put it on the page == mount
    componentDidMount() {
        //timers, listeners
        this.setState({
            contests: data.contests
        });
    }

    //remove the html elements from the page == unmount
    componentWillUnmount() {
        //clean timers, listeners
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;
