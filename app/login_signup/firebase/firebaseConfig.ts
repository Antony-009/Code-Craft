import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  information of firebase
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
