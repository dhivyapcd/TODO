import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Userform from "./Userform";
import SelectedUser from "./SelectedUser";
import { useState, useRef } from "react";

function App(props) {
  const [users, setUsers] = useState([
    { id: 0, fname: "AAA", lname: "AAA", done: false },
    { id: 1, fname: "BBB", lname: "BBB", done: false },
    { id: 2, fname: "CCC", lname: "CCC", done: false },
  ]);
  const onaddUser = (user) => {
    const auser = [...users, user];

    setUsers(auser);
  };
  const handleChange = (e, i) => {
    const user = [...users];
    user[i].done = !user[i].done;
    setUsers(user);
    console.log(users);
  };
  const removeUser=(e,i)=>{
    console.log(i);
    const ruser=[...users];
    ruser.splice(i,1);
    setUsers(ruser);
    console.log(users)
  }
  return (
    <div className="App">
      <Userform addUser={onaddUser} />
      <ul>
        {users ? (
          users.map((user, i) => (
            <li key={user.id}>
              <input type="checkbox" onChange={(e) => handleChange(e, i)} />
              Id:{user.id} {user.fname} {user.lname}
              {user.done ? (
                <SelectedUser user={user.fname + " " + user.lname} />
              ) : null}
              <button onClick={(e)=>removeUser(e,i)}>X</button>
            </li>
          ))
        ) : (
          <p>List empty</p>
        )}
      </ul>
    </div>
  );
}

export default App;
