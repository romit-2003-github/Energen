import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={require('./logo blue.png')} style={{width:'200px',height:'55px',paddingTop:'-20px'}} alt="loading" />
        </div>
        <div className='boxItems'>
          <li className="navItems" id="item-1"><a href='/'>Home</a></li>
          <li className="navItems" id="item-2"><a href='/'>About</a></li>
          <li className="navItems" id="item-3"><a href='ourBlogs'>Blogs</a></li>
          <li className="navItems" id="item-4"><Link to={'https://romit-2003-github.github.io/Foods/'}>Shop with Us</Link></li>
        </div>
        <div className="loginBtn">
          <button type="button" class="btn btn-danger">Our Community</button>
          {/* <img src={require('./login.png')} style={{width:'10px',height:'100px'}} alt="" /> */}
        </div>  
      </div>
    </>
  )
}

export default Navbar
