import { useState } from "react";
import Birdmg from "/image/bird.png";
import { faEnvelope, faUser, faLock, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false){
        setError(true);
        return;
      }
      navigate("/sign-in");
      
    } catch (error) {
      setError(true);
    }
    
  };

  return (
    <div className="  flex flex-col items-center bg-slate-100  h-screen ">
      <div
        className="w-full h-[500px]  lg:h-[550px] md:h-[500px] sm:h-[500px] "
        style={{ backgroundColor: "#018ef5" }}
      />

      <div
       
        className="absolute mt-[100px]  w-[450px] bg-white h-[400px] rounded-lg  sm:w-[620px] md:w-[450px] md:h-[400px] md:left-10 lg:left-[100px] lg:w-[550px] lg:h-[500px] lg:mt-[80px] xl:left-[200px] xl:w-[580px] 2xl:left-[260px] 2xl:w-[550px] 2xl:h-[500px] xl:h-[500px]  "
      >
        <form  onSubmit={handleSubmit}>
        <h1 className=" mt-10 text-[30px] ml-10 text-gray-500 font-extralight">
          Registration
        </h1>
        <hr className=" mt-5  w-[350px] ml-10 sm:w-[520px] md:w-[360px] lg:w-[460px]" />
        <h3 className="mt-5 ml-[60px] text-gray-400 lg:mt-[40px]">User Name</h3>
        <FontAwesomeIcon
          icon={faUser}
          className="absolute text-slate-400 mt-[-19px] ml-10"
        />
        <input
          type="username"
          id="username"
          placeholder="Rayan mack"
          onChange={handle}
          className=" md:absolute w-[350px] h-[30px] ml-10 rounded-md border-2 shadow-sm pl-3 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:shadow-ml transition-all duration-300  sm:w-[520px] md:w-[240px] md:h-[34px] md:ml-[160px] md:mt-[-26px] lg:w-[300px] lg:ml-[200px]"
        />

        <h3 className="mt-5 ml-[60px] text-gray-400 lg:mt-[40px]">E-mail</h3>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="absolute text-slate-400 mt-[-19px] ml-10"
        />
        <input
          type="email"
          id="email"
          onChange={handle}
          placeholder="Queen@gmail.com"
          className=" md:absolute w-[350px] h-[30px] ml-10 rounded-md border-2 shadow-sm pl-3 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:shadow-ml transition-all duration-300  sm:w-[520px] md:w-[240px] md:h-[34px] md:ml-[160px] md:mt-[-26px] lg:w-[300px] lg:ml-[200px]"
        />

        <h3 className="mt-5 ml-[60px] text-gray-400 lg:mt-[40px]">Password</h3>
        <FontAwesomeIcon
          icon={faLock}
          className="absolute text-slate-400 mt-[-19px] ml-10"
        />
        <input
          type="password"
          id="password"
          placeholder="**********"
          onChange={handle}
          className=" md:absolute w-[350px] h-[30px] ml-10 rounded-md border-2 shadow-sm pl-3 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:shadow-ml transition-all duration-300  sm:w-[520px] md:w-[240px] md:h-[34px] md:ml-[160px] md:mt-[-26px] lg:w-[300px] lg:ml-[200px]"
        />
        <p className=" absolute hidden lg:block lg:w-[300px] lg:mt-4 lg:text-sm lg:ml-[200px] lg:text-gray-400">
          Minumum 8 characters; must have two of the following.lower case,
          upercase, numbers and symbols.
        </p>
        <button className="  absolute mt-[72px] ml-[-20px] w-[70px] h-[30px] bg-sky-500 rounded-lg hover:opacity-95 text-white hover:text-sm sm:ml-[-40px] md:ml-[360px] lg:ml-[460px] md:mt-[80px] lg:mt-[155px]">
          Sign up
        </button>
        </form>
       

        <div className="  mt-[30px]  w-[450px] border-2 bg-gray-100 h-[100px] rounded-bl-lg rounded-br-lg  sm:w-[620px] md:w-[450px] md:h-[140px] md:mt-[70px]  lg:left-[100px] lg:w-[550px] lg:h-[100px] lg:mt-[140px] xl:left-[200px] xl:w-[580px] xl:h-[100px] 2xl:left-[260px] 2xl:w-[550px]   ">
          <Link to="/sign-in">
          <button className=" absolute  mt-[10px] ml-[290px] w-[70px] h-[30px]  rounded-lg hover:opacity-95 text-gray-500 hover:text-sm sm:ml-[450px] md:ml-[280px] lg:ml-[390px]">
            Log in
          </button>
          </Link>

          <hr className=" mt-[50px]  w-[350px] ml-10 sm:w-[520px] md:w-[360px] lg:w-[460px]" />

          <p className=" absolute text-[10px] mt-2 ml-4 sm:ml-[90px] md:ml-2 lg:ml-[60px] text-gray-400 ">
            This site is protected by reCAPTCHA and the Goolge
          </p>
          <p className=" absolute text-[10px] mt-2 ml-[250px] underline hover:no-underline cursor-pointer sm:ml-[330px]  md:ml-[245px] lg:ml-[295px] text-gray-400">
            Privacy Policy
          </p>
          <p className=" absolute text-[10px] mt-2 ml-[313px] sm:ml-[395px] md:ml-[310px] lg:ml-[360px] text-gray-400">
            and
          </p>
          <p className=" absolute text-[10px] mt-2 ml-[335px] underline hover:no-underline cursor-pointer sm:ml-[420px] md:ml-[335px] lg:ml-[380px] text-gray-400">
            {" "}
            Terms of Service
          </p>
          <p className=" absolute text-[10px] mt-5 ml-[200px] sm:ml-[500px] sm:mt-2 md:mt-5 md:ml-[200px] lg:mt-2 lg:ml-[460px] text-gray-400">
            apply.
          </p>
          <p className="    text-red-500">{error && 'Something went wrong!'}</p>
        </div>
        </div>
      <h1 className="hidden md:block md:absolute md:ml-[500px] md:mt-32 md:text-3xl text-gray-100 md:w-[250px] md:font-extralight lg:ml-[550px] xl:ml-[550px] 2xl:ml-[400px]">
        {" "}
        You're on your way to spify new
      </h1>
      <h1 className="hidden md:block md:absolute md:ml-[500px] md:mt-[200px] md:text-3xl text-gray-100 md:w-[250px] md:font-extralight lg:ml-[550px] xl:ml-[550px] 2xl:ml-[400px] ">
        Documentation!
      </h1>

      <img
        src={Birdmg}
        alt="image"
        className=" hidden  lg:block xl:block 2xl:block lg:absolute lg:w-[350px]  lg:ml-[500px] lg:mt-[280px] xl:ml-[460px] 2xl:ml-[350px] "
      />
      
    </div>

  );
}
