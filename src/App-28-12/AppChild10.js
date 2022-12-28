import React, { useEffect, useState } from "react"
const AppChild10 = (props) => {
    const { company } = props
    const [flower, setFlower] = useState("lilly")
    useEffect(() => {
        if (company !== "toyota") {
            setFlower("sunFlower")
        }

    }, [company])
    return (
        <>
            <div>{company}</div>
            <div>{flower}</div>
        </>
    )
}
export default AppChild10;