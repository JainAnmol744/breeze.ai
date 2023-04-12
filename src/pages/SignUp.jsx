import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const SignUp = ({setUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e)=>{
        e.preventDefault()
        if(!email || !password || !confirmpassword){
            setError('Please fill out the fields.')
            return 
        }
        else if(password !== confirmpassword){
            setError('password and confirm password does not match')
            return 
        }
        try{
            const userAuth = await createUserWithEmailAndPassword(auth, email, password)
            setUser(userAuth)
            setEmail('')
            setConfirmpassword('')
            setPassword('')
            navigate('/')
            
            }
        catch(e){
            setError(e.message)
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setError('')
        }, 1500)
        return ()=>{
            clearInterval(timer)
        }
    }, [error])

  return (
    <div className='form-container'>
        <h2>Create a new account</h2>
        <form onSubmit={e => handleRegister(e)}>
            <p className='error'>{error}</p>
            <div>
                <label htmlFor="">Enter Email: </label><br/>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter you email'/>
            </div>
            <div>
                <label htmlFor="">Enter Password: </label><br/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter you Password'/>
            </div>
            <div>
                <label htmlFor="">Confirm Password: </label><br/>
                <input value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)} type="password" placeholder='Enter you email'/>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
        <p>Already have an account?<Link to='/login'>Sign in</Link></p>
    </div>
  )
}

export default SignUp