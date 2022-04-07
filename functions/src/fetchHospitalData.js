/*
This file fetches hospital metadata and populates it into firestore
*/

const admin = require("firebase-admin");
const axios = require("axios");
const fs = require("fs").promises;

const db = admin.firestore();

const DOC_ROUTE = "root/hospitalData";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// Stores the hospital data to a local file
const getHospitalData = async () => {
  const res = await axios.get(
    "https://www.ha.org.hk/opendata/facility-hosp.json"
  );

  // Only keep hospitals that have Accident and Emergency services
  let hospitals = res.data.filter(
    (hospital) => hospital.with_AE_service_eng === "Yes"
  );

  // 0 is English, 1 is Traditional Chinese, 2 is Simplified Chinese
  hospitals = hospitals.map((hospital) => ({
    name: [
      hospital.institution_eng,
      hospital.institution_tc,
      hospital.institution_sc,
    ],
    address: [hospital.address_eng, hospital.address_tc, hospital.address_sc],
    cluster: [hospital.cluster_eng, hospital.cluster_tc, hospital.cluster_sc],
    region: [
      hospital.address_eng.slice(-2),
      hospital.address_tc.slice(0, 2),
      hospital.address_sc.slice(0, 2),
    ],
    district: ["", "", ""],
    latitude: hospital.latitude,
    longitude: hospital.longitude,
  }));

  await fs.writeFile("hopsData.json", JSON.stringify(hospitals), (err) => {
    if (err) return console.log(err);
  });
};

const uploadHospitalData = async () => {
  const hospitalDataStr = await fs.readFile(
    "/Users/richardcheung/Desktop/programming/hk-hospital-waittime/functions/src/hopsData.json"
  );
  const hospitalData = JSON.parse(hospitalDataStr);

  await db.doc(DOC_ROUTE).set({ waitTimes: hospitalData });
};

const fetchWaitTimes = async () => {
  const hospitalDocRes = await db.doc(DOC_ROUTE).get();
  const hospitalDoc = hospitalDocRes.data();

  const apiRes = await axios.get(
    "https://www.ha.org.hk/opendata/aed/aedwtdata-en.json"
  );
  const waitTimes = apiRes.data;

  console.log(waitTimes);

  return;

  // const apiRes = await getAxiosData(
  //   "https://www.ha.org.hk/opendata/aed/aedwtdata-en.json"
  // );
  // const apiUpdateTime = apiRes.updateTime;
  // const waitTimeAPIData = apiRes.waitTime;

  // hospitals = hospitals.map((hospital) => {
  //   hospital.waitTimeMsg = waitTimeAPIData.find(
  //     (elem) => hospital.name === elem.hospName
  //   ).topWait;
  //   hospital.waitTime = hospital.waitTimeMsg.split(" ")[1];
  //   return hospital;
  // });

  // await db.doc("/root/hospitalData").set({ data: hospitals, apiUpdateTime });
  // console.log("All operations successful");
};

fetchWaitTimes();
