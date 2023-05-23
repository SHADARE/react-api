import React, { useState } from 'react';

import './Login.css';




const Login = () => {

 const [username, setUsername] = useState('');

const [password, setPassword] = useState('');




 const handleSubmit = (e) => {

 e.preventDefault();

 alert(`Username: ${username}\nPassword: ${password}`);

 }




 return (

 <form onSubmit={handleSubmit} className="main-div">

 <div className="minor-div">

 <label htmlFor="username">Username:</label>

 <input

 type="text"

 id="username"

 value={username}

 onChange={(e) => setUsername(e.target.value)}

 className="input"

 />

 </div>

 <div>

 <label htmlFor="password">Password:</label>

 <input

 type="password"

 id="password"

 value={password}

 onChange={(e) => setPassword(e.target.value)}

 className="input"

 />

 </div>

 <button type="submit">Submit</button>

 </form>
 );

};




export default Login;
