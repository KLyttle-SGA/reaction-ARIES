import React from 'react';
import Title from './components/Title.jsx';
import TitleButtons from './components/TitleButtons.jsx';
import Navbar from './components/Navbar.jsx';
import Restaurants from './components/Restaurants.jsx';
import Footer from './components/Footer.jsx';

function App() {

	const [isCardCollapsed, setIsCardCollapsed] = React.useState(false)
	function handleCardCollapse() {
		setIsCardCollapsed(!isCardCollapsed) 
	}

  return (
	<div>
		<Navbar
			  handleCardCollapse={handleCardCollapse}
		/>
		<Title />
		<TitleButtons />
		<Restaurants />
		<Footer />
	</div>
  );
};

export default App;
