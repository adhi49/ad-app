import React from "react"
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
const AgriComp = () => {
    return (
        <> <div style={{ textAlign: "center" }}>
            <Card
                style={{

                    width: '20rem'
                }}
            >
                <img
                    padding="10px"
                    alt="Sample"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1hsPZ3qkKkv_MatQnn-AiLX4qGv1oyMfhlOQ2fW8LM5B92YJ2Btis3m8CvctmxTKR-R8&usqp=CAU"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Malanad Agro Store
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Welcome
                    </CardSubtitle>
                    <Input
                        placeholder="enter name"
                    /><br />
                    <Input
                        placeholder="password" />
                    <br />
                    <Button><Link to={"/home"}>Log in </Link></Button>
                </CardBody>
            </Card>
        </div>


        </>
    )
}
export default AgriComp;