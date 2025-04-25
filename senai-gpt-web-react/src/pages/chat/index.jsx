import "./chat.css";
import btn from "../../assets/imgs/chat.svg";
// import btnc from "../../assets/imgs/chat.svg";
// import btnchat from "../../assets/imgs/chat.svg";
import logo from "../../assets/imgs/Chat.png";
import exemplos from "../../assets/imgs/exem.jpg";
import exempless from "../../assets/imgs/Vector.svg";
import exemples from "../../assets/imgs/img3.svg";
import aviao from "../../assets/imgs/IconSet (1).png";
import microfone from "../../assets/imgs/IconSet.png";
import botaoimagem from "../../assets/imgs/button.png";
import { useEffect, useState } from "react";

function Chat() {


  const [chats, setChats] = useState([]);
  const [chatSelecionado, setChatSelecionado] = useState(null);

  useEffect(() => {

      // Executada toda vez que a tela abre.
      getChats();


  }, []);

  const getChats = async () => {
      // Arrow Function
      let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
          headers: {
              "Authorization" : "Bearer " + localStorage.getItem("meuToken")
          }
      });

      console.log(response);

      if (response.ok == true) {

          let json = await response.json(); // Pegue as informações dos chats.

          setChats(json);

      } else {

          if (response.status == 401) {

              alert("Token inválido. Faça login novamente.");
              localStorage.clear();
              window.location.href = "/login";

          }

      }

  }

  const onLogOutClik = () => {

      localStorage.clear();
      window.location.href = "/login";

  }
  
  const clickChat = (chat) => {

    setChatSelecionado(chat);
    console.log(chat);
  }
  


  return (
    <>
      <div className="container">
        <header className="left-painel">
          <div className="top">
            <button className="btn-new-chat">+ New Chat</button>

            {chats.map(chat => (
              <button className="btn-chat" onClick={() => clickChat(chat)}>
                <img src={btn} alt="" />
                {chat.chatTitle}
              </button>
            ))}


          </div>

          <div className="bottom">
            <button className="btn">Clear Conversations</button>
            <button className="btn">Light mode</button>
            <button className="btn">My Account</button>
            <button className="btn">Updates & FAQ</button>
            <button className="btn" onClick={() => onLogOutClik()}>Log out</button>
          </div>
        </header>

        <main className="painel-central">

            {chatSelecionado == null &&(

              <>
              
              <img className="senai" src={logo} alt="Logo do SenaiGPT" />
          <div className="div-principal-text">
            <div className="exemples">
              <h3>
                <img src={exemples} alt="" />
                Examples
              </h3>
              <br />
              <p>"Explain quantum computing in simple <br /> terms"</p>
              <br />
              <p>"Got any creative ideas for a 10-year <br /> old's birthday?"</p>
              <br />
              <p>"How do I make an HTTP request in <br /> JavaScript?"</p>
              <br />
            </div>

            <div className="capacibilities">
              <h3>
                <img src={exempless} alt="" />
                Capacibilities
              </h3>
              <br />
              <p>Remembers what user said earlier in <br /> the conversation.</p>
              <br />
              <p>Allows user to provide follow-up <br /> corrections.</p>

              <br />
              <p>Trained to decline inappropriate <br /> requests.</p>
              <br />
            </div>

            <div className="limitations">
              <h3>
                <img src={exemplos} alt="" />
                Limitations
              </h3>
              <br />
              <p>May occasionally generate incorrect <br /> information.</p>
              <br />
              <p>May occasionally produce harmful <br /> instructions or biased content.</p>
              <br />
              <p>Limited knowledge of world and <br /> events after 2021.</p>
            </div>
          </div>

          
              
              
              
              </>


            )}

<div className="input-text">
            <input className="input" type="text" placeholder="Type message" />
            <img className="aviao" src={aviao} alt="Enviar" />
            <img className="microfone" src={microfone} alt="Microfone" />
            <img className="botaoimagem" src={botaoimagem} alt="Enviar Imagem" />
          </div>
        </main>
      </div>
    </>


  )


};
export default Chat;