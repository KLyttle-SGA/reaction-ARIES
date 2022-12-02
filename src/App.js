import React from 'react';

import Title from './components/Title.jsx';
import TitleButtons from './components/TitleButtons.jsx';
import Navbar from './components/Navbar.jsx';
import Restaurants from './components/Restaurants.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
	<div>
		<Navbar />
		<Title />
		<TitleButtons />
		<Restaurants />
		<Footer />
	</div>
  );
};

export default App;
