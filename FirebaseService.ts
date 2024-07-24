import { initializeApp } from "firebase/app";

import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVehi6VMJzEO54C3NEhkVSdDYVTMHeFNo",
  authDomain: "fitai-2e02d.firebaseapp.com",
  databaseURL: "https://fitai-2e02d-default-rtdb.firebaseio.com",
  projectId: "fitai-2e02d",
  storageBucket: "fitai-2e02d.appspot.com",
  messagingSenderId: "174909441573",
  appId: "1:174909441573:web:42afe0626c6efa57e6e1cc",
  measurementId: "G-QBV30VMPSB",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_DB = getDatabase();
const FIREBASE_DB_REF = ref(FIREBASE_DB);

export const saveToken = async (userId: string, token: string) => {
  const values =
    (await get(child(FIREBASE_DB_REF, `userTokens/${userId}/`))).val() ?? {};
  const payload = { ...values, token };
  set(ref(FIREBASE_DB, `userTokens/${userId}`), payload);
};
