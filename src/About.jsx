import React from 'react'
import { Container, Row, Col, Tabs, Tab, Form, Button, ButtonGroup, Accordion, Card } from 'react-bootstrap'

export const About = () => (
    <Container>
        <Row>
            <Col>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="0">Click me!
                        </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle
                                        as={Button}
                                        variant="link"
                                        eventKey="1">
                                        Click me!
                        </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Tab>

                    <Tab eventKey="profile" title="Profile">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae voluptatibus id eum deserunt maxime commodi
                        totam cupiditate illo, quos consequuntur quam accusamus
                        sit labore magni sapiente quis officiis temporibus minima?
            </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae voluptatibus id eum deserunt maxime commodi
                        totam cupiditate illo, quos consequuntur quam accusamus
                        sit labore magni sapiente quis officiis temporibus minima?
            </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae voluptatibus id eum deserunt maxime commodi
                        totam cupiditate illo, quos consequuntur quam accusamus
                        sit labore magni sapiente quis officiis temporibus minima?
            </p>
                    </Tab>

                    <Tab eventKey="contact" title="Contact">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Example multiple select</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Tab>

                    <Tab eventKey="buttongroup" title="ButtonGroup">
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">Left</Button>
                            <Button variant="secondary">Middle</Button>
                            <Button variant="secondary">Right</Button>
                        </ButtonGroup>
                    </Tab>
                </Tabs></Col>
        </Row>
    </Container>

)