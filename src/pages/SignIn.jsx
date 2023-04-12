import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    
    const login = async (e)=>{
        e.preventDefault()
        if(!email || !password){
            setError('Please fill out the fields')
            return 
        }
        try{
            const userAuth = await signInWithEmailAndPassword(auth, email, password)
            setEmail('')
            setPassword('')
            navigate('/')

        }catch(e){
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
        <h2>Log in to you account</h2>
        <form onSubmit={e => login(e)}>
            <p className='error'>{error}</p>
            <div>
                <label htmlFor="">Enter Email: </label><br/>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='Enter you email'/>
            </div>
            <div>
                <label htmlFor="">Enter Password: </label><br/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter you Password'/>
            </div>
            <button>Sign In</button>
        </form>
        <p>Don't have an account?<Link to='/signup'>Sign up</Link></p>
    </div>
  )
}

export default SignIn