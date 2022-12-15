import React from "react";
import { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap"
const App = () => {
    const [name, setName] = useState({})
    const [userList, addUser] = useState([])
    const handleChange = (e) => {
        setName((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    const addorUpdateList = () => {
        if (name.indexItem > -1) {
            const nameList = userList;
            userList[name.indexItem] = name
            addUser(nameList)
        } else {
            addUser(prevState => {
                return [
                    ...prevState,
                    name
                ]
            })
        }
        setName({})
    }
    const editName = (index) => {
        const copyNameobj = userList[index]
        setName({ ...copyNameobj, indexItem: index })
    }
    const delName = (inx) => {
        const copyNameList = [...userList]
        copyNameList.splice(inx, 1)
        addUser(copyNameList)
    }
    return (
        <>
            <FormGroup>
                <Label>User Name</Label>
                <Input
                    name="userName"
                    placeholder="enter name"
                    onChange={(e) => handleChange(e)}
                    value={name.userName || ""} />
            </FormGroup>
            <FormGroup>
                <Label>password</Label>
                <Input
                    name="password"
                    placeholder="eSt2K"
                    onChange={(e) => handleChange(e)}
                    value={name.password || ""} />
            </FormGroup>
            <Button onClick={addorUpdateList}>Add</Button>
            <table className="table table-boardered m-3">
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>User Name</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((el, i) => {
                        return (

                            <tr>
                                <td>{i + 1}</td>
                                <td> {el.userName}</td>
                                <td> {el.password}</td>
                                <td><Button color="info" onClick={() => editName(i)}> edit</Button></td>
                                <td>  <Button color="warning" onClick={() => delName(i)}> delete</Button></td>

                            </tr>

                        )

                    })}

                </tbody>
            </table>


        </>
    )
}
export default App