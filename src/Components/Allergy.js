import React from 'react'
import { Link } from 'react-router-dom';

const Allergy = () => {

    const gluVP = {
        title: "Gluten-Free Vegetable Pakoras Recipe",
        ingredients: "1 cup chickpea flour (also called gram flour or besan)<br> 1/4 cup rice flour <br> 1 tsp cumin seeds <br> 1/2 tsp coriander seeds <br> 1/2 tsp ground turmeric <br> 1/2 tsp chili powder <br> 1/2 tsp salt <br> 1/4 tsp baking powder <br> 1/2 cup water <br> 2 cups mixed vegetables (such as grated carrots, chopped onions, diced bell peppers, and chopped spinach) <br> Vegetable oil for frying",
        substitutes: "1 cup gluten free chickpea flour (also called gram flour or besan) <br> substitute such as rice flour or corn flour <br> gluten-free chili powder or use a substitute such as cayenne pepper or paprika. <br>",
        method: "In a large bowl, whisk together the chickpea flour, rice flour, cumin seeds, coriander seeds, turmeric, chili powder, salt, and baking powder. Add the water and whisk until the batter is smooth. Add the mixed vegetables to the batter and stir to coat. Heat about 1 inch of vegetable oil in a large heavy-bottomed pot over medium-high heat until hot but not smoking. Using a tablespoon or small cookie scoop, drop the batter by spoonful into the hot oil, working in batches. Fry the pakoras for 3-4 minutes on each side, or until golden brown and crispy. Remove the pakoras from the oil with a slotted spoon and drain on paper towels. Serve the pakoras hot with chutney or raita."
    }

    const gluS = {
        title: "Gluten Free Samosa Recipe",
        ingredients: "•	1/4 tsp salt<br>1/4 cup vegetable oil<br>1/4 cup cold water<br>1 large potato, peeled and diced<br>1/2 cup frozen green peas<br>1/2 onion, diced<br>2 garlic cloves, minced<br>1 tbsp grated ginger<br>1 tsp ground coriander<br>1 tsp ground",
        substitutes: "1 cup gluten-free all-purpose flour (such as Bob's Red Mill)",
        method: "To make the pastry, combine the gluten-free all-purpose flour and salt in a large bowl. Add the vegetable oil and use a fork to mix until crumbly. <br>Gradually add the cold water, stirring until the mixture forms a ball.<br>Knead the dough on a<br>Cover the dough and let it rest for 30 minutes.<br>To make the filling, boil the diced potato until tender. Drain and set aside.<br>Heat the vegetable oil in a large skillet over medium heat. Add the onion, garlic, and ginger, and sauté until soft and translucent.<br>Add the cooked potato, green peas, coriander, cumin, turmeric, and salt. Cook for 2-3 minutes, stirring occasionally, until the filling is well combined and heated through.<br>Preheat the oil for frying in a large heavy-bottomed pot over medium-high heat.<br>Roll out the pastry dough on a floured surface until it's about 1/8 inch thick.<br>Use a round cookie cutter or a glass to cut out circles of dough, about 3 inches in diameter.<br>Place a spoonful of the filling in the centre of each circle.<br>Fold the circle in half to form a triangle shape, and pinch the edges together to seal.<br>Fry the samosas in the preheated oil in batches, turning occasionally, until they are golden brown and crispy.<br>Remove the samosas from the oil with a slotted spoon and drain on paper towels.<br>Serve the samosas hot with chutney or raita."
    }

    const gluPT = {
        title: "GLUTEN FREE Paneer Tikka Recipe",
        ingredients: "•	1 cup Greek yogurt<br>1 tsp paprika<br>1/2 tsp cumin<br>1/2 tsp coriander<br>1/2 tsp turmeric<br>1/2 tsp garam masala<br>1/2 tsp salt<br>1/4 tsp black pepper<br>1/4 tsp cayenne pepper (optional)<br>2 cloves garlic, minced<br>2 tbsp fresh ginger, grated<br>1 lb paneer cheese, cut into cubes<br>1 red onion, cut into chunks<br>1 bell pepper, cut into chunks<br>Wooden skewers, soaked in water for at least 30 minutes",
        substitutes: "gluten-free yogurt or use a substitute such as dairy-free coconut yogurt.",
        method: "1.	In a large bowl, combine the yogurt, paprika, cumin, coriander, turmeric, garam masala, salt, black pepper, cayenne pepper (if using), garlic, and ginger.<br>Add the paneer cubes and vegetables to the bowl, and toss until well coated with the marinade.<br>Cover the bowl and refrigerate for at least 1 hour, or up to 24 hours.<br>Preheat the oven to 400°F (200°C).<br>Thread the paneer and vegetables onto the wooden skewers, alternating between the cheese and vegetables.<br>Place the skewers on a baking sheet lined with parchment paper.<br>Bake for 15-20 minutes, or until the cheese is golden brown and the vegetables are tender.<br>Serve the paneer tikka hot with chutney or raita."
    }

    const daPB = {
        title: "Lactose-Free Bhaji Recipe",
        ingredients: "1 cup chickpea flour (also called gram flour or besan) <br> 1/2 tsp baking powder,<br> 1/2 tsp turmeric powder,1/2 tsp cumin powder,<br> 1/2 tsp coriander powder,<br> 1/4 tsp cayenne pepper,<br> 1/2 tsp salt,<br> 1/2 cup water,<br> 1 cup chopped onion,<br> 1 cup chopped potato,<br> 1 cup chopped cauliflower,<br> 1/4 cup chopped fresh cilantro",
        substitutes: "extra virgin olive oil for frying because it is dairy free",
        method: "In a large bowl, mix together the chickpea flour, baking powder, turmeric powder, cumin powder, coriander powder, cayenne pepper, and salt. Add the water and stir until a smooth batter forms. Add the chopped onion, potato, cauliflower, and cilantro to the batter and stir to combine. Heat the vegetable oil in a deep frying pan or wok over medium heat. Drop spoonful of the batter into the hot oil and fry until golden brown and crisp, about 3-4 minutes. Drain the bhaji on paper towels and serve hot with chutney or ketchup."

    }

    const daAT = {
        title: "Dairy-Free Aloo Tikki Recipe",
        ingredients: "2 cups mashed potatoes. <br> 1/2 cup chickpea flour (also called gram flour or besan. 1/4 cup rice flour. 1 tsp cumin seeds. 1/2 tsp coriander powder. 1/4 tsp turmeric powder. 1/4 tsp cayenne pepper. 1/2 tsp salt. 1/4 cup chopped fresh cilantro",
        substitutes: "extra virgin olive oil for frying because it is dairy free",
        method: "in a large bowl, mix together the mashed potatoes, chickpea flour, rice flour, cumin seeds, coriander powder, turmeric powder, cayenne pepper, salt, and cilantro until well combined. Heat the vegetable oil in a deep frying pan or wok over medium heat. Scoop up a small portion of the potato mixture and shape it into a patty. Place the patty in the hot oil and fry until golden brown and crisp, about 3-4 minutes on each side. Drain the aloo tikki on paper towels and serve hot with chutney or ketchup."
    }

    const nutVC = {
        title: "NUT FREE Vegetable Cutlets Recipe",
        ingredients: "•	2 large potatoes, peeled and boiled<br>1/2 cup green peas,<br> boiled and mashed1/2 cup carrots,<br> grated1/2 cup green beans, finely chopped<br>1/4 cup cornmeal or corn flour<br>1/4 cup bread crumbs (gluten-free if needed)<br>1 tsp ground cumin<br>1 tsp ground coriander<br>1 tsp garam masala<br>1/2 tsp turmeric powder<br>1/2 tsp red chili powder (optional)<br>Salt, <br>to taste<br>2 tbsp vegetable oil<br>2 tbsp cilantro leaves, chopped",
        substitutes: "You can use cornmeal or corn flour as a substitute for nut flour",
        method: "1.	In a large bowl, mash the boiled potatoes and green peas together.<br>Add grated carrots and finely chopped green beans to the bowl and mix well.<br>Add cornmeal or corn flour, bread crumbs, ground cumin, ground coriander, garam masala, turmeric powder, red chili powder (if using), salt, and cilantro leaves to the bowl and mix well.<br>Divide the mixture into equal portions and shape each portion into a flat cutlet.<br>Heat vegetable oil in a pan over medium heat.<br>Place the cutlets in the pan and fry on both sides until golden brown.<br>Drain the cutlets on paper towels to remove excess oil.<br>Serve the cutlets hot with mint chutney or ketchup.<br> "
    }

    const nutPP = {
        title: "Nut-Free Aloo Tikki (Potato Patties)",
        ingredients: "2 large potatoes, boiled and mashed1/2 cup frozen green peas, thawed  1/2 cup finely chopped onion1/4 cup finely chopped coriander leaves (cilantro)1 tsp grated ginger1 tsp grated garlic1 tsp ground cumin1 tsp ground coriander1/2 tsp garam masalaSalt to tasteOil for frying",
        substitutes: "1/4 cup chickpea flour and rice flour are used as a substitute for nuts.",
        method: " 1.	In a large mixing bowl, combine the mashed potatoes, chickpea flour, rice flour, green peas, onion, coriander leaves, ginger, garlic, cumin, coriander, garam masala, and salt. Mix well until the ingredients are evenly combined.Form the mixture into small patties, about 2-3 inches in diameter and 1/2 inch thick.Heat oil in a frying pan over medium heat.Fry the patties in the hot oil until golden brown on both sides, about 3-4 minutes per side.Remove the patties from the pan and place them on a paper towel-lined plate to absorb any excess oil.Serve the patties hot with chutney or sauce of your choice."
    }


    const displayRecipe = () => {
        let gluten = document.getElementById('gluten');
        let lactose = document.getElementById('lactose');
        let nuts = document.getElementById('nuts');
        let soy = document.getElementById('soy');
        let shellfish = document.getElementById('shellfish');
        let fishes = document.getElementById('fishes');



        if (gluten.checked) {
            document.querySelector('.allergyBoxes').style.display = 'grid';
        }
        if (lactose.checked) {
            document.querySelector('.allergyBoxesLac').style.display = 'grid';

        }
        if (nuts.checked) {
            document.querySelector('.allergyBoxesNut').style.display = 'grid';
        }
    }

    const Gluten = () =>{
        document.querySelector('.output').style.display = 'block'; 
    }


    return (

        <>
            <div className="allergyPage">
                <h2 style={{ padding: '40px 20px', margin: '0px 50px', fontFamily: 'League Spartan' }}><b>Which allergy are you suffering from ?</b></h2>

                <div className="AllergyInputs">
                    <form action="/action_page.php" className='form1'>
                        <input type="radio" id="gluten" name="vehicle1" value="Gluten" />
                        <label for="vehicle1" style={{ padding: '10px 10px' }}> Gluten</label><br />
                        <input type="radio" id="lactose" name="vehicle2" value="Lactose" />
                        <label for="vehicle2" style={{ padding: '10px 10px' }}> Lactose</label><br />
                        <input type="radio" id="nuts" name="vehicle3" value="Nuts" />
                        <label for="vehicle3" style={{ padding: '10px 10px' }}> Nuts</label><br />
                        <input type="radio" id="soy" name="vehicle1" value="Soy" />
                        <label for="vehicle1" style={{ padding: '10px 10px' }}> Soy</label><br />
                        <input type="radio" id="shellfish" name="vehicle2" value="Shellfish" />
                        <label for="vehicle2" style={{ padding: '10px 10px' }}> Shellfish</label><br />
                        <input type="radio" id="fishes" name="vehicle3" value="Fishes" />
                        <label for="vehicle3" style={{ padding: '10px 10px' }}> Fishes</label><br /><br />
                        {/* <input type="submit" value="Submit" /> */}
                        <button type="button" class="btn btn-lg btn-primary" onClick={displayRecipe}>Submit &#8594;</button>

                    </form>
                    <div className="allergyPhoto">
                        <img src={require('./allergies.png')} alt="loading" />
                    </div>
                </div>

                <div className="allergyBoxes">
                    <div className="card" id='card1'>
                        <img src={require('./pakora.jpeg')} alt="loading image" style={{ height: '50vh', width: "100%" }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem' }}>{gluVP.title}</h5>
                            <a className="btn btn-primary m-3" style={{ margin: 'auto' }} onClick={Gluten}>Click Here to know Recipe</a>
                        </div>
                    </div>

                    <div className="card" id='card2'>
                        <img src={require('./samosa.jpeg')} alt="loading image" style={{ height: '50vh', width: '100%' }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem' }}>{gluS.title}</h5>
                            <a className="btn btn-primary m-3" style={{ margin: 'auto' }}><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Click Here to know Recipe</Link></a>
                        </div>
                    </div>

                    <div className="card" id='card3'>
                        <img src={require('./tikka.jpeg')} alt="loading image" style={{ height: '50vh', width: '100%' }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem' }}>{gluPT.title}</h5>
                            <a className="btn btn-primary m-3">Click Here to know Recipe</a>
                        </div>
                    </div>
                </div>

                <div className="allergyBoxesLac">
                    <div className="card" id='card4'>
                        <img src={require('./tikka.jpeg')} alt="loading image" style={{ height: '50vh', width: '100%' }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem' }}>{daPB.title}</h5>
                            <a className="btn btn-primary m-3">Click Here to know Recipe</a>
                        </div>
                    </div>

                    <div className="card" id='card5'>
                        <img src={require('./tikka.jpeg')} alt="loading image" style={{ height: '50vh', width: '100%' }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem' }}>{daAT.title}</h5>
                            <button className="btn btn-primary m-3">Click Here to know Recipe</button>
                        </div>
                    </div>
                </div>

                <div className="allergyBoxesNut">
                    <div className="card" id='card6'>
                        <img src={require('./nut free VC.jpeg')} alt="loading image" style={{ height: '50vh', width: '100%' }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem' }}>{nutVC.title}</h5>
                            <a className="btn btn-primary m-3">Click Here to know Recipe</a>
                        </div>
                    </div>

                    <div className="card" id='card7'>
                        <img src={require('./NFAT.jpeg')} alt="loading image" style={{ height: '50vh', width: '100%' }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem' }}>{nutPP.title}</h5>
                            <a className="btn btn-primary m-3">Click Here to know Recipe</a>
                        </div>
                    </div>
                </div>

                <div className="output" style={{display:'none',margin:'100px',padding:'25px'}}>
                    <h2 id="headop" style={{color:'red',textAlign:'center',margin:'20px'}}><b>{gluVP.title}</b></h2>
                    <h4 id="ingop" style={{color:'green',textAlign:'center',margin:'20px'}}>{gluVP.ingredients}</h4>
                    <h4 id="subsop" style={{color:'orange',textAlign:'center',margin:'20px'}}>{gluVP.substitutes}</h4>
                    <h4 id="methodop" style={{color:'blue',textAlign:'center',margin:'20px'}}>{gluVP.substitutes}</h4>
                </div>
            </div>
        </>
    )
}

export default Allergy
