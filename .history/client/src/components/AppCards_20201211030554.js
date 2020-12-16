import React from 'react';
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
                Card1
            </Container>
        </div>
    );
}

export default AppCards;