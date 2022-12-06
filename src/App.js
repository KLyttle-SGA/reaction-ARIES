import React from 'react';
import Title from './components/Title.jsx';
import TitleButtons from './components/TitleButtons.jsx';
import Navbar from './components/Navbar.jsx';
import Restaurants from './components/Restaurants.jsx';
import Footer from './components/Footer.jsx';

function App() {

	const [isCardCollapsed, setIsCardCollapsed] = React.useState(false)
	function handleCardCollapsed() {
		setIsCardCollapsed(!isCardCollapsed) 
	}

  return (
	<div>
		<Navbar handleCardCollapsed={handleCardCollapsed} isCardCollapsed={isCardCollapsed} />
		<Title />
		<TitleButtons />
		<Restaurants isCardCollapsed={isCardCollapsed} />
		<Footer />
	</div>
  );
};

export default App;
