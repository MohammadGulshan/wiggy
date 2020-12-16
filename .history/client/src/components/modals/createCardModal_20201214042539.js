import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cardActions'
import {v1 as uuid} from 'uuid';

const CreateCardModal = (card) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [state, setState] = useState({
        restName: ''
    });

    const onChange = e => {
        setState({ [e.target.name]: e.target.value })
        console.log(e, '--', state);
    }

    const onSubmit = e => {
        e.preventDefault();

        const newCard = {
            id: uuid(),
            name: state.restName
        }

        //Add card via addCard action
        card.addCard(newCard);

        //Close modal
        toggle();
    }

    return (
        <div>
            <Button color="warning" onClick={toggle} className="mb-5">Add New Card</Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Restaurant Name</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="card">
                                Restaurant Name
                            </Label>
                            <Input 
                                type="text"
                                name="restName"
                                id="card"
                                placeholder="Enter Restaurant Name"
                                onChange={onChange}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={onSubmit}>Add Card</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => ({
    card: state.cards
})

export default connect(mapStateToProps, { addCard })(CreateCardModal)
