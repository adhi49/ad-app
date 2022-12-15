import React from "react"
import { Button } from "reactstrap"
const FormTable = (props) => {
    console.log(props)
    const { editPerson, delPerson, userList } = props
    return (
        <>
            <table className="table table- bordered m-3">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((el, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{el.userName}</td>
                                <td>{el.age}</td>
                                <td><Button color="info" onClick={() => editPerson(i)}>edit</Button></td>
                                <td><Button color="warning" onClick={() => delPerson(i)}>delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default FormTable