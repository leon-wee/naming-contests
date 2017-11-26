import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => {
    window.history.pushState(obj, '', url);
};

const onPopState = handler => {
    window.onpopstate = handler;
}

class App extends React.Component {

    static propTypes = {
        initialData: PropTypes.object.isRequired
    }

    state = this.props.initialData;
    //components life cycle

    //put it on the page == mount
    componentDidMount() {
        onPopState((event) => {
            this.setState({
                currentContestId: (event.state || {}).currentContestId,
            })
        });
    }

    //remove the html elements from the page == unmount
    componentWillUnmount() {
        //clean timers, listeners
        onPopState(null);
    }

    fetchContestList = () => {
        pushState(
            { currentContestId: null},
            '/'
        );

        api.fetchContestList().then(contests => {
            this.setState({
                currentContestId: null,
                contests
            })
        });
    }

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );

        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest._id,
                contests: {
                    ...this.state.contests,
                    [contest._id]: contest
                }
            });
        });
    };

    fetchNames = (nameIds) => {

        if (nameIds.length === 0) {
            return;
        }

        api.fetchNames(nameIds).then(names => {
            this.setState({
                names
            });
        });
    }

    lookupName = (nameId) => {

        if (!this.state.names || !this.state.names[nameId]) {
            return {
                name: '...'
            };
        }

        return this.state.names[nameId];
    }

    pageHeader() {
        if (this.state.currentContestId) {
            return this.currentContest().contestName;
        }

        return 'Naming Contests';
    }

    currentContest() {
        return this.state.contests[this.state.currentContestId];
    }

    currentContent = () => {
        if (this.state.currentContestId) {
            return <Contest
                    contestListClick={this.fetchContestList}
                    fetchNames={this.fetchNames}
                    lookupName={this.lookupName}
                    {...this.currentContest()} />;
        }

        return <ContestList
                onContestClick={this.fetchContest}
                contests={this.state.contests} />;
    };

    render() {
        return (
            <div className="App">
                <Header message={this.pageHeader()}/>
                {this.currentContent()}
            </div>
        );
    }
}

export default App;
