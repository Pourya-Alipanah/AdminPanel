import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "@components/firebaseConfig";

const auth = getAuth(appAuth);

export const loginAction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const signIn = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const res = signIn.user;
    return res;
  } catch (error) {
    return error.message;
  }
};
