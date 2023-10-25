import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { appAuth } from "@components/firebaseConfig";

const auth = getAuth(appAuth);

export const registerAction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const signUp = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const res = signUp.user;
    return res;
  } catch (e) {
    return e.message;
  }
};
