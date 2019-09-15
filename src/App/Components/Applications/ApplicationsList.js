import React, {Component} from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import {connect} from 'react-redux'
import {fetchApplications} from "../../Redux/Actions/ApplicationActions";
import {setFilteringParams, resetFilteringParams} from "../../Redux/Actions/FilterActions";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import {isEmpty} from "../../../Lib/Utils";
import _orderBy from 'lodash/orderBy'
import {filteringFields} from "../../../Lib/Keys";
import Alert from 'react-bootstrap/Alert'
import LoadingBar from "../Layout/LoadingBar";

class ApplicationsList extends Component {

    componentDidMount() {
        this.props.fetchApplications()
    }

    resetFilters = () => {
        this.props.resetFilteringParams();
    };

    setFilteringParams = (filteringPrams) => {
        this.props.setFilteringParams(filteringPrams)
    };

    getFilteredApplications = () => {
        const {applications} = this.props;
        const {filteringParams} = this.props;
        const orderOrientations = Object.keys(filteringParams).map((key) => filteringParams[key]);
        return _orderBy(applications, Object.keys(filteringParams), orderOrientations)
            .filter((item) => item.name.toLowerCase().includes((filteringParams.searchQuery || '').toLowerCase()))
            .filter((item) => {
                if (['asc', 'desc'].includes(filteringParams.position_applied)) {
                    return true
                }
                return item.position_applied.includes(filteringParams.position_applied || '')
            })
            .filter((item) => {
                if (['asc', 'desc'].includes(filteringParams.status)) {
                    return true
                }
                return item.status.includes(filteringParams.status || '')
            })
    };

    render() {
        const {filteringParams, loading, error, errorPayload} = this.props;
        const filteredApplications = this.getFilteredApplications();
        return (
            <>
                <Row>
                    <Col md={6}>
                        {loading ?
                            <p>
                                Loading data. Please wait...
                            </p>
                            :
                            <p>
                                Showing {filteredApplications.length} of {this.props.applications.length} application
                            </p>
                        }

                    </Col>
                    <Col md={6}>
                        <Button disabled={(isEmpty(filteringParams))}
                                onClick={this.resetFilters}
                                className='float-right my-2'>
                            Reset Filters
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <LoadingBar loading={loading}/>
                    </Col>
                    <Col md={12}>
                        <Table striped size="sm">
                            <TableHeader
                                selectedOptions={filteringParams}
                                setFilteringParams={(filteringPrams) => this.setFilteringParams(filteringPrams)}
                                filteringFields={filteringFields}
                            />
                            <tbody>
                            {filteredApplications.map((application) =>
                                <TableRow
                                    setFilteringParams={(filteringPrams) => this.setFilteringParams(filteringPrams)}
                                    key={application.id}
                                    row={application}
                                />)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {error &&
                <Row>
                    <Col md={6}>
                        <Alert variant='danger'>
                            {errorPayload.message}
                            <br/>
                            <Alert.Link href="" onClick={this.props.fetchApplications}>Try again</Alert.Link>
                        </Alert>
                    </Col>
                </Row>
                }
            </>
        )
    }
}

const mapStateToProps = ({applications, filters}) => {
    return {
        errorPayload: applications.errorPayload,
        error: applications.error,
        loading: applications.loading,
        applications: applications.applications,
        filteringParams: filters.filteringParams
    }
};


export default connect(mapStateToProps, {fetchApplications, setFilteringParams, resetFilteringParams})(ApplicationsList)