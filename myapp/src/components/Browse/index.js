import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import * as requestTypes from '../../constants/requestTypes';

class Browse extends Component {
     componentDidMount() {
         console.log("compountdidmount");
        const { setSelectedGenre, match } = this.props;
        setSelectedGenre(match.params.genre);
        if (!this.needToFetchActivities()) {
            return;
        }
        this.fetchActivitiesByGenre();
    }

    componentWillReceiveProps(nextProps) {
        const curGenre = this.props.match.params.genre;
        const nextGenre = nextProps.match.params.genre;
        const { setSelectedGenre } = this.props;
        if (curGenre !== nextGenre) {
            console.log("--------------->>", nextGenre);
          setSelectedGenre(nextGenre);
        }
        console.log("sssssss", nextProps);
    }

    componentDidUpdate() {
        if (!this.needToFetchActivities()) { return; }
        this.fetchActivitiesByGenre();
    }

    componentWillUnmount() {
        const { setSelectedGenre } = this.props;
        setSelectedGenre(null);
    }

    needToFetchActivities = () => {
        const { match, browseActivities } = this.props;
        const genre = match.params.genre;
        return !browseActivities[genre] || browseActivities[genre].length < 20;
    }

    fetchActivitiesByGenre = () => {
        const { match, paginateLinks, requestInProcess } = this.props;
        const genre = match.params.genre;
        const nextHref = paginateLinks[genre];
        if (requestInProcess) { return; }
        this.props.requestInProcess(true, requestTypes.GENRES);
        this.props.fetchActivitiesByGenre(nextHref, genre);
    }

    render() {
        const {
            browseActivities, match, requestsInProcess, trackEntities,
            activeFilter, activeSort, activeDateSort
        } = this.props;
        const { genre } = match.params.genre;
        return (
            <div className="browse">
            <p>Browse</p>
                {/* <StreamInteractions />
                <Activities
                    isLoading={requestsInProcess[requestTypes.GENRES] && !browseActivities[genre]}
                    ids={browseActivities[genre]}
                    entities={trackEntities}
                    activeFilter={activeFilter}
                    activeSort={activeSort}
                    activeDateSort={activeDateSort}
                    scrollFunction={this.fetchActivitiesByGenre}
                /> */}
                {/* <LoadingSpinner isLoading={!!(requestsInProcess[requestTypes.GENRES] && browseActivities[genre])} /> */}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        browseActivities: state.browse,
        paginateLinks: state.paginate,
        requestInProcess: state.requestInProcess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedGenre: bindActionCreators(actions.setSelectedGenre, dispatch),
        fetchActivitiesByGenre: bindActionCreators(actions.fetchActivitiesByGenre, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
