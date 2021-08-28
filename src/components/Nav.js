import React from "react";
function Nav() {
  return (
    <nav>
      <a href="#about_me"> About Me</a>
      <a href="#my_work"> My Work</a>
      <a class="contact_button" href="#contact_me">
        {" "}
        Contact Me!
      </a>
    </nav>
  );
}

export default Nav;
