import React, {Component} from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import {connect} from 'react-redux'
import {fetchApplications} from "../Redux/Actions/ApplicationActions";
import {setFilteringParams, resetFilteringParams} from "../Redux/Actions/FilterActions";
import TableRow from "./Layout/TableRow";
import TableHeader from "./Layout/TableHeader";
import Button from "react-bootstrap/Button";
import {isEmpty} from "../../Lib/Utils";
import _orderBy from 'lodash/orderBy'

const filteringFields = {
    name: 'name',
    email: 'email',
    birth_date: 'age',
    year_of_experience: 'year_of_experience',
    application_date: 'application_date',
    position_applied: 'position',
    status: 'status'
};

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
            .filter((item) => item.name.includes(filteringParams.searchQuery || ''))
            .filter((item) => item.position_applied.includes(filteringParams.position_applied || ''))
            .filter((item) => item.status.includes(filteringParams.status || ''))
    };

    render() {
        const {filteringParams} = this.props;

        return (
            <>
                <Row>
                    <Col md={12}>
                        <Button disabled={(isEmpty(filteringParams))}
                                onClick={this.resetFilters}
                                className='float-right my-2'>
                            Reset Filters
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table responsive>
                            <TableHeader
                                selectedOptions={filteringParams}
                                setFilteringParams={(filteringPrams) => this.setFilteringParams(filteringPrams)}
                                filteringFields={filteringFields}
                            />
                            <tbody>
                            {this.getFilteredApplications().map((application) =>
                                <TableRow
                                    key={application.id}
                                    row={application}
                                />)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = ({applications, filters}) => {
    return {
        applications: applications.applications,
        filteringParams: filters.filteringParams
    }
};


export default connect(mapStateToProps, {fetchApplications, setFilteringParams, resetFilteringParams})(ApplicationsList)