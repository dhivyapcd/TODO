import "./App.css";
import { useState, useRef } from "react";

function Userform(props) {
  const [user, setUser] = useState({id:"",fname:"",lname:""});
  const handleChange = (e) => {
    let fields ={};
    fields[e.target.name] = e.target.value;
    setUser(
      fields
    );
     };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    props.addUser(user);
    setUser({id:"",fname:"",lname:""});
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Id</label>
        <input name="id" onChange={handleChange} value={user.id}></input>
        <label>FirstName</label>
        <input name="fname" onChange={handleChange} value={user.fname}></input>
        <label>Last Name</label>
        <input name="lname" onChange={handleChange} value={user.lname}></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Userform;
