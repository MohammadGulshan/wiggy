import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import App from '../App';

class AppCards extends Component {
    state = {
        cards: [
            {id: uuid(), name: 'McDonalds'},
            {id: uuid(), name: 'KFC'},
            {id: uuid(), name: 'Domino\'s'},
            {id: uuid(), name: 'Pizza Hut'}
        ]
    }

    render() {
        return (
            <div>
    
            </div>
        );
    }
}

export default AppCards;