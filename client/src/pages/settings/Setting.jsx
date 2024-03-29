import Sidebar from '../../components/siderbar/Sidebar'
import './setting.css'
import img from '../../assets/images.jpg'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'


const Setting = () => {
    const { user, dispatch } = useContext(Context)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const [success, setSuccess] = useState(false)
    const [file, setFile] = useState(null)
    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:'UPDATE_START'})
        const updatedUser = {
            userId: user._id, username, email, password,
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename
            try {
                await axios.post("/upload", data)
            } catch (error) {
                console.log(error);
            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser)
            setSuccess(true)
            dispatch({type:'UPDATE_SUCCESS', payload:res.data})
        } catch (error) {
            dispatch({type:'UPDATE_FAILURE'})
        }
    }

    return (
        <div className='setting'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className='settingForm' onSubmit={handleSubmit}>
                    <label>Profile picture</label>
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])} />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder={user.username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <label >Email</label>
                    <input type="email" placeholder={user.email} onChange={(e)=>{setPassword(e.target.value)}} />
                    <label >Password</label>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button className='settingSubmit' type='submit'>Update</button>
                    {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile has been updated!</span> }
                </form>
            </div>
            <Sidebar />

        </div>
    )
}

export default Setting
