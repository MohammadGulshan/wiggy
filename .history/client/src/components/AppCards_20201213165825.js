import React, {useState, useEffect} from 'react';
import { Container, Button, Card, CardBody, CardText, CardGroup, CardTitle, CardLink, CardSubtitle } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid';

import { connect } from 'react-redux';
import { getCards } from '../actions/cardActions';

import PropTypes from 'prop-types';

const AppCards = () => {

    const [state, setState] = useState({
        cards: [
            {id: uuid(), name: 'McDonalds'},
            {id: uuid(), name: 'KFC'},
            {id: uuid(), name: 'Domino\'s'},
            {id: uuid(), name: 'Pizza Hut'}
        ]
    });

    useEffect(() => {
        state.getCards();
        console.log('mount it!');
    }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour


    return (
        <div>
            <Container>
                <Button color="danger"
                    className="col-12"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Restaurant Name');
                        if (name) {
                            setState(state => ({
                                cards: [...state.cards, {id: uuid(), name: name}]
                            }))
                        }
                    }}
                >
                    ADD CARD
                </Button>

                <div className="row">
                    {state.cards.map((value, id) => {
                        return (
                            <div className="col-md-3 col-xs-12 mb-3">
                                <CardGroup className="col-12 p-0">
                                    <TransitionGroup className="cards">
                                        <CSSTransition key={id}
                                            timeout={500}
                                            classNames="fade"
                                        >
                                        <Card>
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    {value.name}
                                                    <Button color="dark" 
                                                        className="float-right" 
                                                        size="sm"
                                                        onClick={() => {
                                                            setState(state => ({
                                                                cards: state.cards.filter(item => item.id !== value.id)
                                                            }));
                                                        }}
                                                    >
                                                        X
                                                    </Button>
                                                </CardTitle>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">Available Now</CardSubtitle>
                                            </CardBody>
                                            <img width="100%" src="https://via.placeholder.com/150" alt="Card" />
                                            <CardBody>
                                                <CardText>Order Now for great value!</CardText>
                                                <CardLink href="#">Add to Cart</CardLink>
                                                <CardLink href="#">Save for later</CardLink>
                                            </CardBody>
                                        </Card>
                                        </CSSTransition>
                                    </TransitionGroup>
                                </CardGroup>
                            </div>
                        )
                    })}
                </div>
                
            </Container>
        </div>
    );
}

AppCards.propTypes = {
    getCards: PropTypes.func.isRequired,
    cards: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    cards: state.cards
});

export default connect(mapStateToProps, { getCards })(AppCards);