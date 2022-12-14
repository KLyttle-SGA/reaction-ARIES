import React from "react";
import Tags from "./Tags.js"

function TitleName() {
	return (
		<section id="title">

			<div className="title-container">
				<div className="title">
				<h1 id="title-text" className="">A R I E S</h1>
				<p className="subtitle">
					{/*<span className="sub-bold">R</span>EACTING⠀*/}
					<span className="sub-bold">A</span>GGREGATION⠀OF⠀
					<span className="sub-bold">R</span>ESTAURANTS⠀FOR⠀
										<br className="enable-title-break"/>
					THE⠀
					{/*<span className="sub-bold">I</span>DLE,⠀*/}
					{/*<span className="sub-bold">T</span>ENACIOUS,⠀AND⠀*/}
					<span className="sub-bold">I</span>NSATIABLE⠀
					<span className="sub-bold">E</span>MPLOYEES⠀OF⠀
					<span className="sub-bold">S</span>GA
					</p>
				</div>

				<Tags maxTagCount="10"/>

			</div>

		</section>
	);
}

export default TitleName;
