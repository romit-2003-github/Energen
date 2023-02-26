import React from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
    return (
        <>
        <h1 className="text-center my-3 py-3"style={{fontSize:'4rem',fontWeight:'bold'}}>Related Food Blogs</h1>
            <div className="blogs text-center" id="ourBlogs">

                <div class="card" style={{textAlign:'center'}}>
                    <img src={require('./gluten.jpg')} class="card-img-top" alt="..." style={{height:'40vh'}}/>
                    <div class="card-body">
                        <p class="card-text"><b>Gluten free diet plan</b></p>
                        <p class="card-text">Getting started - <Link to={'https://youtu.be/aAMBqlC7faU'}>https://youtu.be/aAMBqlC7faU</Link> </p>
                        <p class="card-text">gluten free food list - <Link to={'https://youtu.be/TvAoBdk0JPg'}>https://youtu.be/TvAoBdk0JPg</Link></p>
                        <p class="card-text">top 10 healthiest gluten free foods - <Link to={'https://youtu.be/zj10mJbcrYA'}>https://youtu.be/zj10mJbcrYA</Link></p>
                    </div>
                </div>

                <div class="card" >
                    <img src={require('./milk.png')} class="card-img-top" alt="..." style={{height:'40vh'}}/>
                        <div class="card-body">
                        <p class="card-text"><b>Dairy free diet plan</b></p>
                        <p class="card-text">Getting started - <Link to={'https://www.purition.co.uk/blogs/articles/dairy-free-diet-guide'}>Click Here</Link> </p>
                        <p class="card-text">Dairy free diet plan - <Link to={'https://youtu.be/UpJoBAYRBOs'}>https://youtu.be/UpJoBAYRBOs</Link></p>
                        <p class="card-text">top 10 tips for dairy free diet- <Link to={'https://youtu.be/K7h7eaO7HUo'}>https://youtu.be/K7h7eaO7HUo</Link></p>
                        </div>
                </div>

                <div class="card">
                <img src={require('./nuts.jpg')} class="card-img-top" alt="..." style={{height:'40vh'}}/>
                        <div class="card-body">
                        <p class="card-text"><b>Nuts free diet plan</b></p>
                        <p class="card-text">Getting started - <Link to={'https://youtu.be/P7b7FYeaInY'}>Click Here</Link> </p>
                        <p class="card-text">Everything you need to know - <Link to={'https://youtu.be/LtTOurDlr4M'}>https://youtu.be/LtTOurDlr4M</Link></p>
                        <p class="card-text">Prevention - <Link to={'https://youtu.be/P7b7FYeaInY'}>https://youtu.be/P7b7FYeaInY</Link></p>
                        </div>
                </div>

                <div class="card">
                <img src={require('./soy.jpg')} class="card-img-top" alt="..." style={{height:'40vh'}}/>
                        <div class="card-body">
                        <p class="card-text"><b>Soya free diet plan</b></p>
                        <p class="card-text">Getting started - <Link to={'https://youtu.be/_uGEBt3Rd0w'}>Click Here</Link> </p>
                        <p class="card-text">Everything you need to know - <Link to={'https://youtu.be/3p3sUHL-P3c'}>Click Here</Link></p>
                        <p class="card-text">Living with Soy Allery - <Link to={'https://youtu.be/dUD0UDQk6eM'}>https://youtu.be/dUD0UDQk6eM</Link></p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Blog
