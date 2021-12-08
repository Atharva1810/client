import React, { useContext, useState } from "react";
import GuestContext from "../../context/guestContext/guest-context";

// React component to add the guest
const GuestForm = () => {
  const { editActiveGuest, addGuestHandler } = useContext(GuestContext);

  const defaultState = {
    name: editActiveGuest ? editActiveGuest.name : "",
    phone: editActiveGuest ? editActiveGuest.phone : "",
    dietary: editActiveGuest ? editActiveGuest.name : "Non-veg",
  };

  const [inputState, setInputState] = useState(defaultState);

  if (editActiveGuest) {
    setInputState({
      name: editActiveGuest.name,
      phone: editActiveGuest.phone,
      dietary: editActiveGuest.dietary,
    });
  }

  const inputChangeHanlder = (event) => {
    setInputState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  // Using the addGuestHandler to add the guest to the guest

  console.log(editActiveGuest);
  console.log("form guest");
  // Form submit handler which triggers addGuestHanlder in the guestReducer function
  const formSubmitHandler = (event) => {
    event.preventDefault();

    addGuestHandler({
      name: inputState.name,
      phone: inputState.phone,
      dietary: inputState.dietary,
    });
    setInputState(defaultState);
  };

  return (
    <div className="invite-section">
      <h1>Invite Someone</h1>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={inputState.name}
          onChange={inputChangeHanlder}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={inputState.phone}
          onChange={inputChangeHanlder}
        />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">
            Non-veg
            <input
              type="radio"
              name="dietary"
              value="Non-veg"
              checked={true}
              onChange={inputChangeHanlder}
            ></input>
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Vegan
            <input
              type="radio"
              name="dietary"
              value="Vegan"
              onChange={inputChangeHanlder}
            ></input>
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Pescetarian
            <input
              type="radio"
              name="dietary"
              value="Pescetarian"
              onChange={inputChangeHanlder}
            ></input>
            <span className="checkmark"></span>
          </label>
        </div>
        <input
          type="submit"
          value={editActiveGuest ? "Update Guest" : "Add Guest"}
          className="btn"
        />
      </form>
    </div>
  );
};

export default GuestForm;
