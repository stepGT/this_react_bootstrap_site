import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Slider() {
    // Free placeholder images
    let arrImg = [
        'https://loremflickr.com/1280/720?random=1',
        'https://loremflickr.com/1280/720?random=2',
        'https://loremflickr.com/1280/720?random=3'
    ]

    return (
        <Carousel wrap={false} onSlide={() => {}} indicators={true} fade={true}>
            {
                arrImg.map((img, i) =>
                    <Carousel.Item key={i}>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{++i} slide label</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    )
}