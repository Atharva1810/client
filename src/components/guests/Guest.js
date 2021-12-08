import React, { useContext } from "react";
import GuestContext from "../../context/guestContext/guest-context";

const Guest = (props) => {
  const { id, name, dietary, phone, isConfirmed } = props.guest;

  const { removeGuestHandler, updateGuestHandler, toggleConfirmHandler } =
    useContext(GuestContext);

  // Dynamically changing styles bases on the dietary of the guest
  let dietaryStyle;
  if (dietary === "Vegan") {
    dietaryStyle = "badge green";
  } else if (dietary === "Non-veg") {
    dietaryStyle = "badge red";
  } else {
    dietaryStyle = "badge seaGreen";
  }

  const deleteButtonHandler = () => {
    removeGuestHandler(id);
  };

  const editButtonHandler = () => {
    updateGuestHandler(props.guest);
  };

  const confirmButtonHandler = () => {
    toggleConfirmHandler({
      ...props.guest,
      isConfirmed: !isConfirmed,
    });
  };

  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label
            className={`${isConfirmed && "confirm"}`}
            onChange={confirmButtonHandler}
          >
            Confirmed
            <i className={`fas fa-check-square ${isConfirmed && "confirm"}`}>
              <input type="checkbox" />
            </i>
          </label>
        </div>
        <div>
          <button onClick={editButtonHandler}>
            <i className="fas fa-user-edit"></i>
          </button>
          <button onClick={deleteButtonHandler}>
            <i className="fas fa-trash-alt remove"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <span className={dietaryStyle}>{dietary}</span>
        <div className="contact">
          <i className="fas fa-phone-alt" />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Guest;
