import React from "react"
import { useState } from "react"
import { Button, FormGroup, Input, Label } from "reactstrap"
const App = () => {
    const [customer, setCustomer] = useState({})
    const [DataList, addCustomer] = useState([])
    const handleChange = (e) => {
        setCustomer(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const addCustomertoList = () => {
        if (customer.indexItem > -1) {
            const customerList = DataList
            customerList[customer.indexItem] = customer
        } else {
            addCustomer(prevState => {
                return [
                    ...prevState,
                    customer
                ]
            })
        }
        setCustomer({})
    }
    const editCustomer = (index) => {
        const pressCustomerObj = DataList[index]
        setCustomer({ ...pressCustomerObj, indexItem: index })
    }
    const delCustomer = (inx) => {
        const copyDataList = [...DataList]
        copyDataList.splice(inx, 1)
        addCustomer(copyDataList)
    }
    return (
        <>
            <FormGroup>
                <Label>
                    customer Name
                </Label>
                <Input
                    name="customerName"
                    placeholder="Enter customer Name"
                    onChange={(event) => handleChange(event)}
                    value={customer.customerName || ""}
                />
            </FormGroup>
            <FormGroup>
                <Label>
                    Phone Number
                </Label>
                <Input
                    type="Number"
                    name="phoneNumber"
                    placeholder="Enter phone Number"
                    onChange={(event) => handleChange(event)}
                    value={customer.phoneNumber || ""}
                />
            </FormGroup>
            <FormGroup>
                <Label>
                    E Mail ID
                </Label>
                <Input
                    name="emailId"
                    placeholder="Enter emailId"
                    onChange={(event) => handleChange(event)}
                    value={customer.emailId || ""}
                />
            </FormGroup>
            <Button onClick={addCustomertoList}>Add</Button>
            <table className="table table-boardered m-3">
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>customer Name</th>
                        <th>phone Number</th>
                        <th>E Mail</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {DataList.map((el, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{el.customerName}</td>
                                <td>{el.phoneNumber}</td>
                                <td>{el.emailId}</td>
                                <td><Button color="warning" onClick={() => editCustomer(i)}>Edit Customer</Button></td>
                                <td><Button color="info" onClick={() => delCustomer(i)}> delete Customer</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default App;