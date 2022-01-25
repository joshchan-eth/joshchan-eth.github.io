import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    {/* eslint-disable-next-line */}
      <p>Made with <span role="img">❤️</span> by Starnest. ⓒ{year} All Right Reserved. </p>
    </footer>
  );
}

export default Footer;