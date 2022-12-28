import React from "react";
import { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { commonFunc } from "./common";
//Oru common function aah function 2 parameters get cheyyanam. Numbers aarikkum randum. 
//Athinte action aah rand numbersine add cheythitt return cheyyanam. 
//Now componentill 2 input fields vakkanam. 
// Aah rand inputs kond enter cheyyunna value aarikkum
//  aah function incoke cheyyyumpol kodukkanda argument. 
// Now oru button click ill aah func invoke cheyyumpol 
// aah 2 value pass akki kittunna return value inee state ill update cheyth kaanjkkanam.
const App = () => {
    const [num, updateNum] = useState(0)


    console.log(num)
    console.log(updateNum)
    return (
        <>
            <FormGroup>
                <Input
                    name="num1"
                    placeholder="enter num1"
                    onChange={(event) => (event)} />
            </FormGroup>
            <FormGroup>
                <Input
                    name="num2"
                    placeholder="enter num2"
                    onChange={(event) => (event)} />
            </FormGroup>
        </>
    )
}
export default App