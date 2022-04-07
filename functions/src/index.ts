import * as functions from "firebase-functions";
import * as firebase from "firebase-admin";
import { Hospital, HospitalDoc } from "../../shared/types";
import axios from "axios";

const db = firebase.firestore();
const DOC_ROUTE = "root/hospitalData";

type WaitTimeApiResponse = {
  updateTime: string;
  waitTime: { hospName: string; topWait: string }[];
};

const docRef = db.doc(
  DOC_ROUTE
) as firebase.firestore.DocumentReference<HospitalDoc>;

export const fetchWaitTimes = functions.pubsub
  .schedule("3-48/15 * * * *")
  .onRun(async (context) => {
    const hospitalDocRes = await docRef.get();

    const hospitalDoc = hospitalDocRes.data();

    if (hospitalDoc === undefined) {
      return;
    }

    const apiAxiosRes = await axios.get<WaitTimeApiResponse>(
      "https://www.ha.org.hk/opendata/aed/aedwtdata-en.json"
    );
    const apiRes = apiAxiosRes.data;

    hospitalDoc.apiUpdateTime = apiRes.updateTime;
    hospitalDoc.waitTimes = hospitalDoc.waitTimes.map(
      (hospitalData): Hospital => {
        const found = apiRes.waitTime.find(
          (e) => e.hospName === hospitalData.name[0]
        );

        if (found === undefined) {
          console.log(
            "An error occured in matching hospital names",
            hospitalData.name
          );
          return { ...hospitalData };
        }

        const waitTimeTokenized = found.topWait.split(" ");

        return {
          ...hospitalData,
          waitTimeValue: parseInt(waitTimeTokenized[1]),
          waitTimeModifier: waitTimeTokenized[0] === "Over" ? ">" : "~",
          waitTimeText: found.topWait,
        };
      }
    );

    await db.doc(DOC_ROUTE).set(hospitalDoc);
  });
