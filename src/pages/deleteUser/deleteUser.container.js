import React, { useEffect, useState } from "react";
import DeleteUserComponent from "./deleteUser.component";

const DeleteUserContainer = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        role: '',
        id: ''
    });

    const inputChangeHandler = (label, newValue) => {
        const payload = { ...newUser }
        if (label === "User Name") {
            payload.name = newValue;
        } else if(label === "ID"){
            payload.id = newValue;
        }else {
            payload.role = newValue
        }
        setNewUser(payload);
    }

    const buttonClickHandler = () => {
        const options = {
            method: "DELETE",
            headers: {"Content-Type" : "application/json; charset=UTF-8"},
            body: JSON.stringify({
                name: newUser.name,
                role: newUser.role
            })
        }

        fetch(`http://localhost:9090/users/${newUser.id}`, options)
        .then((respone) => respone.json())
        .then((response) => {
             console.log('Response: ', response);
        }
        ).catch((error) => {
            console.log('error')
        })
    }

    return <DeleteUserComponent
        inputChangeHandler={inputChangeHandler}
        buttonClickHandler={buttonClickHandler}
    />
}

export default DeleteUserContainer;