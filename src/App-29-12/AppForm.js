import React from "react";
import { FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const AppForm = (props) => {
    const { flower, handleChange, addFlowerList, toggleModal, isModalOpen } = props
    return (
        <>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>
                    Flower Data
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>
                            Flower Name
                        </Label>
                        <Input
                            name="flowerName"
                            placeholder="enter Flower"
                            onChange={(event) => handleChange(event)}
                            value={flower.flowerName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Species Name</Label>
                        <Input
                            name="speciesName"
                            placeholder="enter species"
                            onChange={(event) => handleChange(event)}
                            value={flower.speciesName}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleModal}>close</Button>
                    <Button onClick={addFlowerList}>save</Button>
                </ModalFooter>
            </Modal>

        </>
    )
}
export default AppForm;