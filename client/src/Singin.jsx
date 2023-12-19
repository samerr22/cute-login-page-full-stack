import { useState } from "react";

import BirdImg from "/image/birds.png";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "./redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Singin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-slate-100">
      <div
        className="w-full h-[350px]  lg:h-[220px] md:h-[300px] sm:h-[340px] "
        style={{ backgroundColor: "#018ef5" }}
      />
      <img
        src={BirdImg}
        alt=""
        className=" absolute mt-[18px] w-[200px] z-50 lg:mt-[-8px] lg:w-[220px] "
      />

      <div className="absolute mt-[100px]  w-[450px] bg-white h-[300px] rounded-lg  sm:w-[620px] md:w-[450px] md:h-[200px]   lg:w-[550px] lg:h-[200px] lg:mt-[80px]  xl:w-[580px]   2xl:w-[550px] 2xl:h-[200px] xl:h-[200px]  ">
        <form onSubmit={handleSubmit}>
          <h3 className="mt-5 ml-[60px] text-gray-400 lg:mt-[40px]">E-mail</h3>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute text-slate-400 mt-[-19px] ml-10"
          />
          <input
            type="email"
            id="email"
            placeholder="Queen@gmail.com"
            className=" md:absolute w-[350px] h-[30px] ml-10 rounded-md border-2 shadow-sm pl-3 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:shadow-ml transition-all duration-300  sm:w-[520px] md:w-[240px] md:h-[34px] md:ml-[160px] md:mt-[-26px] lg:w-[300px] lg:ml-[200px]"
            onChange={handleChange}
          />

          <h3 className="mt-5 ml-[60px] text-gray-400 lg:mt-[40px]">
            Password
          </h3>
          <FontAwesomeIcon
            icon={faLock}
            className="absolute text-slate-400 mt-[-19px] ml-10"
          />
          <input
            type="password"
            id="password"
            placeholder="**********"
            className=" md:absolute w-[350px] h-[30px] ml-10 rounded-md border-2 shadow-sm pl-3 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:shadow-ml transition-all duration-300  sm:w-[520px] md:w-[240px] md:h-[34px] md:ml-[160px] md:mt-[-26px] lg:w-[300px] lg:ml-[200px]"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className=" absolute  mt-[100px] ml-[-100px] w-[70px] h-[30px]  rounded-lg hover:opacity-95 text-gray-500 hover:text-sm sm:ml-[-120px] md:ml-[280px] md:mt-[70px] lg:ml-[390px]"
          >
            {loading ? "Signin..." : "Sign in"}
          </button>
        </form>

        <div className=" mt-[60px]  w-[450px] border-2 bg-gray-100 h-[100px] rounded-bl-lg rounded-br-lg  sm:w-[620px] md:w-[450px] md:h-[140px] md:left-10 lg:left-[100px] lg:w-[550px] lg:h-[100px] lg:mt-[60px] xl:left-[200px] xl:w-[580px] xl:h-[100px] 2xl:left-[260px] 2xl:w-[550px]   ">
          <Link to="/sign-up">
            <button className=" absolute mt-[10px] ml-[370px] w-[70px] h-[30px] bg-sky-500 rounded-lg hover:opacity-95 text-white hover:text-sm sm:ml-[520px] md:ml-[360px] lg:ml-[460px]">
              Sign up
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
          </p>{" "}
          {error ? error.message || "Something went worong!" : ""}
          <p className=" mt-[-40px] ml-56"></p>
        </div>
      </div>
    </div>
  );
}
