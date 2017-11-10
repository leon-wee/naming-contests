import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {

    state = {
        pageHeader: 'Naming Contests'
    };
    //components life cycle

    //put it on the page == mount
    componentDidMount() {
        console.log('did Mount');
        //timers, listeners
    }

    //remove the html elements from the page == unmount
    componentWillUnmount() {
        console.log('will Unmount');
        //clean timers, listeners
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.props.contests.map(contest => 
                        <ContestPreview {...contest} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;
