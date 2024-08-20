import { number } from "yup";

import Dashboard from "./Dashboard";

import { useAuth } from "../../../contexts/authContext/AuthContext";
interface PassengerProps {
  userType: string;
  userId: string;
}
function PassengerDashboard(props: PassengerProps) {
  const { drivers } = useAuth();
  console.log(drivers);

  return (
    <Dashboard header="PASSANGER DASHBOARD" username="">
      <h2 className="font-bold text-xl md:px-5 md:pt-7">Available shuttle</h2>
      <div>
        <div className="hidden md:grid grid-cols-5 justify-between bg-gray-800 border-2 border-gray-500 p-2">
          <h2>Plate Number</h2>
          <h2>Name</h2>
          <h2>Number of seats</h2>
          <h2>Available seats</h2>
          <h2></h2>
        </div>
        {drivers.map((driver) => {
          const { id, username, plateNumber, numberOfSeats, available } =
            driver;
          return (
            <div
              key={id}
              className=" flex md:block justify-between items-center border-2 md:border-t-0 border-gray-500 p-2"
            >
              <div className="md:grid grid-cols-5 items-center">
                <div className="grid grid-cols-2 justify-between ">
                  <h2 className="md:hidden">Plate Number:</h2>
                  <h2>{plateNumber}</h2>
                </div>
                <div className="grid grid-cols-2 justify-between ">
                  <h2 className="md:hidden">Name:</h2>
                  <h2>{username}</h2>
                </div>
                <div className="grid grid-cols-2 justify-between ">
                  <h2 className="md:hidden">Number of seats:</h2>
                  <h2>{numberOfSeats}</h2>
                </div>
                <div className="grid grid-cols-2 justify-between ">
                  <h2 className="md:hidden">available seats:</h2>
                  <h2>{available}</h2>
                </div>
                <div className="hidden md:block bg-gray-800 border-2 w-20 py-2  text-center border-gray-500 rounded-s-lg">
                  <h2>ORDER</h2>
                </div>
              </div>
              <div className="bg-gray-800 border-2 w-20 py-1 rounded-tl-lg rounded-br-lg text-center md:hidden">
                <h2>ORDER</h2>
              </div>
            </div>
          );
        })}
      </div>
    </Dashboard>
  );
}

export default PassengerDashboard;
