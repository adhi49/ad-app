
import { Button, ModalBody, ModalFooter, ModalHeader, Input, Modal } from "reactstrap";
const AppChild3 = (props) => {
    const { isModalOpen, addUserList, toggleModal, dataList, handleChange } = props
    return (
        <>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>
                    employ Form
                </ModalHeader>
                <ModalBody>
                    <Input
                        name="employName"
                        placeholder="enter name"
                        onChange={(event) => handleChange(event)} />
                    <Input
                        name="gender"
                        placeholder="enter here"
                        onChange={(event) => handleChange(event)} />
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={addUserList}>Add</Button>
                    <Button color="warning" onClick={toggleModal}>close</Button>
                </ModalFooter>
            </Modal>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>Employ Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((el, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{el.employName}</td>
                                <td>{el.gender}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default AppChild3