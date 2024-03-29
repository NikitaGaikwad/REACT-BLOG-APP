import './write.css'
import img from '../../assets/hd-widescreen-free-download-flower.jpg'
import { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'

const Write = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState(null)
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            username: user.username,
            title,
            desc,
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post("/upload", data)
            } catch (error) {

            }
        }
        try {
            const res = await axios.post("/posts", newPost)
            window.location.replace('/post/' + res.data._id)
        } catch (error) {

        }

    }
    return (
        <div className='write'>
            {file && (
                <img src={URL.createObjectURL(file)} className='writeImg' alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">

                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])} />
                    <input type="text" placeholder='Title' className='writeInput' onChange={(e)=>setTitle(e.target.value)} autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder='Write something....' className='writeInput writeText' onChange={(e)=>setDesc(e.target.value)} ></textarea>
                </div>
                <button className='writeSubmit' type='submit'>Publish</button>
            </form>

        </div>
    )
}

export default Write
