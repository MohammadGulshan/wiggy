import { GET_CARDS, ADD_CARDS, DELETE_CARD } from './types';

export const getCards = () => {
    return {
        type: GET_CARDS
    };
}

export const deleteCard = id => {
    console.log('reached deletecard action')
    return {
        type: DELETE_CARD,
        payload: id
    };
}