import { getAuth} from "firebase/auth";
function SignOut() {
const auth = getAuth()

const handleSignOut = () => {
  auth.signOut();
}
  return ( auth.currentUser && (  <button onClick={handleSignOut} className="ml-4 lg:ml-8">Logout</button>)
  )
}

export default SignOut