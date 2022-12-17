
import { useState } from "react"
import { fetchUser } from "./NewLibrary"
import { Button, Input } from "reactstrap"

const App2 = () => {
    const [fetchError, setError] = useState("")
    const [person, setPerson] = useState({})
    const [personId, setPersonId] = useState("")
    const handleFetchUser = () => {
        const response = fetchUser(personId);
        if (typeof response === "string") {
            setError(response)
        } else {
            setPerson(response)
            setPersonId("")
            setError("")
        }
    }

    return (
        <>
            <div style={{
                padding: 15
            }}>
                {fetchError ? <div style={{ color: "red" }}> {fetchError}</div> : null}
                <div>Name:{person.name || "No name"}</div>
                <div>ID:{person.id || "No Id"}</div>
                <Input onChange={(e) => setPersonId(e.target.value)}
                    placeholder="enter user id...."
                    value={personId || ""} />
                <Button color="info" onClick={handleFetchUser}>FetchUser</Button>
            </div>
        </>
    )
}
export default App2