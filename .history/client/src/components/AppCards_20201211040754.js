import React, {useState} from 'react';
import { Container, Button, Card, CardBody, CardText, CardGroup, CardTitle } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid';
import App from '../App';

const AppCards = () => {
    const [state, setState] = useState({
        cards: [
            {id: uuid(), name: 'McDonalds'},
            {id: uuid(), name: 'KFC'},
            {id: uuid(), name: 'Domino\'s'},
            {id: uuid(), name: 'Pizza Hut'}
        ]
    });
    const x = [1,2,4]

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
                <CardGroup>
                    <TransitionGroup className="cards">
                        {state.cards.map((id, value) => {
                            return (
                                // <CSSTransition key={id}
                                //     timeout={500}
                                //     classNames="fade"
                                // >
                                    <Card>
                                        <CardBody>
                                            <CardTitle>
                                                <Button close />
                                            </CardTitle>
                                            <CardText>
                                                {value}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                // </CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </CardGroup>
            </Container>
        </div>
    );
}

export default AppCards;