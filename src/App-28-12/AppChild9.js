import { useEffect } from "react";

const AppChild9 = (props) => {
    const { userName, setUserName } = props
    console.log(props)
    useEffect(() => {
        if (userName !== "janani") {
            setUserName(true)
        }
    }, [userName])
    return (
        <>
            <div>{userName}</div>
            <div></div>
        </>
    )
}
export default AppChild9;