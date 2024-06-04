import * as functions from "firebase-functions";
import { RSVPModel } from "./models/rsvp";
import { exportRSVP } from "./rsvp";

export const OnCreateRSVPDocument = functions.firestore
  .document("rsvp/{id}")
  .onCreate(async (snapshot) => {
    const newDocument = snapshot.data();
    const rsvp: RSVPModel = {
      id: snapshot.id,
      goingToAttend: newDocument.goingToAttend,
      name: newDocument.name,
      phone: newDocument.phone,
      numberOfPeople: newDocument.numberOfPeople,
    };

    await exportRSVP(rsvp);
  });
