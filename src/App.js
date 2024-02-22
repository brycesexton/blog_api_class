import { useState, useEffect } from 'react'
import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import ShowPage from './pages/ShowPage/ShowPage'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'

export default function App() {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState('')
    return (
        <div className={styles.App}>
            <Routes>
                <Route path = "/" element = {<HomePage/>}></Route>
                <Route path = "/register" element = {<AuthPage/>}></Route>
                <Route path = "/blog" element = {<ShowPage/>}></Route>
            </Routes>
        </div>
    )
}
