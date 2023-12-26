import {React} from 'react';


import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div className="Header">
        <div className="Logo">
          <img
            style={{ width: "150px" }}
            alt="logo1"
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;