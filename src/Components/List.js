import React from 'react'
import { Link } from 'react-router-dom';
const List = () => {
    return (
        <>
            <div className="recipe">
                <div className="recipeText">
                    <h1 style={{ paddingBottom: '15px' }}><b>Get alternate recipes based on your allergy patterns</b></h1>
                    <h2 style={{ fontFamily: 'roman' }}>Enter your allergy and get personalized alternatives</h2>
                    <button type="button" class="btn btn-primary" style={{display:'inline'}}><Link style={{textDecoration:'none',color:'white'}} to={"/Allergy"}>Check Now &#8594;</Link></button>
                </div>
                <div className="recipePhoto">
                    <img src={require('./recipe.jpg')} alt="loading image" />
                </div>

                <div className="recipePhoto">
                    <img src={require('./tracker.jpg')} alt="loading image" />
                </div>
                <div className="recipeText">
                    <h1 style={{ paddingBottom: '15px' }}><b>Improve the nutritional content of your recipe</b></h1>
                    <h2 style={{ fontFamily: 'roman' }}>Discover how each ingredient affects your recipe’s health score and make modifications to enhance its nutritional value.</h2>
                    <button type="button" class="btn btn-primary" style={{display:'inline'}}><Link style={{textDecoration:'none',color:'white'}} to={"https://namanchaudhary1.github.io/Energen/"}>&#8592; Check Now</Link></button>

                </div>
            </div>
        </>
    )
}

export default List
