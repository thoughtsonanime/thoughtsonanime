import React, {useState} from "react";
import axios from "axios";

const AddUser = () => {

    const [name, setName] = useState("");
    const [email, set] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {name, email};
        axios.post("http://localhost:3000/users", user).then(() => {
            alert("User added Successfully");
            setName("");
            setEmail("");
        });
    };

    return (
        <div>
            <h2> Add User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name:</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label> Email:</label>
                    <input
                    type="Email"
                    value={email}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}