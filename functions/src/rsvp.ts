// Google Sheet
import { google } from "googleapis";
import { RSVPModel } from "./models/rsvp";
import * as serviceAccount from "./spreadsheet-resources/serviceAccount.json";
const sheets = google.sheets("v4");

const jwtClient = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const jwtAuthPromise = jwtClient.authorize();

/**
 * It takes an RSVPModel object, converts it to an array of arrays, and then appends it to the Google
 * Sheet
 * @param {RSVPModel} rsvp - RSVPModel - The RSVP object that we want to export to Google Sheets
 */
export async function exportRSVP(rsvp: RSVPModel) {
  const finalData: Array<Array<string>> = [];
  finalData.push([
    rsvp.id,
    new Date().toDateString(),
    rsvp.goingToAttend,
    rsvp.name,
    rsvp.phone,
    rsvp.numberOfPeople.toString(),
  ]);

  await jwtAuthPromise;
  await sheets.spreadsheets.values.append(
    {
      auth: jwtClient,
      spreadsheetId: "1aLqbZX24Tl5pEWpIZX2WePaiuo6ynIOrCHg9Lvp1JhQ",
      range: "Sheet1!A1:F1",
      valueInputOption: "RAW",
      requestBody: {
        values: finalData,
        majorDimension: "ROWS",
      },
    },
    {}
  );
}
