import React, { useEffect, useState } from "react";
import UserComponent from "./users.component";

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //ComponentDidMount
        fetch("http://localhost:9090/users")
            .then((respone) => respone.json())
            .then((response) => {
                 setUsers(response);
            }
            )
    }, [])

    return <UserComponent users={users}/>
}

export default UserContainer;