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
import ConnectWalletButton from "./ConnectWalletButton";

function Header() {

    const [Account, setAccount] = React.useState(null);

    function updateAccount(){
        window.ethereum.request({method: "eth_requestAccounts"})
        .then(result => {
            setAccount(result[0]);
        })
    }

    return(
        <header>
            <Link to="/" > <img src={require("./img/Logo.png")} alt="logo" /> </Link>
            <div>
                <p>{Account}</p>
                <button onClick={updateAccount} style={{backgroundColor:"black", padding:"0px", borderRadius:"8px", border:"none"}}><ConnectWalletButton /></button>
                {/* <button onClick={updateAccount} /> */}
            </div>
        </header>
    );
};

export default Header;