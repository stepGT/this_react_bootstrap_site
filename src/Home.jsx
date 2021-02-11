import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import Slider from './Components/Slider'

export const Home = () => {
    // Free placeholder images
    let arrImg = [
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=2',
        'https://loremflickr.com/320/240?random=3'
    ]
    return (
        <>
            <Slider />
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row>
                    {
                        arrImg.map(img =>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    )
}