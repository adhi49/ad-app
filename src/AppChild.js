import React from "react";
import { useEffect } from "react";
const AppChild = (props) => {
    console.log(props)
    const { varState, changeState, } = props
    useEffect(() => {
        changeState(varState)
    }, [varState[3]])
    return (
        <>
            {varState}
        </>
    )
}
export default AppChild
