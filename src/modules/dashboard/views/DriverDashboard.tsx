import Dashboard from "./Dashboard";
import { useAuth } from "../../../contexts/authContext/AuthContext";
interface DriverDashboardProps {
  userId: string;
  userType: string;
}
export default function DriverDashboard(props: DriverDashboardProps) {
  const { passengers, setPassengers } = useAuth();

  const remove = (email: string) => {
    setPassengers((prevPassengers) =>
      prevPassengers.filter((passenger) => passenger.email !== email)
    );
  };

  return (
    <Dashboard header="DRIVER DASHBOARD" username="">
      <h2 className="font-bold text-xl md:px-5 md:pt-7">Track record</h2>
      <div className="flex gap-5 md:gap-10 text-center my-5 md:mx-10 md:my-3">
        <div className="bg-gray-800 w-40 text-white border-solid border-2 border-gray-500 rounded px-2 py-1">
          <p>number of trips</p>
          <p>7</p>
        </div>
        <div className="bg-gray-800 w-40 text-white border-solid border-2 border-gray-500 rounded px-2 py-1">
          <p>customer</p>
          <p>3</p>
        </div>
      </div>
      <div>
        <h2>Ongoing Trip</h2>
        <div>
          <div className="hidden md:grid grid-cols-4 justify-between bg-gray-800 border-2 border-gray-500 p-2">
            <h2>Matric Number</h2>
            <h2>Email</h2>
            <h2>Name</h2>
            <h2></h2>
          </div>
          {passengers.map((passenger, index) => {
            const { username, email, matricNumber } = passenger;
            return (
              <div
                key={index}
                className=" flex md:block justify-between items-center border-2 md:border-t-0 border-gray-500 p-2"
              >
                <div className="md:grid grid-cols-4">
                  <div className="grid grid-cols-2 justify-between ">
                    <h2 className="md:hidden">Matric Number:</h2>
                    <h2>{matricNumber}</h2>
                  </div>
                  <div className="grid grid-cols-2 justify-between ">
                    <h2 className="md:hidden">Email:</h2>
                    <h2>{email}</h2>
                  </div>
                  <div className="grid grid-cols-2 justify-between ">
                    <h2 className="md:hidden">Name:</h2>
                    <h2>{username}</h2>
                  </div>
                  <div className="hidden md:block bg-gray-800 border-2 w-10 text-center border-gray-500 rounded-s-lg">
                    <button onClick={() => remove(email)}>X</button>
                  </div>
                </div>
                <div className="bg-gray-800 border-2 w-10 rounded-tl-lg rounded-br-lg text-center md:hidden">
                  <button onClick={() => remove(email)}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="m-auto text-center mt-5">
        <button className=" text-center px-5 py-4 font-black text-3xl rounded-tl-3xl rounded-br-2xl bg-gray-800 border-2 border-gray-500">
          START TRIP
        </button>
      </div>
    </Dashboard>
    // </BackgroundImageLayout>
  );
}
