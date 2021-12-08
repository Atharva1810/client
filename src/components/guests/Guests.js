import React, { useContext } from "react";
import GuestContext from "../../context/guestContext/guest-context";
import Guest from "./Guest";

// Component that displays all the guests present in the array
const Guests = () => {
  const { guests, filterGuest, searchTerm } = useContext(GuestContext);

  return (
    <div className="guests">
      {/* Displaying guests based conditionally if the filterGuest is true or false */}

      {/* Displaying all guests*/}
      {!filterGuest &&
        !searchTerm &&
        guests.map((guest) => <Guest key={guest.id} guest={guest} />)}

      {/* Displating only those guests who are attending */}
      {filterGuest &&
        !searchTerm &&
        guests.map(
          (guest) => guest.isConfirmed && <Guest key={guest.id} guest={guest} />
        )}

      {/* Displaying only those guests who are not attending and are being searched */}
      {!filterGuest &&
        searchTerm &&
        guests.map((guest) => {
          return (
            guest.name.toLowerCase().includes(searchTerm) && (
              <Guest key={guest.id} guest={guest} />
            )
          );
        })}

      {/* Displating only those guests who are attending and are also being searched */}
      {filterGuest &&
        searchTerm &&
        guests.map(
          (guest) =>
            guest.isConfirmed &&
            guest.name.toLowerCase().includes(searchTerm) && (
              <Guest key={guest.id} guest={guest} />
            )
        )}
    </div>
  );
};

export default Guests;
