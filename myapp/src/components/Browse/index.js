import React, { Component } from 'react';

class Browse extends Component {
    constructor(props) {
        super(props);
        this.fetchActivitiesByGenre = this.fetchActivitiesByGenre.bind(this);
    }

    render() {
        return (
            <p>some text here</p>
        );
    }
}
export default Browse;
