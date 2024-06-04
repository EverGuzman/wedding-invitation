import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "./firebase";
import { RSVPModel } from "./models/rsvp";

export const saveRSVP = async (data: RSVPModel) => {
  const rsvpCol = collection(database, "/rsvp");
  const rsvp = {
    ...data,
    timestamp: serverTimestamp(),
  };
  await addDoc(rsvpCol, rsvp);
};
