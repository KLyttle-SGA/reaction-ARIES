import React from 'react';

function CreateCardDOW(props) {
    return (
        <div>

            <div className="food-page">
                <div className="restaurant-title">
                    <h2>{props.name}</h2>
                    <p>{props.address} <span className="separation-bar"> | </span> {props.number}</p>
                </div>
                <div className="cards-section-header">
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

                <div className="liquid-container">
                    <div className="row content">
                        <div className="col-4">
                            <div className="button-wrapper btn-fill-space">
                                <a type="button" target="_blank" rel="noreferrer noopener" href={props.menu} className="btn btn-primary new-buttons">
                                    <i className="fa-solid fa-scroll"></i>
                                    <br />
                                    <p>MENU</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="button-wrapper btn-fill-space">
                                <a type="button" target="_blank" rel="noreferrer noopener" className="btn btn-primary-disabled new-buttons disabled">
                                    <i className="fa-solid fa-truck-ramp-box"></i>
                                    <br />
                                    <p>ORDER</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="button-wrapper btn-fill-space">
                                <a type="button" target="_blank" rel="noreferrer noopener" className="btn btn-primary-disabled new-buttons disabled">
                                    <i className="fa-regular fa-window-maximize"></i>
                                    <br />
                                    <p>WEB</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default CreateCardDOW;