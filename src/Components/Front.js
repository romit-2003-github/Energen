import React from 'react'
import { Link } from 'react-router-dom'
const Front = () => {
  return (
    <>
      <div className="frontPage">
        <div className="frontText">
            <h1 style={{fontSize:'8.5vh'}}>Welcome to<b> ENERGEN</b></h1>
            <h2 style={{fontSize:'5vh',padding:'10px'}}>Energize without Allergens!</h2>
            <h4>Look no further, we are your one-stop-shop for</h4>
            <h4>all elimination diet plans!</h4>
            <button type="button" class="btn btn-white" style={{margin:'20px'}}><Link to={"/Options"} style={{textDecoration:'none',color:'white'}}>Get Started &#8594;</Link></button>
        </div>
        
      </div>
    </>
  )
}

export default Front
