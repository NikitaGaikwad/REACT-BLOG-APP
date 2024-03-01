import './header.css'
import headerImg from '../../assets/what-is-a-blog-1.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>My Blogs</span>
            {/* <span className='headerTitleLg'>BLOGS</span> */}
        </div>
      <img className='headerImg' src={headerImg} alt="" />
    </div>
  )
}

export default Header
