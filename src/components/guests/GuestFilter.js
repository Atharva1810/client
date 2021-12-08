import React, { useContext } from "react";
import GuestContext from "../../context/guestContext/guest-context";

const GuestFilter = () => {
  const { toggleFilterHandler } = useContext(GuestContext);

  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onChange={toggleFilterHandler} />
        <span className="slider round"></span>
      </label>
      <p className="lead">Show attending only!</p>
    </div>
  );
};

export default GuestFilter;
