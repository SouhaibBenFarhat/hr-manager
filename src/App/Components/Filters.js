import React, {Component} from 'react'
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import {connect} from 'react-redux';
import startCase from 'lodash/startCase'
import {setFilteringParams} from "../Redux/Actions/FilterActions";

class Filters extends Component {


    onNameChange = (event) => {
        this.props.setFilteringParams({searchQuery: event.target.value})
    };

    onPositionChange = (position) => {
        this.props.setFilteringParams({position_applied: position})

    };

    onStatusChange = (status) => {
        this.props.setFilteringParams({status: status})
    };

    render() {
        const {searchQuery} = this.props.filters.filteringParams;
        const {position_applied} = this.props.filters.filteringParams;
        const {status} = this.props.filters.filteringParams;

        return (
            <>
                <Row>
                    <Col md={6}>
                        <Jumbotron>
                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Name
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            type="text"
                                            value={searchQuery}
                                            placeholder="Search by name"
                                            onChange={this.onNameChange}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Position
                                    </Form.Label>
                                    <Col sm={10}>
                                        <DropdownButton
                                            onSelect={this.onPositionChange}
                                            title={startCase(position_applied) || 'Position'}
                                            variant='primary'>
                                            {this.props.filters.positions.map((position, index) => {
                                                return (
                                                    <Dropdown.Item
                                                        key={index}
                                                        eventKey={position}>
                                                        {position}
                                                    </Dropdown.Item>
                                                )
                                            })}
                                            <Dropdown.Divider/>
                                            <Dropdown.Item eventKey="">All</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                        Status
                                    </Form.Label>
                                    <Col sm={10}>
                                        <DropdownButton
                                            title={startCase(status) || 'Status'}
                                            onSelect={this.onStatusChange}
                                            variant='primary'>
                                            {this.props.filters.statuses.map((status, index) => {
                                                return (
                                                    <Dropdown.Item
                                                        key={index}
                                                        eventKey={status}>
                                                        {startCase(status)}
                                                    </Dropdown.Item>
                                                )
                                            })}
                                            <Dropdown.Divider/>
                                            <Dropdown.Item eventKey="">All</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </>
        )
    }

}

const mapStateToProps = ({filters}) => {
    return {filters}
};

export default connect(mapStateToProps, {setFilteringParams})(Filters)