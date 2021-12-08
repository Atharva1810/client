import React, { useContext } from "react";
import GuestContext from "../../context/guestContext/guest-context";

// Component to show the statistics of all the guests invited
const GuestCounter = () => {
  const { guests } = useContext(GuestContext);

  const totalInvited = guests.length;
  let totalAttending = 0;
  let totalNonvegInvited = 0;
  let totalNonvegAttending = 0;
  let totalVeganInvited = 0;
  let totalVeganAttending = 0;
  let totalPescetarianInvited = 0;
  let totalPescetarianAttending = 0;

  guests.forEach((guest) => {
    if (guest.dietary === "Non-veg") {
      if (guest.isConfirmed) {
        ++totalAttending;
        ++totalNonvegAttending;
      }
      ++totalNonvegInvited;
    } else if (guest.dietary === "Vegan") {
      if (guest.isConfirmed) {
        ++totalAttending;
        ++totalVeganAttending;
      }
      ++totalVeganInvited;
    } else {
      if (guest.isConfirmed) {
        ++totalAttending;
        ++totalPescetarianAttending;
      }
      ++totalPescetarianInvited;
    }
  });

  // Returning a table consisiting of the data of the guests invited
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>{totalNonvegInvited}</td>
            <td>{totalNonvegAttending}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{totalVeganInvited}</td>
            <td>{totalVeganAttending}</td>
          </tr>
          <tr>
            <th>Pescetarians</th>
            <td>{totalPescetarianInvited}</td>
            <td>{totalPescetarianAttending}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{totalInvited}</td>
            <td>{totalAttending}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GuestCounter;
