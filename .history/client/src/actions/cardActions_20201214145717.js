import axios from 'axios';
import { GET_CARDS, ADD_CARDS, DELETE_CARD, CARDS_LOADING } from './types';

export const getCards = () => dispatch => {
    dispatch(setCardsLoading());
    axios
        .get('/api/items')
            .then(res => {
                dispatch({
                    type: GET_CARDS,
                    payload: res.data
                })
            })
}

export const addCard = card => dispatch => {
    axios
        .post('/api/items', item)
            .then(res => {
                dispatch({
                    type: ADD_CARDS,
                    payload: res.data
                })
            })
    
    // return {
    //     type: ADD_CARDS,
    //     payload: card
    // };
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