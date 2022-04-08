import { useFirestoreDocumentData } from "@react-query-firebase/firestore";
import { doc, DocumentReference } from "firebase/firestore";
import { firestore } from "./firebase";
import { HospitalDoc } from "../../shared/types";

export const useHospitalDataQuery = () => {
  const ref = doc(
    firestore,
    "root/hospitalData"
  ) as DocumentReference<HospitalDoc>;
  return useFirestoreDocumentData(["hospitalData"], ref);
};
