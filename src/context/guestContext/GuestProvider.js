import React, { useReducer } from "react";
import guestReducer from "./guestReducer";
import GuestContext from "./guest-context";
import {
  TOGGLE_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
  TOGGLE_CONFIRM_GUEST,
  CLEAR_UPDATE_GUEST,
} from "../types";
// GuestState -> GuestProvider
// isconfirmed -> isConfirmed

const defaultGuestState = {
  // To filter the guests showing only attending guests
  filterGuest: false,
  // To filter the guests on the searched term
  searchTerm: null,
  // The guest which is selected for editing
  editActiveGuest: null,
  // Array of all the guests invited
  guests: [
    {
      id: 1,
      name: "Baburao Apte",
      phone: "111 222 3333",
      dietary: "Vegan",
      isConfirmed: false,
    },
    {
      id: 2,
      name: "Ghanshyam",
      phone: "222 333 4444",
      dietary: "Non-veg",
      isConfirmed: true,
    },
    {
      id: 3,
      name: "Raju",
      phone: "333 444 5555",
      dietary: "Pescetarian",
      isConfirmed: true,
    },
  ],
};

// Provider component of the context
const GuestProvider = (props) => {
  const [guestState, dispatchGuestAction] = useReducer(
    guestReducer,
    defaultGuestState
  );

  const toggleFilterHandler = () => {
    dispatchGuestAction({
      type: TOGGLE_FILTER,
    });
  };

  const searchGuestHandler = (guestName) => {
    dispatchGuestAction({
      type: SEARCH_GUEST,
      guestName,
    });
  };

  const clearSearchHandler = () => {
    dispatchGuestAction({
      type: CLEAR_SEARCH,
    });
  };

  const addGuestHandler = (guest) => {
    dispatchGuestAction({
      type: ADD_GUEST,
      guest,
    });
  };

  const removeGuestHandler = (id) => {
    dispatchGuestAction({
      type: REMOVE_GUEST,
      id,
    });
  };

  const updateGuestHandler = (guest) => {
    dispatchGuestAction({
      type: UPDATE_GUEST,
      guest,
    });
  };

  const clearUpdateHandler = () => {
    dispatchGuestAction({
      type: CLEAR_UPDATE_GUEST,
    });
  };

  const toggleConfirmHandler = (guest) => {
    dispatchGuestAction({
      type: TOGGLE_CONFIRM_GUEST,
      guest,
    });
  };

  const guestContext = {
    guests: guestState.guests,
    filterGuest: guestState.filterGuest,
    searchTerm: guestState.searchTerm,
    editActiveGuest: guestState.editActiveGuest,
    toggleFilterHandler,
    searchGuestHandler,
    clearSearchHandler,
    addGuestHandler,
    removeGuestHandler,
    updateGuestHandler,
    clearUpdateHandler,
    toggleConfirmHandler,
  };

  return (
    <div>
      <GuestContext.Provider value={guestContext}>
        {props.children}
      </GuestContext.Provider>
    </div>
  );
};

export default GuestProvider;
