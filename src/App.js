import React from 'react';
import CreateCard from './components/CardTypes/Card.jsx';
import CreateCardDO from './components/CardTypes/CardDO.jsx';
import CreateCardDOW from './components/CardTypes/CardDOW.jsx';
import Footer from './components/Footer.jsx';
import PizzaSubRestaurants from './components/PizzaSubRestaurants.js';

function CreatePSCard(psItem) {
	return (
		<CreateCard
			name={psItem.name}
			address={psItem.address}
			number={psItem.number}
			description={psItem.description}
			review={psItem.review}
			menu={psItem.menu}
			order={psItem.order}
			website={psItem.website}
		/>
	)
}

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

				{PizzaSubRestaurants.map(CreatePSCard)}

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
