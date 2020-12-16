import React from 'react';
import { Container, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid';
import App from '../App';

const AppCards = () => {
    let state = {
        cards: [
            {id: uuid(), name: 'McDonalds'},
            {id: uuid(), name: 'KFC'},
            {id: uuid(), name: 'Domino\'s'},
            {id: uuid(), name: 'Pizza Hut'}
        ]
    }

    return (
        <div>
            <Container>
                <Button color="danger"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Restaurant Name');
                        if (name) {
                            this.setState(state => ({
                                cards: [...state.cards, {id: uuid(), name}]
                            }))
                        }
                    }}
                >
                    ADD CARD
                </Button>
            </Container>
        </div>
    );
}

export default AppCards;