import React from "react";
import Button from "../../components/button";
import { deleteuser } from "../../configs/deleteuser"

const DeleteUserComponent = ({inputChangeHandler, buttonClickHandler }) => {
    return <>
        <h1> Delete User </h1>
        <div>
            {deleteuser && deleteuser.map((item, index) => {
                return <>
                    <label> {item.label } </label>
                    <input type={item.text} name={item.name} onChange={(event) => inputChangeHandler(item.label, event.target.value)} />
                </>
            })}
            <Button label="Delete" buttonClickHandler={buttonClickHandler} />
        </div>
    </>
}

export default DeleteUserComponent;