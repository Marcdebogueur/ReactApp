import React from 'react'
import { useState } from 'react'
import './Loginform.css'


const account1 = {
  username: "Carlos",
  pin: 1111,
};
const account2 = {
  username: "Steven",
  pin: 2222,
};
const account3 = {
  username: "Jessica",
  pin: 333,
};
const account4 = {
  username: "Davis",
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const  Loginform = () => {
  const [username, setUsername]=useState("")
  const [pin, setPin]=useState("")
  const [error, setError]=useState("")
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    const user = accounts.find(
      (account)=> account.username === username && account.pin === Number(pin)
    );
    if(user){
      setError("you are successfully login the page")
    }else{
      setError("incorrect username or password")
    }
  }
  const valueHandle= (e)=>{
    setUsername(e.target.value)
  }
  const pinHandle=(e)=>{
    setPin(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="" className='sign-in-form'>
        <label htmlFor="">
          Username
          <input type="text" value={username} onChange={valueHandle} />
        </label>
        <label htmlFor="">
          Password
          <input type="text" value={pin} onChange={pinHandle} />
        </label>
        <br />
        <button className='loginbtn' type='submit'>
          Login
        </button>
        <div className="error">{error && <div>{error}</div>}</div>
      </form>
    </div>
  )
}

export default  Loginform