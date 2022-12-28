import React from "react";
import { useEffect } from "react";
const AppChild8 = (props) => {
    console.log(props)
    const { nameState, changeState } = props
    useEffect(() => {
        changeState(nameState)
    }, [nameState])
    return (
        <>
            <div>{nameState}</div>
            <div>{changeState}</div>
        </>
    )
}
export default AppChild8;