import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function SignIn() {
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return <button onClick={signInWithGoogle}>Sign In</button>;
}

export default SignIn;
