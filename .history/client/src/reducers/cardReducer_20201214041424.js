import {v1 as uuid} from 'uuid';
import { GET_CARDS, ADD_CARDS, DELETE_CARD } from '../actions/types';

const initialState = {
    cards: [
        {id: uuid(), name: 'McDonalds'},
        {id: uuid(), name: 'KFC'},
        {id: uuid(), name: 'Domino\'s'},
        {id: uuid(), name: 'Pizza Hut'}
    ]
};

const expFunc = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARDS: 
            return {
                ...state
            };
        case ADD_CARDS:
            return {
                ...state,
                cards: [...state.cards, action.payload]
            };
        case DELETE_CARD: 
            return {
                ...state,
                cards: state.cards.filter(v => v.id !== action.payload)
            };
        default: return state;
    }
}

export default expFunc;
