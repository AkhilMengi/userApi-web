import { Outlet, useNavigate } from "react-router-dom"
import axios from 'axios'
import NavBar from "./NavBar"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./utils/userSlice"
import { useEffect } from "react"

const Body = () => {
    const dispatch = useDispatch()  
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);
    const fetchUser = async ()=>{
        if (userData) return;
        try{
            const res = await  axios.get("http://localhost:3500/profile",{withCredentials:true})
            dispatch(addUser(res.data))
            // console.log(res.data)
        }catch(error){
            if (error.status === 401) {
                navigate("/login");
              }
            console.log(error)
        }
       
    }
    useEffect(()=>{
        fetchUser()
    },[])

    
    return (
        
        <div>
            
            <NavBar />
            <Outlet />
        </div>

    )
}

export default Body 