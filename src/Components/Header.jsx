import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { logos, Prefered_Languges, USER_AVATAR } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/GptSlice";
import lang from "../Utils/languageconstant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component is unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggel GPT Search
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={logos} alt="logo" />
      {user && (
        <div className="flex p-2 gap-x-4">
          <select className="p-2 bg-gray-900 text-white m-2">
            {Prefered_Languges.map((lang) => (
              <option key={lang.indentifier} value={lang.indentifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className=" h-12 px-4 bg-inherit text-white font-bold border-4 border-red-800 rounded"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img
            className="w-12 h-12 rounded-lg"
            src={user.photoURL || { USER_AVATAR }}
            alt="user profile"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

// Date: 2024-06-19
// 2 video TimeRanges 15:30
