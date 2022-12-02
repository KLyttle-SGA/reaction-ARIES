import React from "react";

//var cardIsCollapsed = true;

//function handleClick() {
//	if (cardIsCollapse = true) {
//		var cardIsCollapse = false;
//	} else {
//		var cardIsCollapse = true;
//	}
//}

function Navbar() {
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
