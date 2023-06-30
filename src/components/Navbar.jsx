import React from "react";

function Navbar(props) {

	function handleClick() {
		props.handleCardCollapsed()
	}

	return (
		<div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="images/aries.png" width="46" height="46"></img></a>
                    <a class="nav-link card-collapse-button" onClick={handleClick}>{props.isCardCollapsed ? <i class="fa-solid fa-caret-down"></i> : <i class="fa-solid fa-caret-up"></i>}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#pizza-sub">Pizza & Subs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#bars-diners">Bars & Diners</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#asian">Asian</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#fast-food">Fast Food</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#treats">Treats</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#coffee">Coffee</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
		</div>
	);
}

export default Navbar;
