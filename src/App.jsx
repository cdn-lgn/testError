import React, { lazy } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute'

const Home = lazy(()=>import("./pages/Home"))
const Chat = lazy(()=>import("./pages/Chat"))
const Groups = lazy(()=>import("./pages/Groups"))
const Login = lazy(()=>import("./pages/Login"))
const Signup = lazy(()=>import("./pages/Signup"))
const Notfound = lazy(()=>import("./pages/Notfound"))


let user = true;

const App = props => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectedRoute user={user} />}>
          <Route path='/' element={<Home />} />
          <Route path='/chat/:id' element={<Chat />} />
          <Route path='/groups' element={<Groups />} />
        </Route> 

        <Route path='/login' element={
          <ProtectedRoute redirect='/' user={!user}>
            <Login/>
          </ProtectedRoute>
        } />

        <Route path='/signup' element={
          <ProtectedRoute redirect='/' user={!user}>
            <Signup/>
          </ProtectedRoute>
        } />

        <Route path="*" element={<Notfound />}/>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App