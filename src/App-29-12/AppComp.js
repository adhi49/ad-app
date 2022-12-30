import React, { useState } from "react";
import { Button } from "reactstrap";
import AppForm from "./AppForm";
import AppTable from "./AppTable";
const AppComp = () => {
    const [flower, setFlower] = useState({})
    const [dataList, addFlower] = useState([])
    const [isModalOpen, setModal] = useState(false)
    const toggleModal = () => {
        setModal(prevState => !prevState)
    }
    const handleChange = (e) => {
        setFlower(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const addFlowerList = () => {
        if (flower.indexItem > -1) {
            const flowerList = dataList;
            flowerList[flower.indexItem] = flower
            addFlower(flowerList)
        } else {
            addFlower(prevState => {
                return [
                    ...prevState,
                    flower
                ]
            })
        }
        setFlower({})
        toggleModal()


    }
    const editFlower = (index) => {
        const copyDataList = dataList[index]
        setFlower({ ...copyDataList, indexItem: index })
        toggleModal()
    }
    const delFlower = (inx) => {
        const copyFlowerList = [...dataList]
        copyFlowerList.splice(inx, 1)
        addFlower(copyFlowerList)
    }
    return (
        <>
            <Button onClick={toggleModal}>open</Button>
            <AppForm flower={flower} handleChange={handleChange} addFlowerList={addFlowerList}
                toggleModal={toggleModal} isModalOpen={isModalOpen} />
            <AppTable dataList={dataList} editFlower={editFlower} delFlower={delFlower} />


        </>
    )
}
export default AppComp;