const PizzaSubs = [
    {
        key: 1,
        name: "IVP",
		address: "207 W High St, Ebensburg",
		number: "(814) 472-2202",
		description: "A favorite of residents all throughout Ebensburg from the SGA offices to the local students hanging out before buying a vape on the block over. It's got a very wide selection with everything from pizza to salad to wings.",
		review: "Can't really go wrong with a good order from IVP, they are always reliable with the quality of their food. The salads are a little pricey, but our testers conclude they are a highlight of the menu.",
		menu: "https://italianvillage-ebensburg.foodtecsolutions.com/ordering/intro",
		order: "https://italianvillage-ebensburg.foodtecsolutions.com/ordering/intro",
		website: "https://italianvillagepizza.com/"
    },
	{
		key: 2,
        name: "Vito's",
		address: "207 W High St, Ebensburg",
		number: "(814) 886-4145",
		description: "Just across the road from the Cresson Railroad Park stands everyone's favorite money laundering scheme, Vito's \"Cash-Only\" Restaurant & Pizzeria. Bring in your hard-earned green paper and you'll be treated to their pizza, stromboli, subs, and much more.",
		review: "Another regular choice of the office, especially handy for whenever you have a famished grandmother in intense need of a good stromboli.",
		menu: "https://www.zmenu.com/vitos-restaurant-and-pizzeria-cresson-online-menu/",
		order: "",
		website: ""
	},
	{
		key: 3,
		name: "G.I Dough",
		address: "881 Hills Plaza St. 505, Ebensburg",
		number: "(814) 318-8505",
		description: "According to our professional pizza tasters, G.I. Dough is home to the best pizza around town. It's very thick and very filling, be ready to save some of that pizza for leftovers.",
		review: "As stated before, if you're coming for anything, you're probably coming for the pizza. Everything else on their menu is fairly meh. Under no circumstances should you try the burgers.",
		menu: "https://www.gidoughmenu.com/",
		order: "https://slicelife.com/restaurants/pa/ebensburg/15931/g-i-dough/menu?utm_campaign=direct_websites",
		website: "https://www.gidoughmenu.com/"
	},
	{
		key: 4,
        name: "Rik n' Nik's",
		address: "220 West High St, Ebensburg",
		number: "(814) 472-6006",
		description: "Rik n' Nik's is the local pizza joint home to all of the good food... except for bread, and by extension the pizza. Quite the odd combination, wouldn't you say? Only few locations can rival this.",
		review: "Pizza is some of the worst around, but what they lack in bread they make up for in wings, salads, and other Italian foods that don't involve copious amounts of bread.",
		menu: "https://weborder7.microworks.com/riknniks/Groups",
		order: "https://weborder7.microworks.com/riknniks/Groups",
		website: "http://www.rik-n-niks.com/"
    },
	{
		key: 5,
		name: "Pizza Hut",
		address: "943 W High St, Ebensburg",
		number: "(814) 472-7461",
		description: "Whenever you see that iconic red roof, you know you're in for that classic mediocre pizza and depression, yet many will choose to walk into that building regardless.",
		review: "It is, in actuality, really easy to out-pizza the Hut. Imagine McDonalds if it made subpar pizza.",
		menu: "https://locations.pizzahut.com/pa/ebensburg/943-w-high-st",
		order: "https://locations.pizzahut.com/pa/ebensburg/943-w-high-st",
		website: "https://www.pizzahut.com"
    },
	{
		key: 6,
		name: "Fox's Pizza",
		address: "1104 West High St, Ebensburg",
		number: "(814) 419-8299",
		description: "A great man once said this about Fox's Pizza, \"They move around so often because they hope you've forgotten about them and the 'new pizza place' is intriguing.\"",
		review: "About the same quality-wise as Pizza Hut or Rik n' Niks, Dave notes it to be a total salt-fest that belongs at kids' parties.",
		menu: "https://www.foxspizza.com/wp-content/uploads/2019/12/menu-4-1.pdf",
		order: "https://foxspizza.arrowpos.com/ebensburg",
		website: "https://www.foxspizza.com/"
	},
	{
		key: 7,
		name: "Best Way",
		address: "169 Mini Mall Rd, Ebensburg",
		number: "(814) 471-0300",
		description: "If you haven't heard of Best Way Pizza before, may I introduce you to a completely foreign concept... 4 sides, 4 angles, ALL SQUARE.",
		review: "Not always a first choice in these parts, but it's pretty good pizza even if it is a little, well, square.",
		menu: "https://bestwaypizza.e-tab.com/bestwaypizzaeb/venue/60e5c9aca462250dd5ff0fdd/menu",
		order: "https://bestwaypizza.e-tab.com/bestwaypizzaeb/venue/60e5c9aca462250dd5ff0fdd/menu",
		website: "https://bestwaypizza.e-tab.com/bestwaypizzaeb/venue/60e5c9aca462250dd5ff0fdd/menu"
	},
	{
		key: 8,
		name: "Clark Powell's",
		address: "125 S Center St, Ebensburg",
		number: "(814) 472-8899",
		description: "Right as you come into Ebensburg you can find this quaint little place called Clark Powell's with some wacky little pizzas.",
		review: "Decent food, just make sure not to rub your hands all over the pizza trays when they take them out to you.",
		menu: "http://places.singleplatform.com/clark-powells-restaurant/menu",
		order: "",
		website: ""
	},
	{
		key: 9,
		name: "Smithmeyer's",
		address: "163 St. Mary St, Loretto",
		number: "(814) 472-8577",
		description: "Local distributor of THE MEATS and MORE MEATS and also subs and maybe even other things. If you're looking for a handy couple of subs to feed to family you can always look to Smithmeyer's.",
		review: "Very popular around these parts for their subs, you'll usually find people ordering some for the family if they can't be bothered to cook. High quality subs for the whole gang!",
		menu: "https://www.smithmyers-superette.com/",
		order: "https://www.smithmyers-superette.com/",
		website: "https://www.smithmyers-superette.com/"
	},
	{
		key: 10,
		name: "Subway",
		address: "929 W High St, Ebensburg",
		number: "(814) 472-4929",
		description: "Absolute brand empire with limitless possibilities, giving you the option to build your own ingredient by ingredient and watch it be handcrafted by a depressed minimum wage employee.",
		review: "Not as good with sub quality as you'd get from Smithmeyer obviously, but all the variety you'll need and loads of options. Make sure to get some cookies on your way out too!",
		menu: "https://order.subway.com/en-us/menunutrition/menu",
		order: "https://order.subway.com/en-US/deliverylocator",
		website: "https://order.subway.com/en-US"
	}
];

console.log(PizzaSubs);
console.log(JSON.stringify(PizzaSubs));

export default PizzaSubs;
