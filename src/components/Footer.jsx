import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} | Note X</p>
    </footer>
  );
}

export default Footer;
