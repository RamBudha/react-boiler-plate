import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
      const { isAuthInProgress, isAuthed } = this.props;
    //   if (isAuthInProgress) {
    //     return null;
    //   }
    //   if (!isAuthed) {
    //     return <Redirect to="/" />;
    //   }
      return (
        <div>
        <div className="dashboard">
          <div className="dashboard-main">
          <p>Hello world</p>
            {/* <StreamActivities /> */}
          </div>
        </div>
          <div className="dashboard-side">
            {/* <FollowingsList />
            <FollowersList />
            <FavoritesList /> */}
          </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    // isAuthed: Boolean(state.session.session),
    // isAuthInProgress: state.request[requestTypes.AUTH],
  });

  export default connect(mapStateToProps)(Dashboard);
