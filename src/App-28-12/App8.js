import { useState } from "react";
import { Button } from "reactstrap";
import AppChild8 from "./AppChild8";

const App8 = () => {
    const [nameState, setNameState] = useState("janaki")
    const stateChange = () => {
        setNameState("chitra")
    }
    const changeState = (varState) => {
        console.log(varState)
    }
    return (
        <>
            <AppChild8 nameState={nameState} changeState={changeState} />
            <Button onClick={stateChange}>change</Button>
        </>
    )
}
export default App8;