import React, { useContext, useState } from "react";
import { CartContext, getAmountOfTimesInCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserBottons = () => {
  const [amounOfItems, setAmounOfItems] = useState(0);
  const cartInfo = useContext(CartContext);
  return (
    <div className="userBotton-div">
      <button
        onClick={() => {
          cartInfo.setIsCartOpen(true);
        }}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        {!!amounOfItems && (
          <div id="header__icon--contador">{amounOfItems}</div>
        )}
      </button>

      <Link to="/history">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

export default UserBottons;
