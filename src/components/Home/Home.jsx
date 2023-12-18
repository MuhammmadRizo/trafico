import React from "react";
import "./home.css";
import Logo from "../../assets/logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="home__section">
      <div className="header__body">
        <header>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="header__links">
            <ul>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#how">HOW TO</a>
              </li>
              <li>
                <a href="#faq">FAQS</a>
              </li>
            </ul>

            <form action="">
              <button onClick={Home}>CONTACT US</button>
            </form>
          </div>
        </header>

        <div className="body__section">
          <h1>Your awesome traffic permit consultant.</h1>

          <form action="">
            <button>
              GET STARTED <FaArrowRightLong />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
