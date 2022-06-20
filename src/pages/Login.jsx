import React from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () =>  {
  const {handleToggleAuth} = React.useContext(AuthContext);
  const [formData, setFormData] = React.useState({
      email: "",
      password : ""
  })

  const handleChange = (e) => {
      const {name, value} = e.target;

      setFormData({...formData, [name] : value});
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      postData();
  }
  const postData = () => {    
      fetch(`https://reqres.in/api/login`,{
          method: "POST",
          body : JSON.stringify(formData),
          headers:{
              "content-type": "application/json"
          }
      })
      .then((res) => res.json())
      .then((res) => {
        handleToggleAuth();
      });
  }
  const {email, password} = formData;
  return <>
  <form onSubmit={handleSubmit}>

      <label >
          Email : {" "}
          <input type="text" placeholder="Enter Email" value={email} name="email" onChange={handleChange} />
      </label>
      <br />
      <label >
          Password : {" "}
          <input type="text" placeholder="Enter Password" value={password} name="password" onChange={handleChange} />
      </label>
      <br></br>
      <input type="submit"  placeholder="Login"/>
  </form>
  
  </>
}

export  {Login};
