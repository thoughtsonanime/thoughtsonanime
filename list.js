import React, {useState, useEffect} from "react";
import axios from "axios";

const listUsers = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/users").then((respone) => {
            setUsers(respone.data);
        });
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default listUsers;