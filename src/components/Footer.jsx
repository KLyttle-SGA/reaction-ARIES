import React from "react";

function Footer() {
  const year = new Date().getFullYear();
    return (
      <div>
		<div className="footer">
          <p>Stock, Garber, and Associates - {year}</p>
          <div className="small-footer">
             <p>Kaden Lyttle, Liam Creek</p>
          </div>
        </div>
      </div>
  );
}

export default Footer;
