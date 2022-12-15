import React from "react"
import { Label, Input, FormGroup, Button, Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";

const FormChild = (props) => {
    const { handleChange, addOrUpdatePersonToList, person, isModalOpen, toggleModal } = props
    return (
        <>
            <div><Modal isOpen={isModalOpen}>
                <ModalHeader style={{ backgroundColor: "pink " }}>
                    Form
                </ModalHeader>
                <ModalBody style={{ backgroundColor: "lightblue" }}>
                    <FormGroup>
                        <Label>
                            User Name
                        </Label>
                        <Input
                            name="userName"
                            placeholder="enter name"
                            onChange={(e) => handleChange(e)}
                            value={person.userName || ""} />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Age
                        </Label>
                        <Input
                            name="age"
                            placeholder="enter age"
                            onChange={(e) => handleChange(e)}
                            value={person.age || ""} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter style={{ backgroundColor: "pink " }}>
                    <Button color="info" onClick={addOrUpdatePersonToList}> Add or Update</Button>
                    <Button color="primary" onClick={toggleModal}>close</Button>
                </ModalFooter>
            </Modal>
            </div>
        </>
    )
}

export default FormChild
