import React from 'react';

// THIS ABSOLUTELY NEEDS REDONE IT'S FORMATTED TOO DUMB!

function CreateCard(props) {

	return (
		<div className="col-lg-6 col-md-12 res-card column-flexbox">
			<div className="food-page">
				<div className="restaurant-title">
					<h2 className="">{props.name}</h2>
					<div className="address-number">
						<p>
							{props.address}
							<br/>
							{/*<span className="separation-bar bar-2card">|</span>*/}
							{/*<br className="card-info-break break-2card" />*/}
							{/*<span className="separation-bar bar-1card">|</span>*/}
							{/*<br className="card-info-break break-1card" />*/}
							{props.number}
						</p>
					</div>

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
								<div className="col-sm-4 col-xs-12">

									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href={props.menu} className={`btn ${props.menu.length > 0 ? "btn-primary" : "btn-primary-disabled"} new-buttons ${props.menu.length > 0 ? "" : "disabled"}`}>
											<i className="fa-solid fa-scroll disable-icons-mobile"></i>
											<br className="disable-icons-mobile" />
											<p>MENU</p>
										</a>
									</div>
								</div>

								<div className="col-sm-4 col-xs-12">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href={props.order} className={`btn ${props.order.length > 0 ? "btn-primary" : "btn-primary-disabled"} new-buttons ${props.order.length > 0 ? "" : "disabled"}`}>
											<i className="fa-solid fa-truck-ramp-box disable-icons-mobile"></i>
											<br className="disable-icons-mobile" />
											<p>ORDER</p>
										</a>
									</div>
								</div>

								<div className="col-sm-4 col-xs-12">
									<div className="button-wrapper btn-fill-space">
										<a type="button" target="_blank" rel="noreferrer noopener" href={props.website} className={`btn ${props.website.length > 0 ? "btn-primary" : "btn-primary-disabled"} new-buttons ${props.website.length > 0 ? "" : "disabled"}`}>
											<i className="fa-solid fa-window-maximize disable-icons-mobile"></i>
											<br className="disable-icons-mobile"/>
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
