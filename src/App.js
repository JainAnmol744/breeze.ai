import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Dashboard from './pages/Dashboard';


function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser){
          setUser(currentUser)
        }else{
          setUser(null)
        }
    })

    return ()=>{
      unsub()
    }

  }, [])
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={user ? <Dashboard setUser={setUser} /> : <SignIn />}/>
            <Route path='/login' element={<SignIn setUser={setUser}/>}/>
            <Route path='/signup' element={<SignUp setUser={setUser}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
