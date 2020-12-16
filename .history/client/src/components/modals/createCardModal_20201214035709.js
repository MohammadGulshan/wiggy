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
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Add Card</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default connect()(CreateCardModal)
