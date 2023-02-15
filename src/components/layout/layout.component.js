import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import './layout.component.css'

const LayoutComponent = () => {
    return (<>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/users">Get All Users</Link>
            </li>
            <li>
                <Link to="/createuser">Create User</Link>
            </li>
            <li>
                <Link to="/updateuser">Update User</Link>
            </li>
            <li>
                <Link to="/deleteuser">Delete User</Link>
            </li>
        </ul>
        <Outlet />
    </>
    )
}

export default LayoutComponent;