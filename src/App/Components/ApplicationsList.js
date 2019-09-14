import React, {Component} from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import {connect} from 'react-redux'
import {fetchApplications} from "../Redux/Actions/ApplicationActions";
import {setOrderBy, resetFilterBy, resetOrderBy} from "../Redux/Actions/FilterActions";
import TableRow from "./Layout/TableRow";
import TableHeader from "./Layout/TableHeader";
import Button from "react-bootstrap/Button";
import {isEmpty} from "../../Lib/Utils";
import _orderBy from 'lodash/orderBy'

const orderByFields = {
    name: 'name',
    email: 'email',
    age: 'birth_date',
    years_of_experience: 'years_of_experience',
    application_date: 'application_date',

};

const filterByFields = {
    position: 'position_applied',
    status: 'status'
};

class ApplicationsList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchApplications()
    }

    resetClick = () => {
        this.props.resetOrderBy();
        this.props.resetFilterBy();
    };


    render() {

        const {applications} = this.props.applications;
        const {orderBy, filterBy} = this.props.filters;

        return (
            <>
                {(!isEmpty(orderBy) || !isEmpty(filterBy)) &&
                <Row>
                    <Col md={12}>
                        <Button onClick={this.resetClick} className='float-right my-2'>
                            Reset
                        </Button>
                    </Col>
                </Row>}
                <Row>
                    <Col md={12}>
                        <Table responsive>
                            <TableHeader
                                selectedOptions={orderBy}
                                orderBy={(orderParams) => this.props.setOrderBy(orderParams)}
                                orderByFields={orderByFields}
                                filterByFields={filterByFields}/>
                            <tbody>
                            {_orderBy(applications, Object.keys(orderBy), Object.keys(orderBy).map((key) => orderBy[key])).map((application) =>
                                <TableRow
                                    key={application.id}
                                    row={application}
                                    orderByFileds={orderByFields}
                                    filterByFields={filterByFields}/>)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = ({applications, filters}) => {
    return {applications, filters}
};


export default connect(mapStateToProps, {fetchApplications, setOrderBy, resetFilterBy, resetOrderBy})(ApplicationsList)