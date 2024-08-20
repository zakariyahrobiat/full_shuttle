import { database } from "../../../firebase";
import { ref, set, onValue, child, push, update, off } from "firebase/database";
import { IAuthModel, IUser } from "../../auth/models";
import { object } from "yup";
const db = database;
export async function writeUserData(userId: string, request: IUser) {
  try {
    const dataToWrite: any = {
      username: request.firstname,
      email: request.email,
      phone: request.phone,
      userType: request.userType,
    };
    if (
      request.userType === "passenger" &&
      request.matricNumber &&
      request.department
    ) {
      dataToWrite.matricNumber = request.matricNumber;
      dataToWrite.department = request.department;
    }

    // Conditionally add plateNumber if user is a driver
    if (
      request.userType === "driver" &&
      request.plateNumber &&
      request.numberOfSeats
    ) {
      dataToWrite.plateNumber = request.plateNumber;
      dataToWrite.numberOfSeats = request.numberOfSeats;
    }
    await set(ref(db, "users/" + userId), dataToWrite);
    console.log("User data written successfully");
  } catch (error) {
    console.log("Error writing user data:", error);
  }
}

export function listenToUserData(
  userId: string,
  userType: string,
  callback: (data: any[]) => void
) {
  const userRef = ref(db, "users");

  const listener = onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const filteredData = Object.values(data).filter((user: any) => {
        if (userType === "driver") {
          return user.userType === "passenger"; // If userType is driver, return passengers
        } else if (userType === "passenger") {
          return user.userType === "driver"; // If userType is passenger, return drivers
        }
        return false;
      });
      callback(filteredData);
    } else {
      callback([]);
    }
  });
  return () => off(userRef, "value", listener);
}
