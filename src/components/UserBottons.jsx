import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const UserBottons = () => {
  return (
    <div className="userBotton-div">
      <button>
        <FontAwesomeIcon icon={faCartShopping} />
        <div id="header__icon--contador">3</div>
      </button>
      <a>
        {" "}
        <FontAwesomeIcon icon={faUser} />{" "}
      </a>
    </div>
  );
};

export default UserBottons;
