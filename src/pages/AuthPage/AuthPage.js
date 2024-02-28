import { useState } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"


export default function AuthPage (props){
   const [showLogin, setShowLogin] = useState(true)

   return(
    <>
      <button onClick={() => setShowLogin(!showLogin)}>{!showLogin? 'Click here to sign in.': 'Create a new account.'}</button>
      { !showLogin  ?  <SignUpForm signUp = {props.signUp} />  :  <LoginForm login = {props.login} />} 
    </>
   )
}