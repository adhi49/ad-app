import { useState } from "react";
import AppChild9 from "./AppChild9";
import { Button } from "reactstrap";
const App9 = () => {
    const [userName, setName] = useState("janani")
    const [isUserNameChange, setUserName] = useState(false);
    const handleUserNameChange = () => {
        setName('ananya')
    }
    return (
        <>
            <div>nameChanged?:{isUserNameChange ? "yes" : "no"}</div>
            <AppChild9 userName={userName} setUserName={setUserName} />
            <Button onClick={handleUserNameChange}>change</Button>
        </>
    )
}
export default App9;