import React from "react";

function Footer() {
  const year = new Date().getFullYear();
    return (
      <div>
		<div className="footer">
          <p>Stock, Garber, and Associates - {year}</p>
          <p className="small-footer">Kaden Lyttle, Liam Creek</p>
          <p className="smaller-footer">(v. rA-Alpha)</p>
        </div>
      </div>
  );
}

export default Footer;
