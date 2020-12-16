import { GET_CARDS, ADD_CARDS, DELETE_CARD } from './types';

export const getCards = () => {
    return {
        type: GET_CARDS
    };
}