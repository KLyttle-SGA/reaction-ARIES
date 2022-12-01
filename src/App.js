import React from 'react';
import CreateCard from './components/CardTypes/Card.jsx';
import CreateCardDO from './components/CardTypes/CardDO.jsx';
import CreateCardDW from './components/CardTypes/CardDW.jsx';
import CreateCardDOW from './components/CardTypes/CardDOW.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
		<div>
		<div className="aries-nav">
			<a href="#title" className="btn btn-outline-primary nav-button" type="button">
				<i className="fa-solid fa-caret-up"></i>
			</a>
		</div>

		<section id="title">
			<div className="title-container">
				<h1 id="title-text">A R I E S</h1>
				<p className="subtitle"><span className="sub-bold">A</span>GGREGATION ⠀OF⠀
					<span className="sub-bold">R</span>ESTAURANTS ⠀FOR⠀
					<span className="sub-bold">I</span>NSATIABLE⠀
					<span className="sub-bold">E</span>MPLOYEES ⠀OF⠀
					<span className="sub-bold">S</span>GA
				</p>
			</div>
		</section>

		<section id="title-buttons">

			<div className="row restaurant-genre">

				<div button type="button" className="restaurant-column col-lg-6">
					<a href="#pizza-sub" className="d-grid gap-2 food2">
						<button className="pizza-sub-btn btn btn-primary py-4 genre-button" type="button">Pizza & Subs</button>
					</a>
				</div>
				<div button type="button" className="restaurant-column col-lg-6">
					<a href="#bars-diners" className="d-grid gap-2 food2">
						<button className="bars-diners-btn btn btn-primary py-4 genre-button" type="button">Bars & Diners</button>
					</a>
				</div>
				<div button type="button" className="restaurant-column col-lg-6">
					<a href="#asian" className="d-grid gap-2 food2">
						<button className="asian-btn btn btn-primary py-4 genre-button" type="button">Asian</button>
					</a>
				</div>
				<div button type="button" className="restaurant-column col-lg-6">
					<a href="#fast-food" className="d-grid gap-2 food2">
						<button className="fast-food-btn btn btn-primary py-4 genre-button" type="button">Fast Food</button>
					</a>
				</div>
				<div button type="button" className="restaurant-column col-lg-6">
					<a href="#treats" className="d-grid gap-2 food2">
						<button className="treats-btn btn btn-primary py-4 genre-button" type="button">Treats</button>
					</a>
				</div>
				<div button type="button" className="restaurant-column col-lg-6">
					<a href="#coffee" className="d-grid gap-2 food2">
						<button className="coffee-btn btn btn-primary py-4 genre-button" type="button">Coffee</button>
					</a>
				</div>

				<img className="map" src="images/map.png" alt="map-img"/>

			</div>
		</section>

		<span id="pizza-sub"></span>
		<h1 className="genre-titles" id="first-title">PIZZA & SUBS</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

				<div className="col-lg-6 col-md-12 res-card">
					<CreateCard
					name="Italian Village Pizza"
					address="207 W High St, Ebensburg, PA 15931"
					number="(814) 472-2202"
					description="A favorite of residents all throughout Ebensburg from the SGA offices to the local students hanging out before buying a vape on the block over. It's got a very wide selection with everything from pizza to salad to wings."
					review="Can't really go wrong with a good order from IVP, they are always reliable with the quality of their food. The salads are a little pricey, but our testers conclude they are a highlight of the menu."
					menu="https://italianvillage-ebensburg.foodtecsolutions.com/ordering/intro"
					order="https://italianvillage-ebensburg.foodtecsolutions.com/ordering/intro"
					website="https://italianvillagepizza.com/"
					/>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<CreateCardDOW
						name="Vito's"
						address="207 W High St, Ebensburg, PA 15931"
						number="(814) 472-2202"
						  description="Just across the road from the Cresson Railroad Park stands everyone's favorite money laundering scheme, Vito's &quot;Cash-Only&quot; Restaurant & Pizzeria. Bring in your hard-earned green paper and you'll be treated to their pizza, stromboli, subs, and much more."
						review="Another regular choice of the office, especially handy for whenever you have a famished grandmother in intense need of a good stromboli."
						menu="https://www.zmenu.com/vitos-restaurant-and-pizzeria-cresson-online-menu/"
					/>
				 </div>

				 <div className="col-lg-6 col-md-12 res-card">
					  <CreateCard
						  name="G.I Dough"
						  address="881 Hills Plaza St. 505, Ebensburg, PA 15931"
						  number="(814) 318-8505"
						  description="According to our professional pizza tasters, G.I. Dough is home to the best pizza around town. It's very thick and very filling, be ready to save some of that pizza for leftovers."
						  review="As stated before, if you're coming for anything, you're probably coming for the pizza. Everything else on their menu is fairly meh."
						  menu="https://www.gidoughmenu.com/"
						  order="https://www.gidoughmenu.com/"
						  website="https://www.gidoughmenu.com/"
					  />
				  </div>

				  <div className="col-lg-6 col-md-12 res-card">
					  <CreateCard
						  name="Rik n' Nik's"
						  address="220 West High St, Ebensburg, PA 15931"
						  number="(814) 472-6006"
						  description="Rik n' Nik's is the local pizza joint home to all of the good food... except for good pizza. Quite the odd combination, wouldn't you say? Only few locations can rival this."
						  review="Pizza is some of the worst around, but what they lack in pizza they make up for in wings, salads, and other foods that aren't pizza."
						  menu="https://weborder7.microworks.com/riknniks/Groups"
						  order="https://weborder7.microworks.com/riknniks/Groups"
						  website="http://www.rik-n-niks.com/"
					  />
				  </div>

				  <div className="col-lg-6 col-md-12 res-card">
					  <CreateCard
						  name="Pizza Hut"
						  address="943 W High St, Ebensburg, PA 15931"
						  number="(814) 472-7461"
						  description="Whenever you see that iconic red roof, you know you're in for that classic mediocre pizza and depression, yet many will choose to walk into that building regardless."
						  review="It is, in actuality, really easy to out-pizza the Hut. Imagine McDonalds if it made subpar pizza."
						  menu="https://locations.pizzahut.com/pa/ebensburg/943-w-high-st"
						  order="https://locations.pizzahut.com/pa/ebensburg/943-w-high-st"
						  website="https://www.pizzahut.com/"
					  />
				  </div>

				  <div className="col-lg-6 col-md-12 res-card">
					  <CreateCard
						  name="Fox's Pizza"
						  address="1104 West High St, Ebensburg, PA 15931"
						  number="(814) 419-8299"
						  description="A great man once said this about Fox's Pizza, &quot;They move around so often because they hope you&apos;'ve forgotten about them and the &apos;new pizza place&apos; is intriguing.&quot;"
						  review="About the same quality-wise as Pizza Hut or Rik n' Niks, Dave notes it to be a total salt-fest that belongs at kids' parties."
						  menu="https://www.foxspizza.com/wp-content/uploads/2019/12/menu-4-1.pdf"
						  order="https://foxspizza.arrowpos.com/ebensburg"
						  website="https://www.foxspizza.com/"
					  />
				  </div>

			</div>

		</section>

		<span id="bars-diners"></span>
		<h1 className="genre-titles">BARS & DINERS</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

			</div>
		</section>

		<span id="asian"></span>
		<h1 className="genre-titles">ASIAN</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

			</div>
		</section>

		<span id="fast-food"></span>
		<h1 className="genre-titles">FAST FOOD</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

			</div>
		</section>

		<span id="treats"></span>
		<h1 className="genre-titles">TREATS</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

			</div>
		</section>

		<span id="coffee"></span>
		<h1 className="genre-titles">COFFEE</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

			</div>
		</section>

		<Footer />

		</div>
  );
};

export default App;
