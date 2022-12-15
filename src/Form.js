import { useState } from "react"
import { Button } from "reactstrap"
import FormChild from "./FormChild"
import FormTable from "./FormTable"
const Form = () => {
    const [person, setPerson] = useState({})
    const [userList, setUser] = useState([])
    const [isModalOpen, setModal] = useState(false)
    const toggleModal = () => {
        setModal(prevState => !prevState)
    }
    const handleChange = (e) => {
        setPerson(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }
    const addOrUpdatePersonToList = () => {
        if (person.indexItem > -1) {
            const personList = userList;
            userList[person.indexItem] = person
            setUser(personList)
        }
        else {
            setUser(prevState => {
                return [
                    ...prevState,
                    person
                ]
            })
        }
        toggleModal()
        setPerson({})
    }

    const editPerson = (index) => {
        const copypersonObj = userList[index]
        setPerson({ ...copypersonObj, indexItem: index })
        toggleModal()
    }
    const delPerson = (inx) => {
        const copyPersonList = [...userList]
        copyPersonList.splice(inx, 1)
        setUser(copyPersonList)
    }
    return (
        <>
            <Button color="warning" onClick={toggleModal}>open</Button>
            <FormChild isModalOpen={isModalOpen} handleChange={handleChange}
                person={person} toggleModal={toggleModal} addOrUpdatePersonToList={addOrUpdatePersonToList} />
            <FormTable editPerson={editPerson} delPerson={delPerson} userList={userList} />


        </>
    )
}

export default Form;





