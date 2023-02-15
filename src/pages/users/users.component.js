import React from "react";
import Table from "../../components/table";

const UserComponent = ({ users }) => {
    return <>
        <h1> Users </h1>
        {users.length > 1 && <Table users={users} />}
    </>
}

export default UserComponent;