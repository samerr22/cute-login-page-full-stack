import React from "react";

export default function Homee() {
  return (
    <div className="h-screen flex flex-col items-center" style={{ backgroundColor: "#018ef5" }}>
      <p className=" font-bold text-sm mt-20  w-[450px]  lg:w-[800px] "  style={{ color: "#eef4f6" }}>
        This is a MERN(MongoDB,EXpress,React,Nodejs) stack appllication with
        authentication. it allow users to sign up, login and log out, and
        provides access to protected routes only for authenticated users.
      </p>
      <p className="absolute  font-bold text-sm mt-40  w-[450px]  lg:w-[800px] " style={{ color: "#eef4f6" }}>
       The front-end the application is built with React and uses React Router for client-side routing.
       The back-end is built with Node.js and Express and uses MongoDB as the 
       database.Authentication is implemented using JSON Web Tokens (JWT), ReduxToolkite and firebase.
      </p>
      <p className="absolute  font-bold text-sm mt-72  w-[450px]  lg:w-[800px] " style={{ color: "#eef4f6" }}>
       This application is intended  as a starting point for building full-stack web aplications with
       authentication using the MERN stack. Feel free to use it as a template for your own projects!
      </p>
    </div>
  );
}
