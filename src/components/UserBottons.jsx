import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserBottons = () => {
  const cartInfo = useContext(CartContext);
  return (
    <div className="userBotton-div">
      <Link to={"/checkout"}>
        <button
          onClick={() => {
            cartInfo.setIsCartOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <div id="header__icon--contador">3</div>
        </button>
      </Link>
      <Link to="/history">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

export default UserBottons;
