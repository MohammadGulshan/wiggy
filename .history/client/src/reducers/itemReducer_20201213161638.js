import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';

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
        case GET_ITEMS: 
            return {
                ...state
            };
        default: return state;
    }
}