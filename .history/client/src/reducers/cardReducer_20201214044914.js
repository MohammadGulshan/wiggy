// import {v1 as uuid} from 'uuid';
import { GET_CARDS, ADD_CARDS, DELETE_CARD, CARDS_LOADING } from '../actions/types';

const initialState = {
    cards: [],
    loading: false
};

const expFunc = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARDS: 
            return {
                ...state,
                cards: action.payload,
                loading: false
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
        case CARDS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}

export default expFunc;
