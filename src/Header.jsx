import React from "react";
import {
    // eslint-disable-next-line
    BrowserRouter as Router,
    // eslint-disable-next-line
    Switch,
    // eslint-disable-next-line
    Route,
    Link
  } from "react-router-dom";

function Header() {

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

    return(
        <header>
            <Link to="/" > <img src={require("./img/Logo.png")} alt="logo" /> </Link>
            <div>
                <p>{defaultAccount}</p>
                <button className="ConnectWallet" onClick={connectWalletHandler} > {connectButtonText} </button>
            </div>
        </header>
    );
};

export default Header;