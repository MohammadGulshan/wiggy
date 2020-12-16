import uuid from 'uuid';
import { GET_CARDS, ADD_CARDS, DELETE_CARD } from '../actions/types';

const initialState = {
    cards: [
        {id: uuid(), name: 'McDonalds'},
        {id: uuid(), name: 'KFC'},
        {id: uuid(), name: 'Domino\'s'},
        {id: uuid(), name: 'Pizza Hut'}
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARDS: 
            return {
                ...state
            };
        default: return state;
    }
}