import "./login.css";

import logo from "../../assets/imgs/Chat.png";
import { useState } from "react";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {

    let response = await fetch ("https//senai-gpt-api.azzurewebsites.net/login", {
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST", //metodo que envia
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    console.log(response)
    
  }
  return (
    <>
      <body>

        <header></header>

        <main className="page-container">

          <div className="robo-image">


          </div>

          <div className="login-container">

            <img className="logo" src={logo} alt="Senai GPT - Logo" />


            <h1 id="meutitulo" className="titulo">Login</h1>

            <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Insira o e-mail" />
            <input className="inpt" value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Insira a senha" />

         

            <button className="btn" onClick={() => onLoginClick()}>Entrar</button>
          </div>

        </main>

        <footer></footer>

      </body>
    </>
  )
}

export default Login;
