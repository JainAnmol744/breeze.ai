import React from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'

const Dashboard = ({setUser}) => {
    const logout = async()=>{
        await signOut(auth)
        setUser(null)
    }
  return (
    <div>
        <nav>
            <p className='logout' style={{textAlign:'right'}} onClick={logout}>logout</p>
        </nav>
        <h1 style={{textAlign:'center'}}>Hello world</h1>
    </div>
  )
}

export default Dashboard