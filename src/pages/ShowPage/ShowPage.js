import { useState, useEffect } from 'react'
import Blog from '../../components/Blog/Blog'
import UpdateForm from '../../components/UpdateForm/UpdateForm'
import { useParams } from 'react-router-dom'

export default function ShowPage (){
    // display the individual blog post in all its glory----> Blog Component
    // update the blogPost -----> UpdateForm
    // delete the blog post ----> a wee little button
    const [showUpdate, setShowUpdate] = useState(false)
    const [blog, setBlog] = useState({
        title:'',
        body: ''
    })
    const {id} = useParams()// FE version of req.params
    useEffect(() => {
        const fetchBlog = async () => {
            try {
               const data = await props.getIndividualBlog(id)
               setBlog(data) 
            } catch (error) {
                console.error(error)
            }
        }
        fetchBlog()
    }, [])
    // checking the token & user in localStorage
    useEffect(() => {
        if(localStorage.token && !props.token){
            props.setToken(localStorage.getItem('token'))
        }
        if(localStorage.token && localStorage.user && !props.user){
            props.setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [])

    return<h1>This is the ShowPage</h1>
}