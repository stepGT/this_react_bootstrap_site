import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import Slider from './Components/Slider'
import Jumbotron from './Components/Jumbotron'

export const Home = () => {
    // Free placeholder images
    let arrImg = [
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=2',
        'https://loremflickr.com/320/240?random=3'
    ]

    const loremflickr = 'https://loremflickr.com/640/480?random=4'

    return (
        <>
            <Slider />
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row>
                    {
                        arrImg.map((img, i) =>
                            <Col key={i}>
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
            <Jumbotron />
            <Container>
                <Row>
                    <Col md={7}>
                        <img className="img" src={loremflickr} />
                    </Col>
                    <Col md={5}>
                        <h2>stepGT channel</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Eaque culpa repudiandae laboriosam
                        illum sit doloribus qui. Eos earum adipisci
                        reprehenderit quisquam velit animi accusamus
                        labore voluptatum unde voluptates.
                            Necessitatibus, nostrum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Eaque culpa repudiandae laboriosam
                        illum sit doloribus qui. Eos earum adipisci
                        reprehenderit quisquam velit animi accusamus
                        labore voluptatum unde voluptates.
                            Necessitatibus, nostrum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Eaque culpa repudiandae laboriosam
                        illum sit doloribus qui. Eos earum adipisci
                        reprehenderit quisquam velit animi accusamus
                        labore voluptatum unde voluptates.
                            Necessitatibus, nostrum.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}