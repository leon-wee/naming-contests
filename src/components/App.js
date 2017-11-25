import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

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
