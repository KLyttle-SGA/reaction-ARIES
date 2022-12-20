import React from "react";

function Navbar(props) {

	function handleClick() {
		props.handleCardCollapsed()
	}

	return (
		<div>
			<a href="#title" className="btn btn-outline-primary nav-button to-top" type="button">
				<i className="fa-solid fa-caret-up"></i>
			</a>
			<a onClick={handleClick} className="btn btn-outline-primary nav-button toggle-collapse" type="button">
				{props.isCardCollapsed ? <i className="fa-regular fa-window-maximize nav-maximize"></i> :
					<i className="fa-solid fa-window-minimize nav-minimize"></i>
				}
			</a>
		</div>
	);
}

export default Navbar;
