import { getAuth} from "firebase/auth";
function SignOut() {
const auth = getAuth()
    
  return ( auth.currentUser && (  <button onClick={() => auth.signOut()}>Sign Out</button>)
  )
}

export default SignOut