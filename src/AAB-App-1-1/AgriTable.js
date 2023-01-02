import React from "react";
import { Button } from "reactstrap";
const AgriTable = (props) => {
    const { userList, editClient, delClient } = props
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Client Name</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((el, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{el.clientName}</td>
                                <td> {el.phoneNumber}</td>
                                <td><Button color="primary" onClick={() => editClient(i)}>edit</Button></td>
                                <td><Button color="warning" onClick={() => delClient(i)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default AgriTable;