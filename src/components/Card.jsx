import React from 'react';

function CreateCard(props) {

	return (
		<div className="col-lg-6 col-md-12 res-card">
			<div className="food-page">
				<div className="restaurant-title">
					<h2>{props.name}</h2>
					<p>{props.address} <span className="separation-bar"> |</span> {props.number}</p>
				</div>

				{props.isCardCollapsed ? "" :
					<div>
						<div className="cards-section-header description-title top-border">
							<p>Description</p>
						</div>
						<div className="description flexFont">
							{props.description}
						</div>
						<div className="cards-section-header">
							<p>Review</p>
						</div>
						<div className="review flexFont">
							{props.review}
						</div>
				{/*Show buttons when low info.*/}
				{/*	</div>*/}
				{/*}*/}


				<div className="liquid-container top-border button-top-margin">
					<div className="row content">
						<div className="col-4">
							<div className="button-wrapper btn-fill-space">
							<a type="button" target="_blank" rel="noreferrer noopener" href={props.menu} className={`btn ${props.menu.length > 0 ? "btn-primary" : "btn-primary-disabled"} new-buttons ${props.menu.length > 0 ? "" : "disabled"}`}>
									<i className="fa-solid fa-scroll"></i>
									<br/>
									<p>MENU</p>
								</a>
							</div>
						</div>

						<div className="col-4">
							<div className="button-wrapper btn-fill-space">
							<a type="button" target="_blank" rel="noreferrer noopener" href={props.order} className={`btn ${props.order.length > 0 ? "btn-primary" : "btn-primary-disabled"} new-buttons ${props.order.length > 0 ? "" : "disabled"}`}>
									<i className="fa-solid fa-truck-ramp-box"></i>
									<br/>
									<p>ORDER</p>
								</a>
							</div>
						</div>

						<div className="col-4">
							<div className="button-wrapper btn-fill-space">
							<a type="button" target="_blank" rel="noreferrer noopener" href={props.website} className={`btn ${props.website.length > 0 ? "btn-primary" : "btn-primary-disabled"} new-buttons ${props.website.length > 0 ? "" : "disabled"}`}>
								<i class="fa-solid fa-window-maximize"></i>
								<br/>
								<p>WEB</p>
							</a>
							</div>
						</div>
					</div>
					</div>
				{/*Do not show buttons when low info:*/}
					</div>
				}
			</div>
		</div>
	)	
};

export default CreateCard;
