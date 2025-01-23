import React, { useState } from "react";
import { Input } from "../SmallComponents/LogInInput";
import { Button } from "../SmallComponents/Button";

function LogIn({HandleLogIn}) {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState(""); 

  const SubmitHandler = (e) => {
    e.preventDefault();
    HandleLogIn(email , password);
    setemail('');
    setpassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center font-semibold ">
      <div className="border-2 border-white bg-[#1c1c1c] hover:shadow-xl hover:shadow-white p-24 rounded-lg ">
        <div className="text-center text-5xl font-semibold mb-10 text-white  ">
          Log In 
        </div>
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
            console.log(`Email is ${email}`);
            console.log(`Passowrd is ${password}`);
          }}
          className="flex flex-col items-center justify-center"
        >
          <Input
          src={"https://img.icons8.com/?size=100&id=diYijhqFrY_u&format=png&color=000000"}
          alt={"username"}
            OnChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
            type={"email"}
            placeholder={"Enter Your Email"}
          />
          <Input
          src={"https://img.icons8.com/?size=100&id=Y2wLu996T1To&format=png&color=000000"}
          alt={"password"}
            OnChange={(e) => {
              setpassword(e.target.value);
            }}
            value={password}
            type={"password"}
            placeholder={"Enter Your Password"}
          />
          <Button label={"Log In"} />
        </form>

        <div className="flex gap-3 justify-center items-center">
          <div className="text-white">
            Not a Member ?
          </div>
          <a href="">
          <div className= " text-white hover:text-sky-300">
            SignUp here
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
