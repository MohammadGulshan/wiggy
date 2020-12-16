import React, {useState} from 'react';
import { Container, Button, Card, CardBody, CardText, CardGroup, CardTitle, CardLink, CardSubtitle } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid';

const AppCards = () => {
    const [state, setState] = useState({
        cards: [
            {id: uuid(), name: 'McDonalds'},
            {id: uuid(), name: 'KFC'},
            {id: uuid(), name: 'Domino\'s'},
            {id: uuid(), name: 'Pizza Hut'}
        ]
    });

    return (
        <div>
            <Container>
                <Button color="danger"
                    className="col-12"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Restaurant Name');
                        if (name) {
                            setState(state => ({
                                cards: [...state.cards, {id: uuid(), name: name}]
                            }))
                        }
                    }}
                >
                    ADD CARD
                </Button>

                <div className="row">
                    {state.cards.map((value, id) => {
                        return (
                            <div className="col-md-3 col-xs-12 mb-2">
                                <CardGroup className="col-12 p-0">
                                    <TransitionGroup className="cards">
                                        <CSSTransition key={id}
                                            timeout={500}
                                            classNames="fade"
                                        >
                                        <Card>
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    {value.name}
                                                </CardTitle>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">Available Now</CardSubtitle>
                                            </CardBody>
                                            <img width="100%" src="https://via.placeholder.com/150" alt="Card Image" />
                                            <CardBody>
                                                <CardText>Order Now for great value!</CardText>
                                                <CardLink href="#">Add to Cart</CardLink>
                                                <CardLink href="#">Save for later</CardLink>
                                            </CardBody>
                                        </Card>
                                        </CSSTransition>
                                    </TransitionGroup>
                                </CardGroup>
                            </div>
                        )
                    })}
                </div>
                
            </Container>
        </div>
    );
}

export default AppCards;