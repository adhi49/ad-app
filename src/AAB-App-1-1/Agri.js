import { useState } from "react";
import AgriForm from "./AgriForm";
import AgriTable from "./AgriTable";
import { Button } from "reactstrap";
import "./Agri.css"
const Agri = () => {
    const [isModalOpen, setModal] = useState(false)
    const [client, setClient] = useState({})
    const [userList, addClient] = useState([])
    const toggleModal = () => {
        setModal(prevState => !prevState)
    }
    const handleChange = (e) => {
        setClient(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }
    const addClientNameToList = () => {
        if (client.IndexItem > -1) {
            const clientList = userList;
            userList[client.IndexItem] = client
            addClient(clientList)
        } else {
            addClient(prevState => (
                [
                    ...prevState,
                    client
                ]
            ))
        }
        toggleModal()
        setClient({})
    }

    const editClient = (index) => {
        const copyClient = userList[index]
        setClient({ ...copyClient, IndexItem: index })
        toggleModal()
    }
    const delClient = (inx) => {
        const copyClientList = [...userList]
        copyClientList.splice(inx, 1)
        addClient(copyClientList)
    }
    return (
        <>
            <Button Color="info" onClick={toggleModal}>Add Client</Button>

            <AgriForm isModalOpen={isModalOpen} handleChange={handleChange} client={client} toggleModal={toggleModal} addClientNameToList={addClientNameToList} />
            <AgriTable editClient={editClient} userList={userList} delClient={delClient} />
        </>
    )
}
export default Agri;