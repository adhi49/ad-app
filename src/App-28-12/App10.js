import { useState } from "react";
import { Button } from "reactstrap";
import AppChild10 from "./AppChild10";

const App10 = () => {
    const [company, setCompany] = useState("toyota")
    const handleChange = () => {
        setCompany("bens")
    }
    return (
        <>
            <AppChild10 company={company} />
            <Button onClick={handleChange}>change</Button>

        </>
    )
}
export default App10;