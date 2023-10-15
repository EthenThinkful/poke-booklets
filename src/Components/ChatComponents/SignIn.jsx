import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';


function SignIn({ setErrorMsg, serverAddress, errorMsg, toast }) {
  const navigate = useNavigate();

  const auth = getAuth();
  
  const [succesfullSignUp, setSuccesfullSignUp] = useState(false);
  const checkUIDExist = async () => {
    const params = { user: auth.currentUser.uid };

    try {
      const res = await axios.get(`${serverAddress}/api/userss`, { params });

      if (res.data.id !== null) {
        setErrorMsg("Log in because you already have an account!");
        return true;
      } 
    } catch (error) {
      console.error(error);
      return false;
      // throw error;
    }
  };

  const postUID = async () => {
    let data = { userName: auth.currentUser.uid }
      axios.post(`${serverAddress}/api/users`, data).then((res) => {
        toast("User added successfully!");
        console.log("User added successfully!");
        setSuccesfullSignUp(true)
      }).catch(error => {
        console.log("User not added!");
        setErrorMsg('User already exist');
      });
  }

  // PARENT FUNCTION FOR SIGN IN 
  const signUpWithGoogle = async () => {
    setErrorMsg('');
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const currentUID = result.user.uid;
        console.log(currentUID);

        return checkUIDExist().then((exists) => {
          console.log(exists);
          // Execute postUID() if exists is not true (an error was caught)
          if (!exists) {
            postUID();
          }  
        });
      })
      .catch((error) => {
        // Handle the error from checkUIDExist() here
        console.error(error);
        // Execute postUID() when there's an error in checkUIDExist()
        // postUID();
      });
  };

  async function LoginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider); // Wait for the login process to complete
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  async function Login() {
    try {
      setErrorMsg('');
      await LoginWithGoogle();
      const params = { user: auth.currentUser.uid };
      axios.get(`${serverAddress}/api/userss`, { params }).then((res) => {
        localStorage.setItem("ID", res.data.id);
        console.log("The Guy: ", res.data);
        console.log("SILLY DOODS ID IN LOCAL STORAGE: ", localStorage.ID);
        navigate('/home');
      }).catch((err) => {
        setErrorMsg(`User does not exist.`);
      })
    }
    catch (error) {
      console.error('not workinjg');
    }
  }

  return (
    <>
      {errorMsg ? <p className='bg-red-600 rounded-xl text-xs w-[300px] p-2'>{errorMsg}</p> : null}
      {succesfullSignUp ? <p className='bg-blue-600 rounded-xl text-xs w-[300px] p-2'>Signed up Succesfully</p> : null}
      <button className="rounded-lg text-xs p-3 w-[260px] mb-2 bg-pink-300" onClick={signUpWithGoogle}>Sign up with google</button>
      <button className="rounded-lg text-xs p-3 w-[260px] bg-orange-300" onClick={Login}>Log in with google</button>
    </>
  )
}

export default SignIn;
