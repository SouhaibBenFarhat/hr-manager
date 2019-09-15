import React, {Component} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as queryString from 'query-string';
import {setFilteringParams} from "../Redux/Actions/FilterActions";
import _ from 'lodash';

class UrlWatcher extends Component {

    componentDidMount() {
        const parsed = queryString.parse(this.props.history.location.search);
        this.props.setFilteringParams(parsed);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.filters.filteringParams !== this.props.filters.filteringParams) {
            this.props.history.push({
                search: new URLSearchParams(_.pickBy(this.props.filters.filteringParams, _.identity)).toString()
            })
        }
    }

    render() {
        return <></>
    }
}

const mapStateToProps = ({filters}) => ({
    filters
});

export default withRouter(connect(mapStateToProps, {setFilteringParams})(UrlWatcher))