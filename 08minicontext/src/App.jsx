
import './App.css'
import Login from './component/Login'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Profile from './component/Profile'

function App() {
  
  
  return(
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
