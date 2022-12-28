import { useEffect } from "react";

const App6 = () => {
    const sumFunc = (a, b) => {
        return a + b;
    }
    useEffect(() => {
        const z = sumFunc(39, 830)
        console.log(z)
    }, [])
    return (
        <>

        </>
    )
}
export default App6