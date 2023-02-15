import React from 'react';
import './table-component.css';

const TableComponent = ({users}) => {
    return <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.role}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default TableComponent;