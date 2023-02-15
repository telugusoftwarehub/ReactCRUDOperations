import React from "react";
import Table from "../../components/table";
import { createuser } from "../../configs/createuser";
import Button from "../../components/button"

const CreateUserComponent = ({inputChangeHandler, buttonClickHandler }) => {
    return <>
        <h1> Create User </h1>
        <div>
            {createuser && createuser.map((item, index) => {
                return <>
                    <label> {item.label } </label>
                    <input type={item.text} name={item.name} onChange={(event) => inputChangeHandler(item.label, event.target.value)} />
                </>
            })}
            <Button label="Create" buttonClickHandler={buttonClickHandler} />
        </div>
    </>
}

export default CreateUserComponent;