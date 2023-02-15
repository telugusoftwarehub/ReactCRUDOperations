import React from "react";
import Button from "../../components/button";
import { updateuser } from "../../configs/updateuser";

const UpdateUserComponent = ({inputChangeHandler, buttonClickHandler }) => {
    return <>
        <h1> Update User </h1>
        <div>
            {updateuser && updateuser.map((item, index) => {
                return <>
                    <label> {item.label } </label>
                    <input type={item.text} name={item.name} onChange={(event) => inputChangeHandler(item.label, event.target.value)} />
                </>
            })}
            <Button label="Update" buttonClickHandler={buttonClickHandler} />
        </div>
    </>
}

export default UpdateUserComponent;