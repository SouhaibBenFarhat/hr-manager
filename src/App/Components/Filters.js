import React, {Component} from 'react'
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class Filters extends Component {

    render() {
        return (
            <>
                <Row>
                    <Col md={6}>
                        <Jumbotron>
                            <h3>Candidates</h3>
                            <p>
                                Below you can find the list of all the applications.
                            </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>


                {/*<Row>*/}
                {/*    <Col>Name</Col>*/}
                {/*    <Col>Email</Col>*/}
                {/*    <Col>Age</Col>*/}
                {/*    <Col className='text-nowrap'>Years of Experience</Col>*/}
                {/*    <Col className='text-nowrap'>Application Date</Col>*/}
                {/*    <Col className='text-nowrap'>*/}
                {/*        <DropdownButton*/}
                {/*            title='Position'*/}
                {/*            variant='primary'>*/}
                {/*            {this.props.filters.positions.map((position, index) => {*/}
                {/*                return (*/}
                {/*                    <Dropdown.Item*/}
                {/*                        key={position}*/}
                {/*                        eventKey={index}>*/}
                {/*                        {position}*/}
                {/*                    </Dropdown.Item>*/}
                {/*                )*/}
                {/*            })}*/}
                {/*            <Dropdown.Divider/>*/}
                {/*            <Dropdown.Item eventKey="4">All</Dropdown.Item>*/}
                {/*        </DropdownButton>*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <DropdownButton*/}
                {/*            title='Status'*/}
                {/*            variant='primary'>*/}
                {/*            {this.props.filters.statuses.map((status, index) => {*/}
                {/*                return (*/}
                {/*                    <Dropdown.Item*/}
                {/*                        key={status}*/}
                {/*                        eventKey={index}>*/}
                {/*                        {status}*/}
                {/*                    </Dropdown.Item>*/}
                {/*                )*/}
                {/*            })}*/}
                {/*            <Dropdown.Divider/>*/}
                {/*            <Dropdown.Item eventKey="4">All</Dropdown.Item>*/}
                {/*        </DropdownButton>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </>
        )
    }

}

export default Filters