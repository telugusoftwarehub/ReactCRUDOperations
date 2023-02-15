import React, { useEffect, useState } from "react";
import CreateUserComponent from "./createUser.component";
import { createuser } from "../../configs/createuser";

const CreateUserContainer = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        role: ''
    });

    const inputChangeHandler = (label, newValue) => {
        const payload = { ...newUser }
        if (label === "User Name") {
            payload.name = newValue;
        } else {
            payload.role = newValue
        }
        setNewUser(payload);
    }

    const buttonClickHandler = () => {
        const options = {
            method: "POST",
            headers: {"Content-Type" : "application/json; charset=UTF-8"},
            body: JSON.stringify({
                name: newUser.name,
                role: newUser.role
            })
        }

        fetch('http://localhost:9090/createUser', options)
        .then((respone) => respone.json())
        .then((response) => {
             console.log('Response: ', response);
            // setUsers(response);
            // props.getAllUsers(response);
        }
        ).catch((error) => {
            console.log('error')
        })
    }

    return <CreateUserComponent
        inputChangeHandler={inputChangeHandler}
        buttonClickHandler={buttonClickHandler}
    />
}

export default CreateUserContainer;