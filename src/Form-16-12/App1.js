
import { useState } from "react"
import { Button } from "reactstrap"
import { reWorkObj } from "./Library"

const App1 = () => {
    const [objState, setObj] = useState({ name: "adheena", houseName: "adackapara", city: "kannur" })
    const handleChange = () => {
        const newObj = { ...objState }
        const updateObj = reWorkObj(newObj, 'houseName', 'puliyanikattu')
        setObj(updateObj)
    }
    return (
        <>
            <div>Adress:{objState.houseName}</div>
            <Button color="info" onClick={handleChange}>Add</Button>
        </>
    )
}
export default App1
