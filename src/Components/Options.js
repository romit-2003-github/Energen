import React from 'react'
import { Link } from 'react-router-dom'
const Options = () => {
    return (
        <>
            <div className="boxes">
                <div className="card">
                    <img src={require('./recipe.jpg')} alt="loading image" style={{ height: '50vh' }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign:'center',fontSize:'1.5rem'}}>Allergy Solution</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" style={{margin:'auto'}}><Link to={'/Allergy'} style={{textDecoration:'none',color:'white'}}>Click Here</Link></a>
                    </div>
                </div>

                <div className="card">
                    <img src={require('./tracker.jpg')} alt="loading image" style={{ height: '50vh' }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign:'center',fontSize:'1.5rem'}}>Calorie Tracker</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" style={{margin:'auto'}}><Link to={'https://namanchaudhary1.github.io/Energen/'} style={{textDecoration:'none',color:'white'}}>Click Here</Link></a>
                    </div>
                </div>

                <div className="card">
                    <img src={require('./consult.jpeg')} alt="loading image" style={{ height: '50vh' }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign:'center',fontSize:'1.5rem'}}>Consult with our Expert</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary'><Link to={'/Consult'} style={{textDecoration:'none',color:'white'}}>Click Here</Link></button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Options
