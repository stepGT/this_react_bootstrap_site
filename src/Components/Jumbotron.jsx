import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'

const loremflickr = 'https://loremflickr.com/1280/720'

const Styled = styled.div`
    .jumbo {
        background: url(${loremflickr}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2
    }
    .overlay {
        background-color: #000;
        opacity: .6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`

const Jumbotron = () => (
    <Styled>
        <Jumbo as={'section'} fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Fluid jumbotron</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quidem vel saepe doloribus voluptas distinctio id
                recusandae amet nam. Odio nemo libero officiis provident
                quos nobis quisquam dolorem ex nihil mollitia.</p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quidem vel saepe doloribus voluptas distinctio id
                recusandae amet nam. Odio nemo libero officiis provident
                quos nobis quisquam dolorem ex nihil mollitia.</p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quidem vel saepe doloribus voluptas distinctio id
                recusandae amet nam. Odio nemo libero officiis provident
                quos nobis quisquam dolorem ex nihil mollitia.</p>
            </Container>
        </Jumbo>
    </Styled>
)

export default Jumbotron