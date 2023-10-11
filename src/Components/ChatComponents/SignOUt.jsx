import { getAuth} from "firebase/auth";
function SignOut() {
const auth = getAuth()

const handleSignOut = () => {
  auth.signOut();
}
  return ( auth.currentUser && (  <button onClick={handleSignOut} className="bg-red-200 rounded-xl p-2 m-2 text-xs">chat sign out</button>)
  )
}

export default SignOut