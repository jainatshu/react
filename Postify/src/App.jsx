import { useState, useEffect } from 'react'

import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './component';
import { Outlet } from 'react-router-dom';


function App() {
  //loading appwrite
  const [loading,setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])



    {/* if confidtion */}
    return !loading ? ( 
      <div className='min-h-screen flex-wrap content-between bg-gray-400'>
        <div className='w-full block'></div>
        <Header/>
        <main>
         TODO : <Outlet/>
        </main>
        <Footer/>
      </div>
    ) : (null)

  
}

export default App
