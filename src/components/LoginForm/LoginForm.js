import { useState } from 'react'
import styles from './LoginForm.module.scss'

export default function LoginForm (props){
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value })
    }
    return(
        <>
        <h2 class={styles.heading}>Log into your account...</h2>
        <form class={styles.form} onSubmit={(e) => {
            e.preventDefault()
            props.login(credentials)
        }}>
            <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={credentials.email} />

            <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={credentials.password} />

            <input type="submit" value="Submit" />
        </form>
        </> //grouping together
    )
   }