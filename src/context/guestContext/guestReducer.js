import {
  TOGGLE_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  ADD_GUEST,
  REMOVE_GUEST,
  TOGGLE_CONFIRM_GUEST,
  UPDATE_GUEST,
  CLEAR_UPDATE_GUEST,
} from "../types";

// Reducer function which is called by the dispatcher
export default (state, action) => {
  switch (action.type) {
    // Case for toggling the filter by attending
    case TOGGLE_FILTER:
      return {
        ...state,
        filterGuest: !state.filterGuest,
      };

    // Case for searching guests by the guest name
    case SEARCH_GUEST:
      return {
        ...state,
        searchTerm: action.guestName,
      };

    //  Case for clearing the guest search
    case CLEAR_SEARCH:
      return {
        ...state,
        searchTerm: null,
      };

    //  Case for adding the guest in guests array
    case ADD_GUEST:
      const guest = action.guest;
      guest.id = Date.now();
      guest.isConfirmed = false;

      return {
        ...state,
        guests: [...state.guests, guest],
      };
    //  Case for removing the guest by matching the id
    case REMOVE_GUEST:
      const updatedGuests = state.guests.filter(
        (guest) => action.id !== guest.id
      );

      return {
        ...state,
        guests: updatedGuests,
      };

    case UPDATE_GUEST:
      console.log("Inside update guest");
      // console.log(action.guest);
      return {
        ...state,
        editActiveGuest: action.guest,
      };

    case CLEAR_UPDATE_GUEST:
      return {
        ...state,
        editActiveGuest: null,
      };

    // Case for toggling the confirm status of the guest
    case TOGGLE_CONFIRM_GUEST:
      const id = parseInt(action.guest.id);
      return {
        ...state,
        guests: state.guests.map((guest) => {
          if (guest.id === id) {
            return action.guest;
          } else {
            return guest;
          }
        }),
      };

    default:
      return state;
  }
};
