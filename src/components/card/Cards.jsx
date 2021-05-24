import React from 'react'
import { Card } from 'react-bootstrap';
function Cards(props) {
    return (
        <div className="container">  
                <Card style={{ width: '18rem' }}>
                    <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt = "poster"/>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.overview}
                        </Card.Text>
                        <h2>{props.released}</h2>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Cards
