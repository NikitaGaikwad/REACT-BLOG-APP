import './sidebar.css'
import profileImg from '../../assets/download.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <div className="sidebarTitle">ABOUT ME</div>
                <img src={profileImg} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">CATEGORIES</div>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className='link'>
                        <li className="sidebarListItem" style={{ textTransform:"capitalize"}}>{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">FOLLOW US</div>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                </div>


            </div>
        </div>
    )
}

export default Sidebar
