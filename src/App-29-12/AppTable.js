import React from "react";
import { Button } from "reactstrap";
const AppTable = (props) => {
    const { dataList, editFlower, delFlower } = props
    return (
        <>
            <table className="table table-borderd">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Flower Name</th>
                        <th>Species Name</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((el, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{el.flowerName}</td>
                                <td>{el.speciesName}</td>
                                <td><Button color="success" onClick={() => editFlower(i)}>Edit</Button></td>
                                <td><Button color="info" onClick={() => delFlower(i)}>delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}
export default AppTable;