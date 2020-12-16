import { GET_CARDS, ADD_CARDS, DELETE_CARD } from './types';

export const getCards = () => {
    return {
        type: GET_CARDS
    };
}

export const addCard = card => {
    return {
        type: ADD_CARDS,
        payload: card
    };
}

export const deleteCard = id => {
    return {
        type: DELETE_CARD,
        payload: id
    };
}