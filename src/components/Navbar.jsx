import React from "react";

function Navbar(props) {

	function handleClick(props) {
		props.handleCardCollapse()
		console.log(props)
	}

	return (
		<div className="aries-nav">
			<div className="nav-shadow">
			<a href="#title" className="btn btn-outline-primary nav-button to-top" type="button">
				<i className="fa-solid fa-caret-up"></i>
			</a>
				<a onClick={handleClick} className="btn btn-outline-primary nav-button toggle-collapse" type="button">
				Toggle Collapse
			</a>
			</div>
		</div>
	);
}

export default Navbar;
