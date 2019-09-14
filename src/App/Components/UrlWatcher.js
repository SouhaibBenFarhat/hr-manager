import React, {Component} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as queryString from 'query-string';
import {setOrderBy} from "../Redux/Actions/FilterActions";

class UrlWatcher extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.history.location.search);
        this.props.setOrderBy(parsed);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.filters.orderBy !== this.props.filters.orderBy) {
            this.props.history.push({
                search: new URLSearchParams(this.props.filters.orderBy).toString()
            })
        }
    }

    render() {
        return null
    }

}

const mapStateToProps = ({filters}) => ({
    filters
});

export default withRouter(connect(mapStateToProps, {setOrderBy})(UrlWatcher))