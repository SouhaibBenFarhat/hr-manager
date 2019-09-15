import React, {Component} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as queryString from 'query-string';
import {setFilteringParams} from "../Redux/Actions/FilterActions";
import {removeKeysWithFalsyValues} from "../../Lib/Utils";

class UrlWatcher extends Component {

    componentDidMount() {
        const parsed = queryString.parse(this.props.history.location.search);
        this.props.setFilteringParams(parsed);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.filteringParams !== this.props.filteringParams) {
            this.props.history.push({
                search: new URLSearchParams(removeKeysWithFalsyValues(this.props.filteringParams)).toString()
            });
        }
    }

    render() {
        return <></>
    }
}

const mapStateToProps = ({filters}) => ({
    filteringParams: filters.filteringParams
});

export default withRouter(connect(mapStateToProps, {setFilteringParams})(UrlWatcher))