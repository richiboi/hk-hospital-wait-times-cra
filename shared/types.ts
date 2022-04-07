type StringLanguages = [string, string, string];

type RegionEnglish = "NT" | "KL" | "HK" | "LT";
type RegionTC = "新界" | "九龍" | "香港" | "大嶼山";
type RegionSC = "新界" | "九龙" | "香港" | "大嶼山";
type Region = [RegionEnglish, RegionTC, RegionSC];

export type Hospital = {
  address: StringLanguages;
  cluster: StringLanguages;
  district: StringLanguages;
  latitude: number;
  longitude: number;
  name: StringLanguages;
  region: Region;
  waitTimeModifier: "~" | ">";
  waitTimeText: string;
  waitTimeValue: number;
};

export type HospitalDoc = {
  apiUpdateTime: string;
  waitTimes: Hospital[];
};
