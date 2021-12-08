import { createContext } from "react";
// guestContext -> guest-context

const GuestContext = createContext({
  filterGuest: false,
  searchTerm: null,
  editActiveGuest: null,
  guests: [],
});

export default GuestContext;
