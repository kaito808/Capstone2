import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Kaito Higashi - Springboard Capstone
          2. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
