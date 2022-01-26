import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    {/* eslint-disable-next-line */}
      <p>Made with <span role="img">❤️</span> by Starnest. ⓒ{year} All Right Reserved.
      <br/>Photo by <a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shubham Dhage</a> on <a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    </footer>
  );
}

export default Footer;