
import React from "react";
import './style.css';

function Header() {
  return (
    <div className="headerChild">

        <div className="starwars-demo">
            <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star" />
            <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" />
        </div>


     {/* <p className="whee">🛸</p> */}
    </div>
  );
}

export default Header;