import { useState } from "react"
import { Button } from "reactstrap"
import AppChild3 from "./AppChild3"
const App3 = () => {
    const [isModalOpen, setModal] = useState(false)
    const [user, setUser] = useState({})
    const [dataList, addUser] = useState([])
    const toggleModal = () => {
        setModal(prevState => !prevState)
    }
    const handleChange = (e) => {
        setUser(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }
    const addUserList = () => {
        addUser(prevState => {
            return [
                ...prevState, user
            ]
        })
        toggleModal()
        setUser({})
    }

    return (
        <>
            <Button color="success" onClick={toggleModal}>open</Button>
            <AppChild3 toggleModal={toggleModal} isModalOpen={isModalOpen} handleChange={handleChange}
                user={user} addUserList={addUserList} dataList={dataList} />
        </>
    )
}
export default App3