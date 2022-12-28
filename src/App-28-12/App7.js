import React from "react";
import { Button } from "reactstrap";
import { useEffect, useState } from "react";
const App7 = () => {
    const [customerName, setCustomerName] = useState("Devathai");
    const handleChange = () => {
        setCustomerName("Devi")
    }
    useEffect(() => {
        console.log('33333')
    }, [customerName])
    return (
        <>
            <div>{customerName}</div>
            <Button onClick={handleChange}>change</Button>
        </>
    )
}
export default App7;