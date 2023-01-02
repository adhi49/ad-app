import React from "react";
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
const AgriForm = (props) => {
    const { isModalOpen, handleChange, client, toggleModal, addClientNameToList } = props
    return (
        <>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>
                    Malanad Agro Store
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>
                            Client Name
                        </Label>
                        <Input
                            name="clientName"
                            placeholder="enter name"
                            onChange={(event) => handleChange(event)}
                            value={client.clientName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Phone Number
                        </Label>
                        <Input
                            name="phoneNumber"
                            placeholder="enter number"
                            onChange={(event) => handleChange(event)}
                            value={client.phoneNumber}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggleModal}>close</Button>
                    <Button color="info" onClick={addClientNameToList}>Save</Button>
                </ModalFooter>

            </Modal>

        </>
    )
}
export default AgriForm;