import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
		<div className="footer">
      <p>Stock, Garber, and Associates - {year}</p>
    </div>
  );
}

export default Footer;
