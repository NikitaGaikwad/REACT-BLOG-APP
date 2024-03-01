import './single.css'
import Sidebar from '../../components/siderbar/Sidebar'
import SinglePost1 from '../../components/singlePost/SinglePost1'



const Single = () => {
    return (
        <div className='single'>
            <SinglePost1 />
            <Sidebar />
        </div>
    )
}

export default Single
