import React from 'react'
import './recipe.css'

function Recipe() {
  return (
 <>

 <div className="recipe-grid">
    <div>
        <div className="card"   style={{ width: "18rem" }}>
            <img src="\healthy1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Paleo Grilled Chicken Cobb Salad</h5>
                    <p className="card-text">Dive into a bowl of freshness with this Paleo Grilled Chicken Cobb Salad topped with a homemade Honey Dijon Dressing! Perfect for a healthy lunch or dinner.</p>
                    <a href="/" className="btn btn-primary">Add to list</a>
                </div>
        </div>
</div>

<div >
    <div className="card"   style={{ width: "18rem",}}>
        <img src="\healthy2.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Bacon Fried Rice</h5>
                <p className="card-text">This savory bacon fried rice is packed with flavors and textures. I'm talking crispy, smoky bacon, tender vegetables, fluffy eggs, and an umami-rich sauce.</p>
                <a href="/" className="btn btn-primary">Add to list</a>
            </div>
    </div>
</div>

<div>
    <div className="card"   style={{ width: "18rem" }}>     
        <img src="\healthy3.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">White Balsamic Vinaigrette</h5>
                <p className="card-text">Make your own delicious homemade white balsamic vinaigrette. This is a light and refreshing salad dressing that goes on practically any salad.</p>
                <a href="/" className="btn btn-primary">Add to list</a>
            </div> 
    </div>
</div>

<div >
    <div className="card"   style={{ width: "18rem" }}>     
        <img src="\soup1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Vegetable Soup</h5>
                <p className="card-text">Vegetable Soup - healthy, easy, and so much more flavorful than canned vegetable soup! Easy lunch or weeknight dinner on cold days!</p>
                <a href="/" className="btn btn-primary">Add to list</a>
            </div> 
    </div>
</div>

<div>
    <div className="card"   style={{ width: "18rem" }}>      
        <img src="\soup2.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Chicken Soup</h5>
                <p className="card-text">Growing up, chicken soup in our house always came from a can. My mom would pour it into a pot, add some water, and call it dinner. Don't get me wrong - I</p>
                <a href="/" className="btn btn-primary">Add to list</a>
            </div>
    </div>
</div>

<div >
    <div className="card"   style={{ width: "18rem" }}>      
        <img src="\winter1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Matar Ka Nimona</h5>
                <p className="card-text">Matar ka Nimona, a UP style Indian curry made with fresh green peas, potatoes and very minimal spices. Tasty soupy curry, this is perfect to pair with rice or chapati/paratha. It takes just 30 minutes to cook it.</p>
                <a href="/" className="btn btn-primary">Add to list</a>
            </div>  
   </div>
</div>

<div>
        <div className="card"   style={{ width: "18rem" }}>      
            <img src="\winter2.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Cranberry Balsamic Roast Beef</h5>
                    <p className="card-text">A winter pot roast with a balsamic cranberry sauce!</p>
                    <a href="/" className="btn btn-primary">Add to list</a>
                </div>
  
        </div>
</div>

<div >
    <div className="card" style={{ width: "18rem" }}>     
        <img src="\veg1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Mexican Paneer & Corn Sliders</h5>
                <p className="card-text">Mexican Paneer & Corn Sliders blend Indian and Mexican flavors with spicy paneer, roasted corn, slaw, chutney, and cheese, all baked to perfection for an easy, delicious treat!</p>
                <a href="/" className="btn btn-primary">Add to list</a>
            </div>  
    </div>
</div>

<div>
    <div className="card"   style={{ width: "18rem" }}>     
        <img src="\veg2.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Paneer Pasanda</h5>
                <p className="card-text">Paneer Pasanda that tastes much better than your favorite restaurant! Spiced paneer sandwiches are pan fried and served with a creamy gravy.</p>
                <a href="/" className="btn btn-primary">Add to list</a>
            </div>
    </div>
</div>

<div >
    <div className="card"   style={{ width: "18rem" }}>     
        <img src="\veg3.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Kaju Curry Recipe</h5>
                <p className="card-text">Indulge in our Kaju Curry recipe. It's rich, creamy, mildly spicy. Create a new favorite side dish with The Cook's Cook!</p>
                <a href="/" className="btn btn-primary">Add to list</a>
            </div>  
   </div>
</div>

<div className="card1  ">
    <div className="card-body text-center">
        <button className="plus">+</button>
        <p className="mt-2">Add Recipe</p>
    </div>
</div>
</div>

 </>
  )
}

export default Recipe
