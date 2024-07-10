import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidationdata } from "../Utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { Background_Img, USER_AVATAR } from "../Utils/constant";

const Login = () => {
  const [signin, setSignin] = useState(true);
  const [errormessage, setErrormessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignin = () => {
    setSignin(!signin);
  };

  const handlebuttonclick = async () => {
    // Validate the data
    const message = checkvalidationdata(
      email.current.value,
      password.current.value
    );
    if (message) {
      setErrormessage(message);
      return;
    }

    try {
      if (!signin) {
        // Signup logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        // Update profile
        await updateProfile(user, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        });

      } else {
        // Signin Logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
      }
    } catch (error) {
      setErrormessage(error.message);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
export const Background_Img = "https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          src={Background_Img}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-1 items-center justify-center relative z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md p-10 bg-black bg-opacity-80 text-white rounded-lg shadow-lg"
        >
          <h1 className="font-bold text-3xl py-4">
            {signin ? "Sign In" : "Sign Up"}
          </h1>
          {!signin && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-4 w-full bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address or Phone Number"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
          <p className="text-red-500 font-bold">{errormessage}</p>
          <button
            className="p-3 my-6 bg-red-600 w-full rounded-lg"
            onClick={handlebuttonclick}
          >
            {signin ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-3 cursor-pointer" onClick={toggleSignin}>
            {signin
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Quickly"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
