import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';

const CreateCardModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="warning" onClick={toggle}>Add New Card</Button>
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
                                name=""
                                id="card"
                                placeholder="Enter Restaurant Name"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Add Card</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default connect()(CreateCardModal)
