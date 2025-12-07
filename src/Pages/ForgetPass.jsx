import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import {  useParams } from "react-router";
import auth from "../firebase/firebase.config";

const ForgetPass = () => {
  const { email } = useParams();

  const handleSubmit = (e) => {
  
    e.preventDefault();
    const formEmail = e.target.email.value

    sendPasswordResetEmail(auth, formEmail)
      .then(() => {
       //use toastify
       window.open("https://mail.google.com/mail/u/0/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[430px] p-10 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-8">Reset Password</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              //   onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-yellow-400 hover:via-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
