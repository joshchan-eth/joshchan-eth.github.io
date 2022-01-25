import React from "react";
import MainBg from "./img/main-bg.png";
import SocialBundle from "./Social-Bundle";
import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  // eslint-disable-next-line
  Switch,
  // eslint-disable-next-line
  Route,
  Link
} from "react-router-dom";

function Main() {

  // const [Account, setAccount] = React.useState(null);
  const [connectButtonText, setConnectButtonText] = React.useState("Connect Wallet");
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [defaultAccount, setDefaultAccount] = React.useState(null);

  function connectWalletHandler(){
      if(window.ethereum){
          window.ethereum.request({method: "eth_requestAccounts"})
          .then(result => {
              accountChangedHandler(result[0]);
              setConnectButtonText("Wallet Connected")
          })
      } else {
          setErrorMessage("Please Install MetaMask.");
          console.log(errorMessage);
      }
  }

  function accountChangedHandler(newAccount){
      setDefaultAccount(newAccount);
  }

  return (
    <div>
      <header>
      <Link to="/" > <img src={require("./img/Logo.png")} alt="logo" /> </Link>
        <div>
          <p>{defaultAccount}</p>
          <button className="ConnectWallet" onClick={connectWalletHandler} > {connectButtonText} </button>
        </div>
      </header>
      <p className="errorText">{errorMessage}</p>
    <section className="main" style={{ backgroundImage: `url(${MainBg})`, width:"100%"}}>
      <div style={{height:"30px"}} />
      <div className="mainCard">
        <h1>
          Write as you always do, <br/> and earn as you never before_
        </h1>
        <p>
          The Very First Write-to-Earn System with Web3.
        </p>
        <button className="ConnectWallet" onClick={connectWalletHandler} > {connectButtonText} </button>
      </div>
      <div style={{height:"100px"}}/>
      <SocialBundle />
    </section>
    </div>
  );
}

export default Main;