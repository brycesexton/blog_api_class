import { useState } from 'react'
import styles from './SignUpForm.module.scss'

export default function SignUpForm (props){
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value })
    }
    return(
        <>
        <h2 class={styles.heading}>SIGN UP TO CHECK OUT MY BLOG</h2>
        <form class={styles.form} onSubmit={(e) => {
            e.preventDefault()
            props.signUp(credentials)
        }}>
            <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} value={credentials.name} />

            <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={credentials.email} />

            <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={credentials.password} />

            <input type="submit" value="Submit" />
        </form>
        </> //grouping together
    )
   } 