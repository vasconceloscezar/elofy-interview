import axios from "axios";
import { useEffect, useState } from "react";
import { elofyAPI } from "../apis/elofy";
import PalindromeChecker from "./PalindromeChecker";

type UserData = { username: String; password: String };

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState<undefined | boolean>(undefined);

  const login = async (userData: UserData) => {
    // return await elofyAPI
    //   .post("/login", userData)
    //   .then((res) => {
    //     setIsLogged(true);
    //   })
    //   .catch((err) => {
    //     console.warn(err.message);
    //     setIsLogged(false);
    //   });
    console.log(userData);
    setTimeout(() => setIsLogged(true), 800);
  };

  const onSubmit = async () => {
    if (!isPasswordValid) {
      window.alert("Senha deve conter 6 dígitos");
      return;
    }
    await login({ username, password });
  };

  const handlePasswordChange = (pass: string) => {
    if (pass.length < 6) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
    setPassword(pass);
  };

  const resetFields = () => {
    setIsLogged(false);
    setIsPasswordValid(undefined);
    setUsername("");
    setPassword("");
  };
  return (
    <div className="w-screen h-screen sans-serif bg-slate-700 flex justify-center items-center">
      {!isLogged ? (
        <div className="w-200 h-200 bg-white rounded p-10 border">
          <label className="block text-e-secondary">Username</label>
          <input
            className="w-full mb-5 p-2 rounded border border-e-text"
            placeholder={"Username"}
            type={"string"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="block text-e-secondary">Password</label>
          <input
            className="w-full p-2 rounded border border-e-text"
            placeholder={"Senha"}
            type={"password"}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <p
            className={`
            w-full mb-10  text-xs italic 
            ${!isPasswordValid ? "text-red-500" : "text-green-700"} 
            `}
          >
            {!isPasswordValid ? "Password must contain at least 6 digits." : "Valid pasword!"}
          </p>

          <button className="mt-3 bg-e-primary  p-3 text-white text-xl w-full" onClick={onSubmit}>
            Entrar
          </button>
        </div>
      ) : (
        <PalindromeChecker reloadLogin={() => resetFields()} />
      )}
    </div>
  );
}
