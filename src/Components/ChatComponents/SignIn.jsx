import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function SignIn() {
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return <button className="bg-zinc-600 rounded-lg text-xs p-3 m-3" onClick={signInWithGoogle}>Sign in with google to chat with the community</button>;
}

export default SignIn;
