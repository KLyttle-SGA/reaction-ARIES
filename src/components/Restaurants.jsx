import PizzaSubs from '../components/RestaurantArrays/PizzaSubs.js';
import BarsDiners from '../components/RestaurantArrays/BarsDiners.js';
import Asian from '../components/RestaurantArrays/Asian.js';
import FastFood from '../components/RestaurantArrays/FastFood.js';
import Treats from '../components/RestaurantArrays/Treats.js';
import Coffee from '../components/RestaurantArrays/Coffee.js';
import CreateCard from '../components/Card.jsx';

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

function Restaurants() {
	return (
		<div>
		<span id="pizza-sub"></span>
		<h1 className="genre-titles" id="first-title">PIZZA & SUBS</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">
				{PizzaSubs.map(CreatePSCard)}	
			</div>
		</section>

		<span id="bars-diners"></span>
		<h1 className="genre-titles">BARS & DINERS</h1>
		<section className="restaurant-cards">
			  <div className="row restaurants">
				 {BarsDiners.map(CreatePSCard)}
			</div>
		</section>

		<span id="asian"></span>
		<h1 className="genre-titles">ASIAN</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">
				  {Asian.map(CreatePSCard)}
			</div>
		</section>

		<span id="fast-food"></span>
		<h1 className="genre-titles">FAST FOOD</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">
				  {FastFood.map(CreatePSCard)}
			</div>
		</section>

		<span id="treats"></span>
		<h1 className="genre-titles">TREATS</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">
				  {Treats.map(CreatePSCard)}
			</div>
		</section>

		<span id="coffee"></span>
		<h1 className="genre-titles">COFFEE</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">
				  {Coffee.map(CreatePSCard)}
			</div>
			</section>
		</div>
	);
}

export default Restaurants;