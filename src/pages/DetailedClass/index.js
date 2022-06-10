// import PropTypes from 'prop-types'
import React, { useState } from "react"
import {
    Container,
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import { Link } from "react-router-dom"


const DetailedClass = props => {

    return (
        <div className="page-content">

            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <CardBody>
                                    <div>
                                        <h4 className="card-title mb-4">Upcoming</h4>
                                    </div>
                                    <div className="wid-peity mb-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div>
                                                    <p className="text-muted">Operating System</p>
                                                    <h5 className="mb-4">AI4021</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-4">
                                                    {/* <SparkLine /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wid-peity mb-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div>
                                                    <p className="text-muted">DBMS</p>
                                                    <h5 className="mb-4">AI4022</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-4">
                                                    {/* <SparkLine1 /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div>
                                                    <p className="text-muted">Machine Learning</p>
                                                    <h5>AI4023</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-4">
                                                    {/* <SparkLine /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={8}>
                            <Card className="text-white bg-primary">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer posuere erat a ante.
                                        </p>
                                        <footer className="blockquote-footer text-white font-12 m-0">
                                            Someone famous in{" "}
                                            <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        </div>
    )
}

export default DetailedClass;