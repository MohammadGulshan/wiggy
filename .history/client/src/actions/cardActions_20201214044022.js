import axios from 'axios';
import { GET_CARDS, ADD_CARDS, DELETE_CARD, CARDS_LOADING } from './types';

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

export const setCardsLoading = () => {
    return {
        type: CARDS_LOADING
    }
}