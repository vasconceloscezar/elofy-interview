import axios from "axios";
import { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const serverRequest = async (endpoint, query) => {
    const url = "http://localhost:8000";
    const response = await axios({
      method: "get",
      headers: {
        Accept: "application/json",
      },
      url: `${url}/api/v1/${endpoint}?${query}`,
    });
    return response;
  };
  const onSubmit = async () => {
    if (password.length < 6) {
      window.alert("Senha deve conter 6 dígitos");
      return;
    }
    await serverRequest("login", `username=${username}&password=${password}`).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="w-screen h-screen sans-serif bg-e-primary flex justify-center items-center">
      <div className="w-200 h-200  grid gap-6 mb-6 md:grid-cols-2">
        <input placeholder={"Username"} type={"string"} value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder={"Senha"} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-e-secondary w-full" onClick={onSubmit}>
          Entrar
        </button>
      </div>
    </div>
  );
}
