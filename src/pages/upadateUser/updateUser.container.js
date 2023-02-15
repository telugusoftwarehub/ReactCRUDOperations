import React, { useEffect, useState } from "react";
import UpdateUserComponent from "./updateUser.component";

const UpdateUserContainer = () => {
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
            method: "PUT",
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

    return <UpdateUserComponent
        inputChangeHandler={inputChangeHandler}
        buttonClickHandler={buttonClickHandler}
    />
}

export default UpdateUserContainer;