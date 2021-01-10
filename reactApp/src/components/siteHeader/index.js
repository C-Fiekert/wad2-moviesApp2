import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { AuthContext } from "../../contexts/authContext";

const SiteHeader = () => {
 const context = useContext(AuthContext);
 //const { history } = props;

  return (context.isAuthenticated ? (
    <nav className="navbar  navbar-light fixed-top" style={{backgroundColor:"#e5bb00"}}>
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        Welcome {context.userName}!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/actors/">
              Actors
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/top-rated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchLater">
              Watch Later
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" onClick={() => context.signout()}>
              Sign-Out
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
   ) : (
    <nav className="navbar  navbar-light fixed-top" style={{backgroundColor:"#e5bb00"}}>
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/actors/">
              Actors
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/top-rated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchLater">
              Watch Later
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/loginSignUp">
              Login/Sign-Up
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  ));
};

export default SiteHeader;