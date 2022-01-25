import React from "react";

function ConnectWalletButton() {

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
        }
    }

    function accountChangedHandler(newAccount){
        setDefaultAccount(newAccount);
    }

    return(
        <button className="ConnectWallet" onClick={connectWalletHandler} > {connectButtonText} </button>
    );
}

export default ConnectWalletButton;