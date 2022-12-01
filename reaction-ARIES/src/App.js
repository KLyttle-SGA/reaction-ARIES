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
				description="Just across the road from the Cresson Railroad Park stands everyone's favorite money laundering scheme, Vito's Restaurant & Pizzeria. Bring in your hard-earned green paper and you'll be treated to their pizza, stromboli, subs, and much more."
				review="Another regular choice of the office, especially handy for whenever you have a famished grandmother in intense need of a good stromboli."
				menu="https://www.zmenu.com/vitos-restaurant-and-pizzeria-cresson-online-menu/"
			/>
			</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>G.I. Dough</h2>
							<p>881 Hills Plaza St. 505, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 318-8505</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							According to our professional pizza tasters, G.I. Dough is home to the best pizza around town. It's very thick and very filling, be ready to save some of that pizza for leftovers.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							As stated before, if you're coming for anything, you're probably coming for the pizza. Everything else on their menu is fairly meh.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.gidoughmenu.com/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.gidoughmenu.com/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.gidoughmenu.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Rik n' Nik's</h2>
							<p>220 West High St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-6006</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Rik n' Nik's is the local pizza joint home to all of the good food... except for good pizza. Quite the odd combination, wouldn't you say? Only few locations can rival this.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Pizza is some of the worst around, but what they lack in pizza they make up for in wings, salads, and other foods that aren't pizza.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://weborder7.microworks.com/riknniks/Groups" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://weborder7.microworks.com/riknniks/Groups" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="http://www.rik-n-niks.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Pizza Hut</h2>
							<p>943 W High St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-7461</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Whenever you see that iconic red roof, you know you're in for that classNameic mediocre pizza and depression, yet many will choose to walk into that building regardless.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							It is, in actuality, really easy to out-pizza the Hut. Imagine McDonalds if it made subpar pizza.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://locations.pizzahut.com/pa/ebensburg/943-w-high-st" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://locations.pizzahut.com/pa/ebensburg/943-w-high-st" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.pizzahut.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Fox's Pizza</h2>
							<p>1104 West High St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 419-8299</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							<p>A great man once said this about Fox's Pizza, "They move around so often because they hope you've forgotten about them and the 'new pizza place' is intriguing.</p>
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							About the same quality-wise as Pizza Hut or Rik n' Niks, Dave notes it to be a total salt-fest for kids' parties.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.foxspizza.com/wp-content/uploads/2019/12/menu-4-1.pdf" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://foxspizza.arrowpos.com/ebensburg" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.foxspizza.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Best Way</h2>
							<p>169 Mini Mall Rd, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 471-0300</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							If you haven't heard of Best Way Pizza before, may I introduce you to a completely foreign concept... 4 sides, 4 angles, ALL SQUARE.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Not always a first choice in these parts, but it's pretty good pizza even if it is a little, well, square.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://bestwaypizza.e-tab.com/bestwaypizzaeb/venue/60e5c9aca462250dd5ff0fdd/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://bestwaypizza.e-tab.com/bestwaypizzaeb/venue/60e5c9aca462250dd5ff0fdd/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Clark Powell's</h2>
							<p>125 S Center St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-8899</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Right as you come into Ebensburg you can find this quaint little place called Clark Powell's with some wacky pizzas.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Decent food, just make sure not to rub your hands all over the pizza trays when they take them out to you.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="http://places.singleplatform.com/clark-powells-restaurant/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Smithmeyer's</h2>
							<p>163 St. Mary St, Loretto, PA 15940 <span className="separation-bar"> | </span> (814) 472-8577</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Local distributor of THE MEATS and MORE MEATS and also subs and maybe even other things. If you're looking for a handy couple of subs to feed to family you can always look to Smithmeyer's.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							'Cause maybe if we screw up this planet enough, they won't want it anymore! Is this my espresso machine? Wh-wha
							clock is ticking. We gotta burn the rain forest, dump toxic wast
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.smithmyers-superette.com/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.smithmyers-superette.com/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.smithmyers-superette.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Subway</h2>
							<p>929 W High St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-4929</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Absolute brand empire with limitless possibilities, giving you the option to build your own ingredient by ingredient and watch it be handcrafted by a depressed minimum wage employee.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Not as good with sub quality as you'd get from Smithmeyer obviously, but all the variety you'll need and loads of options. Make sure to get some cookies on your way out too!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://order.subway.com/en-us/menunutrition/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://order.subway.com/en-US/deliverylocator" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://order.subway.com/en-US" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

		</section>

		<span id="bars-diners"></span>
		<h1 className="genre-titles">BARS & DINERS</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Applebee's</h2>
							<p>222 Jamesway Rd, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-4239</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							The home of sometimes free cheese sticks and a multitude of humorous waitress stories, Applebee's is one of America's premier family chain diners and bars.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Decent food and great cheese sticks, inspired one of our professional taster's cheese stick tier list. Always make sure to get a few plates for the family.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.applebees.com/en/order/ordermethod?StoreNumber=77098" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.applebees.com/en/order/ordermethod?StoreNumber=77098" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.applebees.com/en" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Station House</h2>
							<p>807 W High St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-8911</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							This station got tired of saving people from fires and started serving fire pretzels and hosting your grandparents' and teachers' trivia games instead.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Pretty mediocre food, but their pretzels are some of the best in town. We fear the office would never stop ordering them if they weren't closed Tuesdays.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.ourstationhouse.com/menu/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Pour on Center</h2>
							<p>102 S Center St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-4601</p>
						</div>
							<div className="cards-section-header">
								<p>Description</p>
							</div>
						<div className="description flexFont">
							Pour? More like, Poor after you dine on something at this fancy schmancy place. Good selection and a bar for all those who agree with their words, "Craft beer. It's not alcoholism, it's a hobby."
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Food here is actually pretty good even if it's a bit more expensive than some other diners and there's quite a bit of variety with meals.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://pouroncenter.com/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://pouroncenter.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Kosta's</h2>
							<p>3135 New Germany Rd #5, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-8883</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Always ready to give you access to a great breakfast bar with all the breakfast food you'll ever need, 25 cent peppermint patties, and some excellent meals to boot.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							As you can tell, food is generally pretty good. Definitely make a visit if you're a die-hard fan of breakfast.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="http://www.kostasrestaurant.com/menu.html" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="http://www.kostasrestaurant.com" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Hoss's</h2>
							<p>4343 Admiral Peary Hwy, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 946-5115</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							It's got a salad bar and that's about the only thing going for it, not much else to write home about.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Food is generally mediocre, most would rather eat someplace else. Perfect for threatening your kids if they can't decide where to eat.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://hosss.com/menu/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://order.online/business/hoss&apos;-steak-and-sea-house-228870/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://hosss.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>La Fiesta</h2>
							<p>4554 Admiral Peary Hwy, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-8004</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Imagine going up against giants like Taco Bell and ending up with way more real, authentic Mexican food.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://themenustar8.com/webspace/menus.php?code=orderlafiestamexicanbarandgrill.com" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://themenustar8.com/webspace/menus.php?code=orderlafiestamexicanbarandgrill.com" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="http://orderlafiestamexicanbarandgrill.com" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Off the Rak</h2>
							<p>3047 New Germany Rd, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 471-1725</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.allmenus.com/pa/ebensburg/754147-off-the-rak/menu/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://themenustar8.com/webspace/menus.php?code=orderlafiestamexicanbarandgrill.com" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="http://orderlafiestamexicanbarandgrill.com" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Everyday Gourmet</h2>
							<p>204 W High St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-1205</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Has changed a lot over the years, reopened and remodelled after the end of the pandemic.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.everydaygourmetllc.com/menu/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.everydaygourmetllc.com" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Castle Pub</h2>
							<p>122 N Center St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 471-2977</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.restaurantji.com/pa/ebensburg/the-castle-pub-/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Loretto Pub</h2>
							<p>196 St Mary St, Loretto, PA 15940 <span className="separation-bar"> | </span> (814) 471-0222</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://foursquare.com/v/loretto-pub--grill/4bc158f9abf49521b20ac193/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Spanky's Tavern</h2>
							<p>199 St Mary St, Loretto, PA 15940 <span className="separation-bar"> | </span> (814) 419-8014</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.menupix.com/pennsylvania/restaurants/340814/Spankys-Cafe-Loretto-PA" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		</section>

		<span id="asian"></span>
		<h1 className="genre-titles">ASIAN</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Wasabi</h2>
							<p>881 Hills Plaza Suite 555, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 419-8222</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=32d6aa5a-60a5-4248-9fa2-e4888a828b43" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=32d6aa5a-60a5-4248-9fa2-e4888a828b43" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://wasabihibachiandsushi.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Little Tokyo</h2>
							<p>2720 Plank Rd, Altoona, PA 16601 <span className="separation-bar"> | </span> (814) 472-7461</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://order.mealkeyway.com/merchant/4366675939597a39724a4341544678493372443955673d3d/main" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://order.mealkeyway.com/merchant/4366675939597a39724a4341544678493372443955673d3d/main" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.littletokyopa.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Aki</h2>
							<p>267 Park Hills Plaza, Altoona, PA 16602 <span className="separation-bar"> | </span> (814) 942-2118</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://order.aki2118.com/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://akialtoona.weebly.com/menu.html" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://akialtoona.weebly.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>


				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>New China</h2>
							<p>7447 Admiral Peary Hwy, Cresson, PA 16630 <span className="separation-bar"> | </span> (814) 886-5689</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="http://www.restaurantji.com/pa/cresson/new-china-/menu/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Hong Xin Garden</h2>
							<p>124 W High St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-6688</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							They say the road to hell is paved with good intentions, but whoever said that was a dirty, dirty liar. It's actually paved with Chinese food that our professional tasters are physically unable to swallow down.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							On behalf of Dave's taste buds, we humbly request that you avoid Hong Xin Garden. If you're about to die all alone in the middle of the desert and it's the only thing around for hundreds of miles, attempt starvation instead. It would be preferrable.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.restaurantji.com/pa/ebensburg/hong-xin-garden-/menu/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		</section>

		<span id="fast-food"></span>
		<h1 className="genre-titles">FAST FOOD</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>McDonald's</h2>
							<p>4374 Admiral Peary Hwy, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 419-8222</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							You see those golden arches and you know you're in for some consistent processed food. It's the largest fast food chain in the world, you all know it.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							It's McDonalds, it's okay for when you're driving through somewhere unfamiliar and gotta find something. Unless it's fresh fries or McFlurries, in which case walk right through their doors.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.mcdonalds.com/us/en-us/full-menu.html" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.mcdonalds.com/us/en-us.html" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.mcdonalds.com/us/en-us.html" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Wendy's</h2>
							<p>842 Hills Plaza, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-4619</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							A career that's run in the Stock family for generations, we at SGA are very familiar with Dave's famous chops, square patties, and ice cream frosties.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Wendy's hasn't gotten much better over the years, there's been quite a few odd changes with the food there recently. New worse buns and fries and even the frosties have been a little off.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://order.wendys.com/categories?site=menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://order.wendys.com/location" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.wendys.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Kentucky Fried Chicken</h2>
							<p>4490 Admiral Peary Hwy, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 419-7008</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Just off the highway next to Starbucks and AT&T sits a favorite of the great people of Nippon, the colonel's famous fried chicken.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Now, I may be a little biased as a part time KFC employee, but the chicken is leagues better than the chicken you see at any other fast food chain around here.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.kfc.com/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.kfc.com/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.kfc.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Burger King</h2>
							<p>285 Jamesway Rd, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-5194</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							We've got the court jester, the princess, and the queen, and the royal farmer all accounted for, but what of the king of fast food?
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Ironically, the King always seems to be dead last in discussions on the fast food kingdom outside of their Whoppers, onion rings, and more varied fries.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.bk.com/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.bk.com/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.bk.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Taco Bell</h2>
							<p>4482 Admiral Peary Hwy, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 419-4992</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							I'm at the Pizza Hut. I'm at the Taco Bell. I'm at the combination no Pizza Hut and Taco Bell. Everyone knows Taco Bell, America's biggest taco chain.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Mediocre tacos, not much else. La Fiesta is right down the street if you're looking for Mexican food instead of "Mexican" "food".
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.tacobell.com/food" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.tacobell.com/food" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.tacobell.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Dairy Queen: Grill & Chill</h2>
							<p>267 Park Hills Plaza, Altoona, PA 16602 <span className="separation-bar"> | </span> (814) 419-8233</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Formerly the Dairy Queen, her empire has slowly expanded over the last few years. The mad monarch has invaded the lands of Fastfoodia with a vengeance.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Pretty average, there's definitely other restaurants you'd probably consider for fast food over Dairy Queen. Usually short-staffed.
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.dairyqueen.com/en-us/menu/food/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.dairyqueen.com/en-us/order" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.dairyqueen.com/en-us/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Sheetz</h2>
							<p>818 W High St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 471-6750</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							It's everywhere, there's two on every street in central Pennsylvania, you can never escape Sheetz's
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							"They may make good food, but at the expense of humanity. If you want to know if slavery still exists, look no further." - Mitsuri Kanroji
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://orders.sheetz.com/order/information" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://orders.sheetz.com/order/information" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.sheetz.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		</section>

		<span id="treats"></span>
		<h1 className="genre-titles">TREATS</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>The Meadows</h2>
							<p>169 Mini Mall Rd, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-2003</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://meadowsfrozencustard.com/menu/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://meadowsfrozencustard.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Mid's Candy</h2>
							<p>3135 New Germany Rd #41, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 472-6546</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.midscandy.com/" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" className="btn btn-primary-disabled new-buttons disabled">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.midscandy.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Krispy Kreme</h2>
							<p>3680 Benjamin Franklin Hwy, Belsano, PA 15922 <span className="separation-bar"> | </span> (814) 749-7889</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.krispykreme.com/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.krispykreme.com/shop/order-start" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.krispykreme.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		</section>

		<span id="coffee"></span>
		<h1 className="genre-titles">COFFEE</h1>
		<section className="restaurant-cards">
			<div className="row restaurants">

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Starbucks</h2>
							<p>4474 Admiral Peary Hwy, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 475-2163</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							If anti-worker practices and poor treatment is your jam, be ready to pour your savings into stupidly intricate caffeinated drinks.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.starbucks.com/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.starbucks.com/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.starbucks.com/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-lg-6 col-md-12 res-card">
					<div className="food-page">
						<div className="restaurant-title">
							<h2>Dunkin' Donuts</h2>
							<p>542 S Center St, Ebensburg, PA 15931 <span className="separation-bar"> | </span> (814) 203-4084</p>
						</div>
						<div className="cards-section-header">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							America runs, walks, works, and sleeps on Dunkin's coffee and donuts.
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							Uh oh! It seems our professional tasters have not gathered sufficient data on this location yet!
						</div>

						<div className="liquid-container">
							<div className="row content">
								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.dunkindonuts.com/en/menu" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-scroll"></i>
											<br/>
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.dunkindonuts.com/en/dunkin-delivers" className="btn btn-primary new-buttons">
											<i className="fa-solid fa-truck-ramp-box"></i>
											<br/>
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-4">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href="https://www.dunkindonuts.com/en/" className="btn btn-primary new-buttons">
											<i className="fa-regular fa-window-maximize"></i>
											<br/>
											<p>WEB</p>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		</section>

		<Footer />

		</div>
  );
};

export default App;
