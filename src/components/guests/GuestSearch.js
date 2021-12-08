import React, { useContext } from "react";
import GuestContext from "../../context/guestContext/guest-context";

const GuestSearch = () => {
  const { searchGuestHandler, clearSearchHandler } = useContext(GuestContext);

  const inputChangeHandler = (event) => {
    if (event.target.value) {
      searchGuestHandler(event.target.value);
    } else {
      clearSearchHandler();
    }
  };

  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder=" Search Guest by name ..."
        onChange={inputChangeHandler}
      />
      <i className="fas fa-search search-icon" />
    </div>
  );
};

export default GuestSearch;
